import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:8888/api'; // Saving User Data

  constructor(private http : HttpClient) { }

  // Method to Save data in Database for User Object while registering
  public registerUser(user : User){
      return this.http.post<User>(this.url + '/' + 'save', user);
  }

  // Method for Fetching User Object from email id, for retreving password for Login Purpose
  public getUserDetails(email : string){
    return this.http.get<User>(this.url + '/' + 'getUser' + '/' +email);
  }

}
