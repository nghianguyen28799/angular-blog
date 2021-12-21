import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsapiservicesService {
  constructor(private _http: HttpClient) {}

  newsApiUrl =
    'https://newsapi.org/v2/everything?q=tesla&from=2021-11-21&sortBy=publishedAt&apiKey=da71357a6025464584c702f46ae38283';

  techNewsApiUrl =
    'https://newsapi.org/v2/top-headlines?category=technology&apiKey=da71357a6025464584c702f46ae38283';

  bussinessNewsApiUrl =
    'https://newsapi.org/v2/top-headlines?category=bussiness&apiKey=da71357a6025464584c702f46ae38283';

  topHeader(): Observable<any> {
    return this._http.get(this.newsApiUrl);
  }

  techNews(query: string): Observable<any> {
    return this._http.get(this.techNewsApiUrl).pipe(
      map((item: any) =>
        item.articles.filter((d: any) => {
          if (!query) return true;
          else {
            return d.title.toLowerCase().startsWith(query.toLowerCase());
          }
        })
      )
    );
  }

  bussinessNews(): Observable<any> {
    return this, this._http.get(this.bussinessNewsApiUrl);
  }
}
