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
  isEmailExists! : boolean;
  errorMsg!: string;
  isSuccessfullyRegsitered! : boolean;
  isFormValid! : boolean;
  isButtonClicked! : boolean;

  constructor(private userService : UserService, private route : Router) { }

  ngOnInit(): void {
  }

 registerUser() : void{
   if (!this.formObject.valid)
      this.isButtonClicked = true;
      
    if (this.formObject.valid){
      this.userService.registerUser(this.user).subscribe(     
        data => {
          if (this.formObject.valid){
            //this.route.navigate(['/login']);
            this.isSuccessfullyRegsitered = true;
            this.isFormValid = true;
          }
            
        },
        error => this.errorMsg = error      
      );
    }
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