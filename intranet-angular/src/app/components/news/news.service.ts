import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { NewsItem } from './news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiUrl = environment.NEWS_API; // Change this to your API URL
  private singleNews = environment.SINGLE_NEWS; // Change this to your API URL

  constructor(private http: HttpClient) { }

  getNews(): Observable<{ data: NewsItem[] }> {
    return this.http.get<{ data: NewsItem[] }>(this.apiUrl);
  }

  getNewsById(id: string): Observable<{ data: NewsItem }> {
    return this.http.get<{ data: NewsItem }>(`${this.singleNews}/${id}?populate=*`);
  }
}
