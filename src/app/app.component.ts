import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NewsapiservicesService } from './service/newsapiservices.service';
import { addMutiArticles } from './state/technews.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-blog';

  constructor(
    private _service: NewsapiservicesService,
    private store: Store<{ articles: any }>
  ) {
    this._service.topHeader().subscribe((result) => {
      this.store.dispatch(addMutiArticles(result));
    });
  }

  ngOnInit(): void {}
}
