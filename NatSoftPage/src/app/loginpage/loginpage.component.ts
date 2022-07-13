import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {
    aserves:any;
    nowlogged:boolean = false;
    notlogged:boolean = true;
    constructor(aser:AuthService){
      this.aserves = aser;
    }

    clicktologin(use:string,pas:string)
    {
      this.aserves.logUserIn(use,pas);
      this.nowlogged = this.aserves.isLoggedIn;
      this.notlogged = this.aserves.isLoggedOut;
    }
}
