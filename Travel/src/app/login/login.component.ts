import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  constructor() { }
  Username:string;
    Password:string;
    Loginstatus:string;
    Fa:boolean;
  Login(pUsername:string,pPassword:string)
  {
    if(pUsername=="Anusha" && pPassword=="mnbvcxz")
    {
  this.Loginstatus="Login Successful";
this.Fa=true;
    }  
    else    {
      this.Fa=false;
      if(pUsername!="Anusha")
      {
        this.Loginstatus="Login Unsuccessful due to incorrect user name. Please enter correct username. ";
      }
      if(pPassword!="mnbvcxz")
      {
        this.Loginstatus="Login Unsuccessful due to incorrect password entry. Please enter correct password. ";
      }  
    }
  } 
}
