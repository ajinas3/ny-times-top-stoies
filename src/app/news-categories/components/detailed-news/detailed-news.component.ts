import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { News } from '@core/models';

@Component({
  selector: 'app-detailed-news',
  templateUrl: './detailed-news.component.html',
  styleUrls: ['./detailed-news.component.scss']
})
export class DetailedNewsComponent implements OnInit {

  /**
   * The component supports two type of views - News and Comments
   */
  commentsView = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: News) { }

  ngOnInit(): void {
  }

}
