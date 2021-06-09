import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor() { }

  authenticate(user : User, username : string, password : string) {
    if (user.user_email === username && user.user_password === password) {
      sessionStorage.setItem('username', username)
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    if (user === null)  
      return false;
     return true;
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}
