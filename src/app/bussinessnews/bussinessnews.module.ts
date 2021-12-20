import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BussinessnewsComponent } from './bussinessnews.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: BussinessnewsComponent,
    data: {
      titlePage: "",
    }
  }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [BussinessnewsComponent]
})
export class BussinessnewsModule { }
