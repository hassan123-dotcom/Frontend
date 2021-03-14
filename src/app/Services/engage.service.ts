import { Injectable } from '@angular/core';
import { Users } from '../Users';

@Injectable({
  providedIn: 'root'
})
export class EngageService {

constructor() { }
addUser(user: Users)
  {
    let users = [];
    if(localStorage.getItem('Users'))
    {
       users = JSON.parse(localStorage.getItem('Users'));
       users = [user, ...users];
    }
      else{
        users=[user];
      }

    localStorage.setItem('Users', JSON.stringify(users));

  }


}
