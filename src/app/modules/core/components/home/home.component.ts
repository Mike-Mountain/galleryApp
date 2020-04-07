import { Component, OnInit } from '@angular/core';
import {SessionQuery} from '../../../../shared/stores/session/session.query';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private loading: boolean;

  constructor(public sessionQuery: SessionQuery) { }

  ngOnInit(): void {
  }

  setLoading(loading) {
    this.loading = loading;
  }

}
