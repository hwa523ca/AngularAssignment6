import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  inputUserName:string = "admin"; dbUserName:string = "admin";
  inputPassword:string = "admin123"; dbPassword:string = "admin123";
  isLoggedIn:boolean = false;
  isLoggedOut:boolean = true;

  isUserLoggedIn(){
    if (this.inputUserName === this.dbUserName && this.inputPassword === this.dbPassword){
      return true;
    }
    else{
      //alert("Boss! You are not eligible to access this page.");
      alert("Sorry! You do not have permission to access this page!");
      return false;
    }
  }

  logUserIn(usn:string,pwd:string)
  {
    if (usn === this.dbUserName && pwd === this.dbPassword) {
      this.inputUserName = usn;
      this.inputPassword = pwd;
      this.isLoggedIn = true;
      this.isLoggedOut = false;
    }
    else if (usn === "employee1" && pwd === "p@ssw;Rd1234")
    {
      this.inputUserName = usn;
      this.inputPassword = pwd;
      this.isLoggedIn = true;
      this.isLoggedOut = false;
    }
    else
    {
      alert("Incorrect password! Try again!");
    }
  }

  logUserOut()
  {
    this.isLoggedIn = false;
    this.isLoggedOut = true;
  }
}
