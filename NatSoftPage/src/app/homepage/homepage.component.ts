import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  products:any = [];
  products1:any = [];
  products2:any = [];
  errorMsg:string = '';

  constructor(prodService:ProductsService){
    prodService.getProductsInfo().subscribe(res => this.products=res,
      error => this.errorMsg=error)
    prodService.getFeaturedProducts1().subscribe(res => this.products1=res,
      error => this.errorMsg=error)
    prodService.getFeaturedProducts2().subscribe(res => this.products2=res,
      error => this.errorMsg=error)
  }
}
