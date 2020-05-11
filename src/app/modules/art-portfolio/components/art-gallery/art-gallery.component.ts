import {Component, OnInit} from '@angular/core';
import {ArtService} from '../../store/art.service';
import {ArtQuery} from '../../store/art.query';
import {Observable} from 'rxjs';
import {Art} from '../../store/art.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-art-gallery',
  templateUrl: './art-gallery.component.html',
  styleUrls: ['./art-gallery.component.scss']
})
export class ArtGalleryComponent implements OnInit {

  artGallery: Observable<Art[]>;
  loading: boolean;

  constructor(private artService: ArtService,
              private artQuery: ArtQuery,
              private router: Router) {
  }

  ngOnInit(): void {
    this.loading = true;
    if (Object.keys(this.artQuery.getValue().entities).length === 0) {
      this.fetchGallery();
    }
    this.artGallery = this.artQuery.selectAll();
    this.loading = false;
  }

  private fetchGallery() {
    this.artService.get<Art[]>().subscribe(() => {
      this.loading = false;
    }, error => {
      console.log(error);
      this.loading = false;
    });
  }

  viewDetails(id: number) {
    this.artService.setActiveEntity(id);
    this.router.navigateByUrl('/art/details/' + id);
  }
}
