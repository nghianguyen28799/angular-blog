import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of, pluck } from 'rxjs';
import { NewsapiservicesService } from 'src/app/service/newsapiservices.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { addArticle, delArticle } from '../state/technews.action';

@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css'],
})
export class TopheadingComponent implements OnInit {
  topheadingDisplay: Observable<any> = of([]);

  addForm: FormGroup = new FormGroup({
    id: new FormControl(),
    title: new FormControl(''),
    content: new FormControl(''),
  });

  constructor(
    // private _service: NewsapiservicesService,
    private store: Store<{ articles: any }>,
    config: NgbModalConfig,
    private modalService: NgbModal,
    private fb: FormBuilder
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
    this.topheadingDisplay = this.store
      .select('articles')
      .pipe(pluck('articles'));

    this.store
      .select('articles')
      .pipe(pluck('articles'))
      .subscribe(console.log);
  }

  ngOnInit() {
    // this._service.topHeader().subscribe((result) => {
    //   this.topheadingDisplay = result.articles;
    // });
    this.addForm = this.fb.group({
      id: ['', Validators.compose([Validators.required])],
      title: ['', Validators.compose([Validators.required])],
      content: ['', Validators.compose([Validators.required])],
    });
  }
  open(content: any) {
    this.modalService.open(content);
  }

  onDelArticle(title: string) {
    this.store.dispatch(delArticle({ title }));
  }
  onSubmit(): void {
    const newData = this.addForm.value;
    this.store.dispatch(addArticle(newData));
  }
}
