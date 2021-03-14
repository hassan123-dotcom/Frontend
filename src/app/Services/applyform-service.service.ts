import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ApplyformServiceService {

constructor() { }
addUsers(usert)
  {
    let usern = [];
    if(localStorage.getItem('Users1'))
    {
      usern = JSON.parse(localStorage.getItem('Users1')); //ab user is empty and ready to accept new data
      usern = [usert, ...usern];  //using this we just putting user data (which we get
      //by clicking on submit button) in users array
    }
    else{
      usern = [usert];

    }
    localStorage.setItem('Users1',JSON.stringify(usern));
  }

}
