import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  
  baseUrl = environment.newsBaseUrl;

  constructor(private http: HttpClient) { }

  getTopStories(category: string) {
    return this.http.get<any>(`${this.baseUrl}/topstories/v2/${category}.json?`);
  }

  getComments(newsUrl: string, offset: number) {
    return this.http.get<any>(`${this.baseUrl}/community/v3/user-content/url.json?offset=${offset}&url=${newsUrl}&`);
  }

  searchNews(text: string, page: number) {
    return this.http.get<any>(`${this.baseUrl}/search/v2/articlesearch.json?q=${text}&page=${page}&`);
  }
}
