import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExchangeDataBetweenComponentsService {

  data! : any;
  
  constructor() { }

  setMessage(data : string){
    this.data = data;
  }

  getMessage(){
    return this.data;
  }

}
