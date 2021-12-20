import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopheadingComponent } from './topheading.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TopheadingComponent,
    data: {
      pageTitle: 'Top Heading',
    },
  },
];

@NgModule({
  declarations: [TopheadingComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopheadingModule {}
