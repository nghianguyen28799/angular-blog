import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-bussinessnews',
  templateUrl: './bussinessnews.component.html',
  styleUrls: ['./bussinessnews.component.css']
})
export class BussinessnewsComponent implements OnInit {

  constructor(private _service: NewsapiservicesService) { }

  bussinessNewsDisplay: any = [];
  ngOnInit() {
    this._service.bussinessNews().subscribe((result) => {
      this.bussinessNewsDisplay = result.articles;
    })
  }

}
