import {Injectable} from '@angular/core';
import {ArtStore, ArtState} from './art.store';
import {NgEntityService} from '@datorama/akita-ng-entity-service';

@Injectable({providedIn: 'root'})
export class ArtService extends NgEntityService<ArtState> {

  constructor(protected store: ArtStore) {
    super(store);
  }

  setActiveEntity(id: number) {
    this.store.setActive(id);
  }
}
