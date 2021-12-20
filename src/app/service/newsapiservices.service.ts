import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsapiservicesService {
  constructor(private _http: HttpClient) {}

  newsApiUrl =
    'https://newsapi.org/v2/everything?q=tesla&from=2021-11-20&sortBy=publishedAt&apiKey=da71357a6025464584c702f46ae38283';

  techNewsApiUrl =
    'https://newsapi.org/v2/top-headlines?category=technology&apiKey=da71357a6025464584c702f46ae38283';

  bussinessNewsApiUrl =
    'https://newsapi.org/v2/top-headlines?category=bussiness&apiKey=da71357a6025464584c702f46ae38283';

  topHeader(): Observable<any> {
    return this._http.get(this.newsApiUrl);
  }

  techNews(): Observable<any> {
    return this, this._http.get(this.techNewsApiUrl);
  }

  bussinessNews(): Observable<any> {
    return this, this._http.get(this.bussinessNewsApiUrl);
  }
}
