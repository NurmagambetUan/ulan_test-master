import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home.component';
import {MainComponent} from './main/main.component';
import {DetailComponent} from './detail/detail.component';
import {AboutComponent} from './about/about.component';
import {ReviewComponent} from './review/review.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: MainComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'review',
        component: ReviewComponent,
      },
      {
        path: ':id',
        component: DetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule { }
