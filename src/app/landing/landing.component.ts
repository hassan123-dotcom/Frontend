import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  logedInUser: string;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  gotoLogin()
  {

    this.router.navigate(['/Login']);

  }
  gotoSignup()
  {
    this.router.navigate(['/Signup']);
  }
  gotoRegister()
  {
    this.router.navigate(['/register']);
  }

// if loged IN
    logedIn(){

      //     return localStorage.getItem('token');
    this.logedInUser = localStorage.getItem('token');
    return this.logedInUser;

    }

    onLogout(){
      localStorage.removeItem('token');
      this.router.navigate(['/']);
    }
}





