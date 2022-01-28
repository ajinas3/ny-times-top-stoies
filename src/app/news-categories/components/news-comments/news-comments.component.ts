import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { COMMENTS } from 'src/app/constants';
import { NewsService } from 'src/app/services';
import { Comment } from 'src/app/models';

@Component({
  selector: 'news-comments',
  templateUrl: './news-comments.component.html',
  styleUrls: ['./news-comments.component.scss']
})
export class NewsCommentsComponent implements OnInit, OnChanges {

  @Input() url: string;
  data: Comment[];

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    // not able to fetch data from API due to CORS issue
      // this.newsService.getComments(this.url, 0).subscribe({
      //   next: (data) => {
      //     console.log(data)
      //   }
      // });

    // Displaying static comments
    this.data = COMMENTS;
  }

}
