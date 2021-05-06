import { DashboardNavComponent } from './Header/dashboard-nav/dashboard-nav.component';
import { RegisterComponent } from './Account/register/register.component';
import { HomeComponent } from './Dashboard/home/home.component';
import { LoginComponent } from './Account/login/login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
{  path: 'Login', component: LoginComponent },
{path:'Dashboard',component:DashboardNavComponent,children:[
  {  path: 'Home', component: HomeComponent },
]},
{  path:'Register' ,component:RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
