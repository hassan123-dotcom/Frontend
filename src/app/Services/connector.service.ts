import { User } from './../user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnectorService {

constructor(private http:HttpClient) { }

storeData(userData,url:string){
  return this.http.post(url,userData);
}

updateData(userData,url:string){
  return this.http.put(url,userData);
}

getData(url:string){
  return this.http.get<User[]>(url);
}

getDataAuthent(userData,url:string){
  return this.http.get(url,userData);
}
}
