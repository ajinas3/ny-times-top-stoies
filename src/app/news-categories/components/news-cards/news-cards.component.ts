import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { News, NewsResponse } from '@core/models';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { DetailedNewsComponent } from '../detailed-news';

@Component({
  selector: 'news-cards',
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

  ngOnInit(): void {
    this.dataSubscription = this.data$.subscribe((newsList: NewsResponse) => {
      this.data = newsList;
    });
  }

  showDetails(news: News) {
    this.dialog.open(DetailedNewsComponent, {
      data: news,
      disableClose: true
    });
  }

  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
  }

}
