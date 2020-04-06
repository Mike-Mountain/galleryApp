import {Injectable} from '@angular/core';
import {Store, StoreConfig} from '@datorama/akita';

export interface SessionState {
  token: string;
  user: any;
}

export function createInitialState(): SessionState {
  return {
    token: '',
    user: {}
  };
}

@Injectable({providedIn: 'root'})
@StoreConfig({name: 'session'})
export class SessionStore extends Store<SessionState> {

  constructor() {
    super(createInitialState());
  }

  login(session: SessionState) {
    this.update(session);
  }

  logout() {
    this.update(createInitialState());
  }

}

