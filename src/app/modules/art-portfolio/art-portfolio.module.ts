import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ArtPortfolioRoutingModule} from './art-portfolio-routing.module';
import {ArtGalleryComponent} from './components/art-gallery/art-gallery.component';
import {SharedCommonModule} from '../../shared/modules/shared-common/shared-common.module';
import { GalleryImageDetailsComponent } from './components/gallery-image-details/gallery-image-details.component';


@NgModule({
  declarations: [
    ArtGalleryComponent,
    GalleryImageDetailsComponent
  ],
  imports: [
    CommonModule,
    ArtPortfolioRoutingModule,
    SharedCommonModule
  ]
})
export class ArtPortfolioModule {
}
