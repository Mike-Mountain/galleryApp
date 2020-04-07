import {Component, OnInit} from '@angular/core';
import {SessionService} from '../../../../shared/stores/session/session.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(private sessionService: SessionService) {
  }

  ngOnInit(): void {
  }

  logout() {
    this.sessionService.logout();
  }
}
