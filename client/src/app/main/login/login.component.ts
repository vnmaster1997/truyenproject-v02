/*import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import { UserService } from '../../../shared/user.service';
import { UserfbService } from '../../../shared/userfb.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private userService: UserService,private userfbService: UserfbService,private router : Router) { }

  model ={
    email :'',
    password:''
  };
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessages: string;
  ngOnInit() {
    if(this.userService.isLoggedIn() || this.userfbService.isLoggedIn())
    this.router.navigateByUrl('/userprofile');
  }

  onSubmit(form : NgForm){
    this.userService.login(form.value).subscribe(
      res => {
        this.userService.setToken(res['token']);
        this.router.navigateByUrl('/userprofile');
      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    );
  }

  fbLogin() {
    this.userfbService.fbLogin().then(() => {
      console.log('User has been logged in');
      this.router.navigate(['']);
    });  }

}*/
import { Component } from '@angular/core';
import { AuthService } from '../../shared/auth.service'
import { Router, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'page-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LogInComponent {

  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    public authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required ],
      password: ['',Validators.required]
    });
  }

  tryFacebookLogin(){
    this.authService.doFacebookLogin()
    .then(res => {
      this.router.navigate(['/userprofile']);
    })
  }


  tryGoogleLogin(){
    this.authService.doGoogleLogin()
    .then(res => {
      this.router.navigate(['/userprofile']);
    })
  }

  tryLogin(value){
    this.authService.doLogin(value)
    .then(res => {
      this.router.navigate(['/userprofile']);
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
    })
  }
}
