import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { News } from 'src/app/models';

@Component({
  selector: 'app-detailed-news',
  templateUrl: './detailed-news.component.html',
  styleUrls: ['./detailed-news.component.scss']
})
export class DetailedNewsComponent implements OnInit {

  commentsView = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: News) { }

  ngOnInit(): void {
    console.log(this.data);
  }

}
