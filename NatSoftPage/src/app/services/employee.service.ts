import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url:string = "assets/employees.json"
  constructor(private _httpClient:HttpClient) {}
  getEmployeesInfo(){
    return this._httpClient.get(this.url)
  }
}
