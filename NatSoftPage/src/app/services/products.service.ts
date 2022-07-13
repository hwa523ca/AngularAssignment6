import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url:string = "assets/products.json"
  constructor(private _httpClient:HttpClient) {}
  getProductsInfo(){
    return this._httpClient.get(this.url)
  }
}
