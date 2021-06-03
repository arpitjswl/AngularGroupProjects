import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild('f') formObject! : NgForm;
  user: User = new User();

  constructor(private userService : UserService) { }

  ngOnInit(): void {
  }

  registerUser() : void{
    console.log(this.formObject);
    this.userService.registerUser(this.user).subscribe(
      data => {
        alert('User Registered Successfully');
      }
    );

  }

}
