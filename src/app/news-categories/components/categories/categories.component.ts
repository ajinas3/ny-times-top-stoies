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

  selectedTab = 0;

  constructor(private newsService: NewsService,
    private store: Store<{news: NewsResponse}>) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.getTopNews('world');
    }, 100);
  }

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

  getTopNews(category: string) {
     this.newsService.getTopStories(category).subscribe({
      next: (data: NewsResponse) => {
        this.store.dispatch({type: 'Update', payload: data});
      }
    });
  }
}
