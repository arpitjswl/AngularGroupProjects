import { RegisterComponent } from './Account/register/register.component';
import { HomeComponent } from './Dashboard/home/home.component';
import { LoginComponent } from './Account/login/login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';

  const routes: Routes = [
    {  path: '', component: LoginComponent },
    {  path: 'Home', component: HomeComponent },
    {  path:'Register' ,component:RegisterComponent },
    {  path:'**' ,component:ErrorComponent }
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

