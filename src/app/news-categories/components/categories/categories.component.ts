import { Component, OnInit } from '@angular/core';
import { first, pipe } from 'rxjs';
import { NewsResponse } from 'src/app/models';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  selectedTab = 0;
  newsResponse: NewsResponse;

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.getTopNews('world');
    }, 0);
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
        this.newsResponse = data;
      }
    });
  }
}
