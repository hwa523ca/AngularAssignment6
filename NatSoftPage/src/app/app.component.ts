import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NatSoftPage';
  loggedIn:boolean = false;
  loggedOut:boolean = true;
  loggedIn2:boolean = false;
  loggedOut2:boolean = true;
  aserves:any;

  constructor(aServ:AuthService){
    this.loggedIn2 = aServ.isLoggedIn;
    this.loggedOut2 = aServ.isLoggedOut;
    this.aserves = aServ;
  }

  getStatuses()
  {
    this.loggedIn2 = this.aserves.isLoggedIn;
    this.loggedOut2 = this.aserves.isLoggedOut;
  }

  logINF(){
    this.loggedIn = true;
    this.loggedOut = false;
    this.aserves.logUserIn();
    this.loggedIn2 = this.aserves.isLoggedIn;
    this.loggedOut2 = this.aserves.isLoggedOut;
  }

  logOUTF(){
    this.loggedIn = false;
    this.loggedOut = true;
    this.aserves.logUserOut();
    this.loggedIn2 = this.aserves.isLoggedIn;
    this.loggedOut2 = this.aserves.isLoggedOut;
  }
}
