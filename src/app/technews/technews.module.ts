import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnewsComponent } from './technews.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TechnewsComponent,
    data: {
      pageTitle: 'Tech News',
    },
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [TechnewsComponent],
})
export class TechnewsModule {}
