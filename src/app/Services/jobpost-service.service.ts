import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobpostServiceService {

  constructor() { }
  addUserpost(usercreate)
    {
      let userd = [];
      if(localStorage.getItem('UsersCreate'))
      {
        userd = JSON.parse(localStorage.getItem('UsersCreate')); //ab user is empty and ready to accept new data
        userd = [usercreate, ...userd];  //using this we just putting user data (which we get
        //by clicking on submit button) in users array
      }
      else{
        userd = [usercreate];

      }
    }

  }
