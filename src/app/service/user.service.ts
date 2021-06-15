import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:8888/api'; // Default URL for API

  constructor(private http : HttpClient) { }

  // Method to Get All Registered Users in DB
  public getAllUsers(){
    return this.http.get<User[]>(this.url + '/' + 'getAllUsers');
  }

  // Method to Save data in Database for User Object while registering
  public registerUser(user : User){
      return this.http.post<User>(this.url + '/' + 'save', user);
  }

  // Method for Fetching User Object from email id, for retreving password for Login Purpose
  public getUserDetails(email : string){
    return this.http.get<User>(this.url + '/' + 'getUser' + '/' +email);
  }

   // Method for getting Duplicate email from DB if it returned true means email is existed in DB
   public checkForDuplicateEmail(email : string){
    return this.http.get<boolean>(this.url + '/' + 'getEmail' + '/' +email);
  }
}
