import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NewsResponse, SearchResponse } from 'src/app/models';
import { AuthenticationService, NewsService, SnackbarService } from 'src/app/services';

@Component({
  selector: 'search-news',
  templateUrl: './search-news.component.html',
  styleUrls: ['./search-news.component.scss']
})
export class SearchNewsComponent implements OnInit {

  searchedResults: NewsResponse;
  page = 0;
  searchForm: FormGroup;
  serachHistory: string[] = [];
  submitted = false;

  length = 1000;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  constructor(private formBuilder: FormBuilder,
    private newsService: NewsService,
    private authenticationService: AuthenticationService,
    private snackbarService: SnackbarService) { }

  ngOnInit(): void {
    const savedHistory = localStorage.getItem(`${this.authenticationService.currentUserValue.email}_search_history`);
    this.serachHistory = savedHistory ? JSON.parse(savedHistory): [];
    this.searchForm = this.formBuilder.group({
      searchText: ['']
    });
  }

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
      }
    });
  }

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

  changePage(event) {
    this.page = event.pageIndex;
    this.searchNews();
  }

}
