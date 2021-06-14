import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
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
  isFormValid : boolean = true;

  constructor(private userService : UserService, private route : Router) { }

  ngOnInit(): void {
  }

  registerUser() : void{
    if (this.formObject.valid){
      this.isFormValid = true;
      this.userService.registerUser(this.user).subscribe(
        data => {
          alert('User Registered Successfully');
          if (this.formObject.valid)
            this.route.navigate(['/login']);
        }
      );
      }
    else
     this.isFormValid = false;
    
  }


}
