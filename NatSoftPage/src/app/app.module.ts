import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { SortbyidPipe } from './pipes/sortbyid.pipe';
import { SortbynameaPipe } from './pipes/sortbynamea.pipe';
import { SortbynamezPipe } from './pipes/sortbynamez.pipe';
import { Sortbyid2Pipe } from './pipes/sortbyid2.pipe';
import { Sortbynamea2Pipe } from './pipes/sortbynamea2.pipe';
import { Sortbynamez2Pipe } from './pipes/sortbynamez2.pipe';
import { NgxPopper } from 'angular-popper';
import { HomepageComponent } from './homepage/homepage.component';
import { Homepage2Component } from './homepage2/homepage2.component';
import { SortbypricePipe } from './pipes/sortbyprice.pipe';
import { SortbypriceupPipe } from './pipes/sortbypriceup.pipe';
import { SortbypricedownPipe } from './pipes/sortbypricedown.pipe';
import { LoginpageComponent } from './loginpage/loginpage.component';

@NgModule({
  declarations: [AppComponent, EmployeesComponent, ProductsComponent, SortbyidPipe, SortbynameaPipe, SortbynamezPipe, Sortbyid2Pipe, Sortbynamea2Pipe, Sortbynamez2Pipe, HomepageComponent, Homepage2Component, SortbypricePipe, SortbypriceupPipe, SortbypricedownPipe, LoginpageComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule, NgxPopper],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
