import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { User } from '../model/user';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:8888/api'; // Default URL for API
  errorMessage! : string;

  constructor(private http : HttpClient) { }

  // Method to Get All Registered Users in DB
  public getAllUsers(){
    return this.http.get<User[]>(this.url + '/' + 'getAllUsers').pipe(catchError(this.handleError));
  }

  // Method to Save data in Database for User Object while registering
  public registerUser(user : User){
      return this.http.post<User>(this.url + '/' + 'save', user).pipe(catchError(this.handleError));
  }

  // Method for Fetching User Object from email id, for retreving password for Login Purpose
  public getUserDetails(email : string){
    return this.http.get<User>(this.url + '/' + 'getUser' + '/' +email).pipe(catchError(this.handleError));
  }

   // Method for getting Duplicate email from DB if it returned true means email is existed in DB
   public checkForDuplicateEmail(email : string){
    return this.http.get<boolean>(this.url + '/' + 'getEmail' + '/' +email).pipe(catchError(this.handleError));
  }

  // Method for Throwing error to handler
  handleError(error : HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      this.errorMessage = `Error: ${error.error.message}`;
      console.log('Client side error' + this.errorMessage);
      // client-side error
    }
    else {
      this.errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      console.log('server side error' + this.errorMessage);
      // server-side error
    }
    return throwError(this.errorMessage);
  }
}
