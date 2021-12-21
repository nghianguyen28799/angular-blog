import { Component, OnInit } from '@angular/core';
import { debounceTime, Subject, tap } from 'rxjs';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css'],
})
export class TechnewsComponent implements OnInit {
  private subjectKeyUp = new Subject<any>();

  constructor(private _service: NewsapiservicesService) {}

  loading: boolean = true;
  techNewsDisplay: any = [];

  ngOnInit() {
    this.getTechNew('');
    this.subjectKeyUp
      .pipe(
        tap(() => (this.loading = true)),
        debounceTime(500)
      )
      .subscribe((value) => {
        this.getTechNew(value);
      });
  }

  getTechNew(query: string) {
    this._service.techNews(query).subscribe((result) => {
      this.techNewsDisplay = result;
      this.loading = false;
      console.log(query);
    });
  }

  onSearch($event: any) {
    const value = $event.target.value;

    this.subjectKeyUp.next(value);
  }
}
