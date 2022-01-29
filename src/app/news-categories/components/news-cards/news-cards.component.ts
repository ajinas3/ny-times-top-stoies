import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { News, NewsResponse } from '@core/models';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { DetailedNewsComponent } from '../detailed-news';

@Component({
  selector: 'app-news-cards',
  templateUrl: './news-cards.component.html',
  styleUrls: ['./news-cards.component.scss']
})
export class NewsCardsComponent implements OnInit, OnDestroy {

  data$: Observable<NewsResponse>;
  data: NewsResponse;
  dataSubscription: Subscription;

  constructor(public dialog: MatDialog,
    private store: Store<{ news: NewsResponse }>) {
    this.data$ = store.select('news');
  }

  /**
   * To subscribe the store data
   */
  ngOnInit(): void {
    this.dataSubscription = this.data$.subscribe((newsList: NewsResponse) => {
      this.data = newsList;
    });
  }

  /**
   * To show the news details
   * @param news The selected news to display
   */
  showDetails(news: News) {
    this.dialog.open(DetailedNewsComponent, {
      data: news,
      disableClose: true
    });
  }

  /**
   * To unsubscribe the store subscription
   */
  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
  }

}
