import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { News, NewsResponse } from 'src/app/models';
import { DetailedNewsComponent } from '../detailed-news/detailed-news.component';

@Component({
  selector: 'news-cards',
  templateUrl: './news-cards.component.html',
  styleUrls: ['./news-cards.component.scss']
})
export class NewsCardsComponent implements OnInit {

  @Input() data: NewsResponse;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  showDetails(news: News) {
    console.log(news);
    this.dialog.open(DetailedNewsComponent, {
      data: news,
      disableClose: true
    });
  }

}
