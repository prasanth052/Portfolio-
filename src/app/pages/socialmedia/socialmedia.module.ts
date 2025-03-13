import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialmediaRoutingModule } from './socialmedia-routing.module';
import { SocialmediaComponent } from './socialmedia.component';


@NgModule({
  declarations: [
    SocialmediaComponent
  ],
  imports: [
    CommonModule,
    SocialmediaRoutingModule
  ]
})
export class SocialmediaModule { }
