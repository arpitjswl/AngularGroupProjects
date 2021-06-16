import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticateService } from './authenticate.service';

@Injectable({
  providedIn: 'root'
})

// The purpose of this Service is to check whether user is Logged in or NOT if user user is 
//  not logged in, redirect user to Login Page
export class AuthGuardService implements CanActivate{

  constructor(private authenticateServie : AuthenticateService, private router : Router) { }

  canActivate() : boolean{
    if (!this.authenticateServie.isUserLoggedIn()){
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
