import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products:any = [];
  errorMsg:string = '';
  filtby:string = "sortbyid";
  byID:boolean = true;
  byNA:boolean = false;
  byNZ:boolean = false;
  byPU:boolean = false;
  byPD:boolean = false;
  showb:number = 0;
  showBut:boolean = false;
  constructor(prodService:ProductsService){
    prodService.getProductsInfo().subscribe(res => this.products=res,
      error => this.errorMsg=error)
  }

  sortID()
  {
    this.filtby = "sortbyid";
    this.byID = true;
    this.byNA = false;
    this.byNZ = false;
    this.byPU = false;
    this.byPD = false;
    console.log(this.filtby);
    this.showb = 0;
    this.showBut = false;
  }

  sortNameA()
  {
    this.filtby = "sortbynamea";
    this.byID = false;
    this.byNA = true;
    this.byNZ = false;
    this.byPU = false;
    this.byPD = false;
    console.log(this.filtby);
    this.showb = 0;
    this.showBut = false;
  }

  sortNameZ()
  {
    this.filtby = "sortbynamez";
    this.byID = false;
    this.byNA = false;
    this.byNZ = true;
    this.byPU = false;
    this.byPD = false;
    console.log(this.filtby);
    this.showb = 0;
    this.showBut = false;
  }

  sortPriceUp()
  {
    this.filtby = "sortbypriceup";
    this.byID = false;
    this.byNA = false;
    this.byNZ = false;
    this.byPU = true;
    this.byPD = false;
    console.log(this.filtby);
    this.showb = 0;
    this.showBut = false;
  }

  sortPriceDown()
  {
    this.filtby = "sortbypricedown";
    this.byID = false;
    this.byNA = false;
    this.byNZ = false;
    this.byPU = false;
    this.byPD = true;
    console.log(this.filtby);
    this.showb = 0;
    this.showBut = false;
  }

  clickbut()
  {
    if (this.showb == 0)
    {
      this.showb = 1;
      this.showBut = true;
    }
    else
    {
      this.showb = 0;
      this.showBut = false;
    }
  }
}
