import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  isFormValid : boolean = false;
  isEmailExists! : boolean;
  errorMsg!: string;

  constructor(private userService : UserService, private route : Router) { }

  ngOnInit(): void {
    this.isFormValid = true;
  }

  registerUser(email: { value: string; }) : void{
    this.isEmailExists  = this.checkIfEmailExistsInDB(email.value);
      if (this.isEmailExists === false){
          if (this.formObject.valid){
          this.isFormValid = true;
          this.userService.registerUser(this.user).subscribe(
            data => {
              alert('User Registered Successfully');
              if (this.formObject.valid)
                this.route.navigate(['/login']);
            },
            error => this.errorMsg = error
          );
      }
    }
    else
      this.isFormValid = false;
  }

checkIfEmailExistsInDB(inputEmail : string) : boolean{
    this.userService.checkForDuplicateEmail(inputEmail).subscribe(
      response => {
        this.isEmailExists = response;
        if (this.isEmailExists){
          this.isEmailExists = true;
        }
         else{
          this.isEmailExists = false; 
         }
      }
    );
    return this.isEmailExists    
    }
}
