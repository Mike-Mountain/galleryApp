import {Injectable} from '@angular/core';
import {User} from './user.model';
import {EntityState, ActiveState, EntityStore, StoreConfig} from '@datorama/akita';

export interface UsersState extends EntityState<User, string>, ActiveState<string> {
}

@Injectable({providedIn: 'root'})
@StoreConfig({name: 'users'})
export class UsersStore extends EntityStore<UsersState> {

  constructor() {
    super();
  }

}

