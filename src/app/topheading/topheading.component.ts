import { Component, OnInit } from '@angular/core';
import { ActivationStart, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { NewsapiservicesService } from 'src/app/service/newsapiservices.service';

@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css']
})
export class TopheadingComponent implements OnInit {

  constructor(private _service: NewsapiservicesService, private _router: Router) { }

  searchText:string = "asdas"
  topheadingDisplay: any = [];
  pageTitle: string = "";

  ngOnInit() {
    this._service.topHeader().subscribe((result) => {
      this.topheadingDisplay = result.articles;
    })
    // this._router.events.subscribe((event) => {
    //   if(event instanceof ActivationStart) {
    //     this.pageTitle = event.snapshot.data["pageTitle"];
    //     console.log(event.snapshot.data["pageTitle"]);
    //   }
    // })
  }
}
