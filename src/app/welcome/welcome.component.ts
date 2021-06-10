import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { AuthenticateService } from '../service/authenticate.service';
import { ExchangeDataBetweenComponentsService } from '../service/exchange-data-between-components.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  userName! : string;
  
  constructor(private authenticateService : AuthenticateService,
    private exchangeDataBetweenComponentsService : ExchangeDataBetweenComponentsService) { }

  ngOnInit() : void{
    this.userName = this.exchangeDataBetweenComponentsService.getMessage();
  }

}
