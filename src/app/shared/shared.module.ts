import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontPageComponent } from './front-page/front-page.component';
import { MaterialModule } from '../material/material.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SuccessComponent } from './email/success/success.component';
import { ErrorComponent } from './email/error/error.component';
import { VerifiedComponent } from './email/verified/verified.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    FrontPageComponent,
    ToolbarComponent,
    SuccessComponent,
    ErrorComponent,
    VerifiedComponent
  ],
  exports: [
    FrontPageComponent,
    ToolbarComponent
  ]
})
export class SharedModule { }