import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild('f') formObject! : NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmitForm(){
    console.log(this.formObject);
  }

}
