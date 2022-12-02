import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FrontPageComponent } from './shared/front-page/front-page.component';
import { SuccessComponent } from './shared/email/success/success.component';
import { ErrorComponent } from './shared/email/error/error.component';
import { VerifiedComponent } from './shared/email/verified/verified.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then( m => m.ProductsModule )
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then( m => m.UserModule )
  },
  {
    path: 'email/success',
    component: SuccessComponent
  },
  {
    path: 'email/error',
    component: ErrorComponent
  },
  {
    path: 'email/verified',
    component: VerifiedComponent
  },
  {
    path: '',
    component: FrontPageComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }