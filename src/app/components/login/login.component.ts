import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errorMsg : string = "";

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      pwd: ['', [Validators.required]]
    });
  }
  login() {
    console.log("here is user", this.loginForm.value);
    this.userService.login(this.loginForm.value).subscribe(
      (response) => {
        console.log("Here response after login", response);
        if (response.role) {
          if (response.role === 'user') {
            this.router.navigate(['']);
          } else {
            this.router.navigate(['admin']);
          }
        } else {
          this.errorMsg = " Please Check Your Email/Pwd";
        }

      });
  }
}
