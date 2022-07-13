import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {
  employees:any = [];
  errorMsg:string = '';
  filtby:string = "sortbyid";
  byID:boolean = true;
  byNA:boolean = false;
  byNZ:boolean = false;
  showb:number = 0;
  showBut:boolean = false;
  constructor(empService:EmployeeService){
    // this.employees = empService.getEmployeesInfo();
    //console.log(this.employees);
    empService.getEmployeesInfo().subscribe(res => this.employees=res,
      error => this.errorMsg=error)
  }

  sortID()
  {
    // let newemps = this.employees.sort((a, b) => a.empID - b.empID);
    // this.employees = newemps;
    this.filtby = "sortbyid";
    this.byID = true;
    this.byNA = false;
    this.byNZ = false;
    console.log(this.filtby);
    this.showb = 0;
    this.showBut = false;
  }

  sortNameA()
  {
    // let newemps = this.employees.sort((a, b) => (a.empName < b.empName ? -1 : 1));
    // this.employees = newemps;
    this.filtby = "sortbynamea";
    this.byID = false;
    this.byNA = true;
    this.byNZ = false;
    console.log(this.filtby);
    this.showb = 0;
    this.showBut = false;
  }

  sortNameZ()
  {
    // let newemps = this.employees.sort((a, b) => (a.empName > b.empName ? -1 : 1));
    // this.employees = newemps;
    this.filtby = "sortbynamez";
    this.byID = false;
    this.byNA = false;
    this.byNZ = true;
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
