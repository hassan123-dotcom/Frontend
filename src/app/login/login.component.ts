import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentService } from '../Services/Authent.service';
import { AlertifyService } from '../Services/alertify.service';

import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  user:any = {};
  userLogin:boolean;
  usersArray: User [];
  url:string = "https://localhost:44372/user"
 public yesLoggedIn:boolean = false;
  constructor(private router:Router,
              private Authent:AuthentService,
              private alert:AlertifyService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      userName: new FormControl(null, Validators.required),
      userPassword: new FormControl(null, [Validators.required]),


    })
    this.Authent.getUser(this.url).subscribe(data=> this.usersArray = data);
    }


  onCreate(){
    this.router.navigate(['/signup']);
  }

  onLogin() {
    this.userLogin = true;
    this.user = Object.assign(this.user,this.loginForm.value);
    var result = this.usersArray.find(obj => {
      this.yesLoggedIn =  (obj.userName === this.user.userName && obj.userPassword === this.user.userPassword);
   return (obj.userName === this.user.userName && obj.userPassword === this.user.userPassword);
    });

console.log(this.yesLoggedIn);
    //this.yesLoggedIn = (result.userName == this.user.userName && result.userPassword == this.user.userPassword);
    if(this.yesLoggedIn){
      localStorage.setItem('token', this.user.userName);
     localStorage.setItem('User',this.user.userName);
      this.alert.success('Login Successfull');
      this.router.navigate(['/']);

    }else{
      this.alert.error('Password or UserName Invalid!');
      //this.yesLoggedIn = false;
    }

  }
 //get Methods for form controls


  get userName() {
    return this.loginForm.get('userName') as FormControl;
  }
  get userPassword() {
    return this.loginForm.get('userPassword') as FormControl;
  }


}
