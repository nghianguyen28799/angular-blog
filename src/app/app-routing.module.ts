import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () => import('src/app/topheading/topheading.module').then((m) => m.TopheadingModule)
  },
  {
    path: 'tech',
    loadChildren: () => import('src/app/technews/technews.module').then((m) => m.TechnewsModule)
  },
  {
    path: 'bussiness',
    loadChildren: () => import('src/app/bussinessnews/bussinessnews.module').then((m) => m.BussinessnewsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
