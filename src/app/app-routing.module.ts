import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FrontPageComponent } from './shared/front-page/front-page.component';


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
    path: 'email',
    loadChildren: () => import('./shared/email/email.module').then( m => m.EmailModule )
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