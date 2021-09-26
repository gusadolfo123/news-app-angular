import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { New } from '../models/new.model';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private httpClient: HttpClient) {}

  getNews(): Observable<New[]> {
    return this.httpClient
      .get(
        'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=b5cbf0a2c0de4afaabbd1eb5d41bcd90'
      )
      .pipe(
        map((data: any): New[] => {
          return data.articles;
        })
      );
  }
}
