import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  
  baseUrl = environment.newsBaseUrl;

  constructor(private http: HttpClient) { }

  /**
   * API call to fetch to top stories of a category
   * @param category The selected category
   * @returns HTTP observable to handle the request
   */
  getTopStories(category: string) {
    return this.http.get<any>(`${this.baseUrl}/topstories/v2/${category}.json?`);
  }

  /**
   * API call to fetch the comments of a particular news
   * @param newsUrl The actual url of the news
   * @param offset The page offset number
   * @returns HTTP observable to handle the request
   */
  getComments(newsUrl: string, offset: number) {
    return this.http.get<any>(`${this.baseUrl}/community/v3/user-content/url.json?offset=${offset}&url=${newsUrl}&`);
  }

  /**
   * API call to search article
   * @param text The searched text
   * @param page page number
   * @returns HTTP observable to handle the request
   */
  searchNews(text: string, page: number) {
    return this.http.get<any>(`${this.baseUrl}/search/v2/articlesearch.json?q=${text}&page=${page}&`);
  }
}
