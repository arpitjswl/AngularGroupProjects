import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:8888/api/save'; // Saving User Data

  constructor(private http : HttpClient) { }

  // GET, POST, PUT, DELETE

  public registerUser(user : User){
      return this.http.post<User>(this.url, user);
  }

}
