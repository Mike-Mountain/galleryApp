import { Injectable } from '@angular/core';
import { Art } from './art.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface ArtState extends EntityState<Art> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'art' })
export class ArtStore extends EntityStore<ArtState> {

  constructor() {
    super();
  }

}

