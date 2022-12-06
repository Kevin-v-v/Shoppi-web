import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailRoutingModule } from './email-routing.module';
import { MainComponent } from './main/main.component';
import { SharedModule } from '../shared.module';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    EmailRoutingModule,
    SharedModule
  ]
})
export class EmailModule { }
