import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SessionService} from '../../../../shared/stores/session/session.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isLoading: boolean;

  constructor(private formBuilder: FormBuilder,
              private sessionService: SessionService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    this.isLoading = true;
    this.sessionService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(() => {
      this.isLoading = false;
      this.router.navigateByUrl('/');
    }, error => {
      console.log(error);
      this.isLoading = false;
    });
  }

}
