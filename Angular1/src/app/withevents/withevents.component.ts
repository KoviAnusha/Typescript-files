import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-withevents',
  templateUrl: './withevents.component.html',
  styleUrls: ['./withevents.component.css']
})
export class WitheventsComponent  {
  Username:string;
  Password:string;
  Loginstatus:string;
  constructor() { }

Login(pUsername:string,pPassword:string)
{
  if(pUsername=="admin" && pPassword=="mnbvc")
  {
this.Loginstatus="Login Successful";
  }
}
}
