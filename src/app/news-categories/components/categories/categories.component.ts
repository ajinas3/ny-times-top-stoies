import { Component, OnInit } from '@angular/core';
import { NewsResponse } from '@core/models';
import { NewsService } from '@core/services';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  /**
   * Make the first tab active
   */
  selectedTab = 0;

  constructor(private newsService: NewsService,
    private store: Store<{ news: NewsResponse }>) { }


  /**
   * Initially the first tab API is called
   */
  ngOnInit(): void {
    setTimeout(() => {
      this.getTopNews('world');
    }, 100);
  }

  /**
   * Function to handle the tab switching
   * @param tabOrder The tab number
   */
  switchTab(tabOrder: number) {
    switch (tabOrder) {
      case 0:
        this.getTopNews('world');
        break;

      case 1:
        this.getTopNews('science');
        break;

      default:
        break;
    }
  }

  /**
   * Function to initiate the top news API request and then handle the response
   * @param category The selected category
   */
  getTopNews(category: string) {
    this.newsService.getTopStories(category).subscribe({
      next: (data: NewsResponse) => {
        this.store.dispatch({ type: 'Update', payload: data });
      }
    });
  }
}
