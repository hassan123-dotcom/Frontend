import { User } from './../user';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ConnectorService } from './connector.service';
import { Injectable } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthentService {

  
constructor(private connect:ConnectorService) {
  
 }
 


 getUser(url:string):Observable<User[]>{
   
    return this.connect.getData(url);

}
}
