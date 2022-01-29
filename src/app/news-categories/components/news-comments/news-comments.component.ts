import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { COMMENTS } from '@core/constants';
import { NewsService } from '@core/services';
import { Comment } from '@core/models';

@Component({
  selector: 'app-news-comments',
  templateUrl: './news-comments.component.html',
  styleUrls: ['./news-comments.component.scss']
})
export class NewsCommentsComponent implements OnInit, OnChanges {

  @Input() url: string;
  data: Comment[];

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
  }

  /**
   * Update the comments, API not added as facing the CORS issue
   * Currently displaying the static comments saved as constants
   */
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
