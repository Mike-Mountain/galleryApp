import {Component, OnInit} from '@angular/core';
import {ArtQuery} from '../../store/art.query';
import {ActivatedRoute} from '@angular/router';
import {Art} from '../../store/art.model';

@Component({
  selector: 'app-gallery-image-details',
  templateUrl: './gallery-image-details.component.html',
  styleUrls: ['./gallery-image-details.component.scss']
})
export class GalleryImageDetailsComponent implements OnInit {

  image: Art;

  constructor(private artQuery: ArtQuery,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.image = this.artQuery.getActive() as Art;
    });
  }

}
