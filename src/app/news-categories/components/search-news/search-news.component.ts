import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NewsResponse, SearchResponse } from '@core/models';
import { AuthenticationService, NewsService, SnackbarService } from '@core/services';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-search-news',
  templateUrl: './search-news.component.html',
  styleUrls: ['./search-news.component.scss']
})
export class SearchNewsComponent implements OnInit {

  searchedResults: NewsResponse;
  searchForm: FormGroup;

  /**
   * Search history intialised to empty and will update from localstorage
   */
  serachHistory: string[] = [];

  /**
   * To show the no data label
   */
  submitted = false;

  /**
   * Variables used for paginator configuration
   */
  page = 0;
  length = 1000;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  constructor(private formBuilder: FormBuilder,
    private newsService: NewsService,
    private authenticationService: AuthenticationService,
    private snackbarService: SnackbarService,
    private store: Store<{ news: NewsResponse }>) { }

  /**
   * Initialise the form and update the search history arrya from localstorage
   */
  ngOnInit(): void {
    const savedHistory = localStorage.getItem(`${this.authenticationService.currentUserValue.email}_search_history`);
    this.serachHistory = savedHistory ? JSON.parse(savedHistory) : [];
    this.searchForm = this.formBuilder.group({
      searchText: ['']
    });
  }

  /**
   * Function to search an article and map the response to the detailed news structure
   * @returns empty if the search text is empty
   */
  searchNews() {
    const searchedText = this.searchForm.controls['searchText'].value;
    if (!searchedText) {
      this.snackbarService.open('Please enter search text');
      return;
    }
    this.saveSearchedText(searchedText);
    this.newsService.searchNews(searchedText, this.page).subscribe({
      next: (data: SearchResponse) => {
        this.submitted = true;

        // To map the response data to detailed news type
        this.searchedResults = {
          copyright: data.copyright,
          status: data.status,
          results: data.response.docs.map((news: any) => {
            return {
              title: news.headline ? news.headline.main : '',
              abstract: news.abstract,
              byline: news.byline ? news.byline.original : '',
              published_date: news.pub_date,
              multimedia: news.multimedia,
              url: news.web_url,
            }
          })
        }
        this.store.dispatch({ type: 'Update', payload: this.searchedResults });
      }
    });
  }

  /**
   * To save and updated the searched text
   * @param text The new searched text
   */
  saveSearchedText(text: string) {
    const index = this.serachHistory.indexOf(text);
    if (index > -1) {
      this.serachHistory.splice(index, 1);
    }
    this.serachHistory.unshift(text);
    if (this.serachHistory.length > 5) {
      this.serachHistory.pop();
    }
    localStorage.setItem(`${this.authenticationService.currentUserValue.email}_search_history`, JSON.stringify(this.serachHistory));
  }

  /**
   * Function to handle the pagination
   * @param event The page number
   */
  changePage(event) {
    this.page = event.pageIndex;
    this.searchNews();
  }

}
