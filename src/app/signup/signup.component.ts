import { ConnectorService } from './../Services/connector.service';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpClient  } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from '../Services/alertify.service';
import { UserServiceService } from '../Services/user-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  user:any = {};
  userSignup:boolean;
  url:string = "https://localhost:44372/user";
  constructor(private router:Router,
              private alert:AlertifyService,
              private UsersService:UserServiceService,
              private httpClient:HttpClient,
              private Connection:ConnectorService) { }

  ngOnInit(): void {

    this.signUpForm = new FormGroup({
      fullName: new FormControl(null, Validators.required),
      userEmail: new FormControl(null, [Validators.required, Validators.email]),
      userName: new FormControl(null, Validators.required),
      userPassword: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl(null, [Validators.required]),
    }, this.passwordMatchingValidatior);
  }

  passwordMatchingValidatior(fg: FormGroup): Validators {
    return fg.get('userPassword').value === fg.get('confirmPassword').value ? null :
    {notmatched: true};
  }


//--------------get--------

get fullName() {
  return this.signUpForm.get('fullName') as FormControl;
}

get userEmail() {
  return this.signUpForm.get('userEmail') as FormControl;
}
get userName() {
  return this.signUpForm.get('userName') as FormControl;
}
get userPassword() {
  return this.signUpForm.get('userPassword') as FormControl;
}
get confirmPassword() {
  return this.signUpForm.get('confirmPassword') as FormControl;
}


  //=============
  onLogin()
  {
    this.router.navigate(['/login']);
  }

  onSignup(){
    console.log(this.signUpForm);
     this.userSignup = true;



     if(this.signUpForm.valid){
     this.user = Object.assign(this.user,this.signUpForm.value);
     this.Connection.storeData(this.user,this.url).subscribe(data =>{
       console.log(data);
     })
    // this.signUpForm.reset();
    localStorage.setItem('token', this.user.userName);
    localStorage.setItem('User',this.user.userName);
     this.userSignup = false;
     this.alert.success('Successfully Registered');
     this.router.navigate(['/']);

     }else{
       this.alert.error('Error');
     }


  }
}
