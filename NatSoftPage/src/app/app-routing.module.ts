import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { AuthGuard } from './guards/auth.guard';
import { HomepageComponent } from './homepage/homepage.component';
import { Homepage2Component } from './homepage2/homepage2.component';
import { ProductsComponent } from './products/products.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { LoggedoutpageComponent } from './loggedoutpage/loggedoutpage.component';

const routes: Routes = [
  {path: 'Employees', component: EmployeesComponent, canActivate:[AuthGuard]},
  {path: 'Products', component: ProductsComponent},
  {path: 'Homepage', component: HomepageComponent},
  {path: 'Homepage2', component: Homepage2Component},
  {path: 'Loginpage', component: LoginpageComponent},
  {path: 'Loggedoutpage', component: LoggedoutpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [EmployeesComponent, ProductsComponent]
