import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './pages/main/main.component';
import { ProductsComponent } from './pages/productsPages/products/products.component';
import { CreateProductComponent } from './pages/productsPages/create-product/create-product.component';
import { ViewProductComponent } from './pages/productsPages/view-product/view-product.component';
import { ModifyProductComponent } from './pages/productsPages/modify-product/modify-product.component';
import { AccountComponent } from './pages/accountPages/account/account.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'createProduct',
        component: CreateProductComponent
      },
      {
        path: 'viewProduct/:id',
        component: ViewProductComponent
      },
      {
        path: 'modifyProduct/:id',
        component: ModifyProductComponent
      },
      {
        path: 'account',
        component: AccountComponent
      },
      {
        path: '**',
        redirectTo: 'products'
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
