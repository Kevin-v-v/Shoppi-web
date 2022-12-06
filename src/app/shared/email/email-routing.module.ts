import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { SuccessComponent } from './success/success.component';
import { ErrorComponent } from './error/error.component';
import { VerifiedComponent } from './verified/verified.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'success',
        component: SuccessComponent
      },
      {
        path: 'error',
        component: ErrorComponent
      },
      {
        path: 'verified',
        component: VerifiedComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailRoutingModule { }
