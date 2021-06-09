import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from '../service/authenticate.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  ngOnInit(): void {
    this.authenticateService.logOut();
    this.router.navigate(['/login']);
  }
    
  constructor(
    private authenticateService: AuthenticateService,
    private router: Router) {
  }
}
