import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/service/authenticate.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  constructor(public  authenticateService : AuthenticateService) { }

  ngOnInit(): void {
  }

}
