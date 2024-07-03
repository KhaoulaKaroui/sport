import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
userURL: string = 'http://localhost:3000/api/users';
  constructor( private http: HttpClient) { }

  //user = {email:..., pwd:.....} -----post
login(user: any){
  return this.http.post<{ msg: string, role: string}>(this.userURL + '/login', user);
}


// user = {firstName:..., lastName:..., email:..., pwd:...}--post
signup(user: any){
  return this.http.post<{ isAdded: boolean}>(this.userURL + '/signup', user);
}

}
