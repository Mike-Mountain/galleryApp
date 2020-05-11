import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { ArtStore, ArtState } from './art.store';

@Injectable({ providedIn: 'root' })
export class ArtQuery extends QueryEntity<ArtState> {

  constructor(protected store: ArtStore) {
    super(store);
  }

}
