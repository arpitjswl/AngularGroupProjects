import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { AuthenticateService } from '../service/authenticate.service';
import { ExchangeDataBetweenComponentsService } from '../service/exchange-data-between-components.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  userName! : string;
  user! : User[];
  errorData! : string;
  

  constructor(private authenticateService : AuthenticateService,
    private exchangeDataBetweenComponentsService : ExchangeDataBetweenComponentsService,
    private userService : UserService, private router : Router) { }

  ngOnInit() : void{
    this.userName = this.exchangeDataBetweenComponentsService.getMessage();
  }

  getAllRegsiteredUsers() : User[]{
    this.userService.getAllUsers().subscribe(
      res => {
        this.user = res;
        return this.user;
      },
      error => this.errorData = error
    );

    return this.user;
  }

  sort(){
    this.user.sort((a, b) => a.user_name.localeCompare(b.user_name));
  }

  imgCalled(){
    this.router.navigate(['/login'])
  }
}
