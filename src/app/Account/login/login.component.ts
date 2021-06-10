import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { AuthenticateService } from 'src/app/service/authenticate.service';
import { ExchangeDataBetweenComponentsService } from 'src/app/service/exchange-data-between-components.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();
  invalidLogin : boolean = false;

  constructor(private userService: UserService, private authenticateService : AuthenticateService,
    private route : Router, 
    private exchangeDataBetweenComponentsService : ExchangeDataBetweenComponentsService) { }
      
  ngOnInit(): void {
  }

  getUserData(email: { value: string; }, pwd: { value: string; }){
      this.userService.getUserDetails(this.user.user_email)
      .subscribe( data => {
        this.user = data;
        if (this.authenticateService.authenticate(this.user, email.value, pwd.value)){
          this.route.navigate(['/welcome'])
          this.invalidLogin = false;
          this.exchangeDataBetweenComponentsService.setMessage(this.user.user_name);
        }
        else{
              this.invalidLogin = true;
               this.route.navigate(['/login'])
              }
      });
  }
}
