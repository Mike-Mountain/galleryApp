import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UsersService} from '../../../users/store/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  isLoading: boolean;

  constructor(private formBuilder: FormBuilder,
              private userService: UsersService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  register() {
    this.isLoading = true;
    if (this.registerForm.value.password === this.registerForm.value.confirmPassword) {
      const credentials: { email, username, password } = this.registerForm.value;
      this.userService.register(credentials).subscribe(() => {
        this.isLoading = false;
        this.router.navigateByUrl('/');
      }, error => {
        console.log(error);
        this.isLoading = false;
      });
    } else {
      alert('Passwords do not match!');
    }
  }

}
