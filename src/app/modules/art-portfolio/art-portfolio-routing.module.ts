import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ArtGalleryComponent} from './components/art-gallery/art-gallery.component';
import {GalleryImageDetailsComponent} from './components/gallery-image-details/gallery-image-details.component';

const routes: Routes = [
  {path: 'gallery', component: ArtGalleryComponent},
  {path: 'details/:id', component: GalleryImageDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtPortfolioRoutingModule {
}
