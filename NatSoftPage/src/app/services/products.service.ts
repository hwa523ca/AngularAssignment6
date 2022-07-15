import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url:string = "assets/products.json"
  url1:string = "assets/featuredproducts1.json"
  url2:string = "assets/featuredproducts2.json"
  constructor(private _httpClient:HttpClient) {}
  getProductsInfo(){
    return this._httpClient.get(this.url)
  }

  getFeaturedProducts1(){
    return this._httpClient.get(this.url1)
  }

  getFeaturedProducts2(){
    return this._httpClient.get(this.url2)
  }
}
