import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {SharedCommonModule} from '../../shared/modules/shared-common/shared-common.module';



@NgModule({
  declarations: [LayoutComponent, HomeComponent],
  exports: [
    LayoutComponent
  ],
    imports: [
        CommonModule,
        RouterModule,
        SharedCommonModule
    ]
})
export class CoreModule { }
