import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { MainComponent } from './pages/main/main.component';
import { ProductsComponent } from './pages/productsPages/products/products.component';
import { CreateProductComponent } from './pages/productsPages/create-product/create-product.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewProductComponent } from './pages/productsPages/view-product/view-product.component';
import { ModifyProductComponent } from './pages/productsPages/modify-product/modify-product.component';
import { AccountComponent } from './pages/accountPages/account/account.component';


@NgModule({
  declarations: [
    MainComponent,
    ProductsComponent,
    CreateProductComponent,
    ViewProductComponent,
    ModifyProductComponent,
    AccountComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UserRoutingModule,
    MaterialModule
  ]
})
export class UserModule { }
