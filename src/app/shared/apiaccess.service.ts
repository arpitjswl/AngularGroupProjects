import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIaccessService {

  url = '';

  constructor(private http : HttpClient) { }

  // GET, POST, PUT, DELETE

  public registerUser(user : User){
      return this.http.post<User>( this.url, user );
  }

}
