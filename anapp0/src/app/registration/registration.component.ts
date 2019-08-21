import { Component, OnInit, OnDestroy, OnChanges, DoCheck } from '@angular/core';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit, OnChanges, OnDestroy, DoCheck {
  constructor() {
    this.Propstyle="yellow";
   }
  Username:string;
    Email:string;
    Password:string;
    Rpassword:string;
    Phone:number=9963814867;
    Registerstatus:string;
    Fa:boolean;
    Style1={color:"blue"};
    Propstyle="red";
  Login(pUsername:string,pEmail:string,pPassword:string,pRpassword:string)
  {
    let regex = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$');
    
    if((pUsername.length)>=6 && regex.test(pEmail) && pPassword==pRpassword)
    {
  this.Registerstatus="Registration Successful";
this.Fa=true;
    }  
    else    {
      this.Fa=false;
      if((pUsername.length)<6)
      {
        this.Registerstatus="Registration Unsuccessful due to length of user name. Please enter more than 5 characters ";
      }
      if(regex.test(pEmail))
      {
        this.Registerstatus="Registration Unsuccessful due to invalid email. Please enter a valid mail ";
      }
      if(pPassword==pRpassword)
      {
        this.Registerstatus="Registration Unsuccessful due to incorrect password entries. Password and Repeat passwords should be equal ";
      }  
    }
  }
  ngOnChanges()
  {
console.log("on changes");
  }
  ngOnInit(){
    console.log("in initt");
  }
  ngDoCheck()
  {
console.log("Do check");
  }
  ngOnDestroy()
  {
console.log("on Destroyy");
  }
}

