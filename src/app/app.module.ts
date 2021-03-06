import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Account/login/login.component';
import { NavMenuComponent } from './Header/nav-menu/nav-menu.component';
import { HomeComponent } from './Dashboard/home/home.component';
import { RegisterComponent } from './Account/register/register.component';
import { ErrorComponent } from './error/error.component';
import { FormsModule } from '@angular/forms';
import { DashboardNavComponent } from './Header/dashboard-nav/dashboard-nav.component';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './welcome/welcome.component';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavMenuComponent,
    HomeComponent,
    RegisterComponent,
    ErrorComponent,
    DashboardNavComponent,
    WelcomeComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
