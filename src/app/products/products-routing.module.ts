import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './pages/main/main.component';
import { GridProductsComponent } from './pages/grid-products/grid-products.component';
import { ViewProductComponent } from '../user/pages/productsPages/view-product/view-product.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'grid',
        component: GridProductsComponent
      },
      {
        path: 'product/:id',
        component: ViewProductComponent
      },
      {
        path: '**',
        redirectTo: 'grid'
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class ProductsRoutingModule { }