import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService) { }
  user = new User();

  ngOnInit(): void {
  }

  getUserData(){
      this.userService.getUserDetails(this.user.user_email)
      .subscribe( data => {
        this.user = data;
      });
  }

}
