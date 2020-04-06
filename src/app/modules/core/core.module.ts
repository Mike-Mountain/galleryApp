import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './components/home/home.component';



@NgModule({
  declarations: [LayoutComponent, HomeComponent],
  exports: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CoreModule { }
