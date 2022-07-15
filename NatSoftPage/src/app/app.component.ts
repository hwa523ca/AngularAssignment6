import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { ProductsService } from './services/products.service';

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
  onHomePage:boolean = true;
  aserves:any;
  products:any = [];
  products1:any = [];
  products2:any = [];
  errorMsg:string = '';

  constructor(aServ:AuthService,prodService:ProductsService){
    this.loggedIn2 = aServ.isLoggedIn;
    this.loggedOut2 = aServ.isLoggedOut;
    this.aserves = aServ;
    prodService.getProductsInfo().subscribe(res => this.products=res,
      error => this.errorMsg=error)
    prodService.getFeaturedProducts1().subscribe(res => this.products1=res,
      error => this.errorMsg=error)
    prodService.getFeaturedProducts2().subscribe(res => this.products2=res,
      error => this.errorMsg=error)
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

  yesHome(){
    this.onHomePage = true;
  }

  noHome(){
    this.onHomePage = false;
  }
}
