import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent implements OnInit {

  constructor(private _service: NewsapiservicesService) { }

  techNewsDisplay: any = [];

  ngOnInit() {
    this._service.techNews().subscribe((result) => {
      this.techNewsDisplay = result.articles;
    })
  }

}
