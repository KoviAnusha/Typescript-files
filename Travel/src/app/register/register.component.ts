import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';
export const headers=new HttpHeaders().set("Access-Control-Allow-Origin","*");
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  constructor(public http:HttpClient) { }
  ngOnInit() { 
    this.postCustomers();
this.getCustomers();
  }
  user:Userstable[];
  Username:string;
  Email:string;
  Password:string;
  Rpassword:string;
  Registerstatus:string;
  Fa:boolean;
  response:any;
  status:string;
Register(pUsername:string,pEmail:string,pPassword:string,pRpassword:string)
{
  let regex = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$');
  if((pUsername.length)>=6 && regex.test(pEmail) && pPassword==pRpassword)
  {
this.Registerstatus="Registration Successful";
// this.postCustomers(pUsername,pEmail,pPassword,pRpassword);
// this.getCustomers();
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
  getCustomers()
  {
    const params = new HttpParams().set('_page',"1")
                                   .set('_limit',"1");   
    this.http.get<Userstable[]>("http://localhost:3000/Users",{headers,params})
                .subscribe(
                            data => {console.log("Get Request successful", data);
                                      this.user = data;
                                      this.status = "Get Request successful";
                                     },
                            error => {
                                      console.log("Error in http get"); 
                                      this.status = "Error";
                                  }
                          );
  }
  postCustomers()
  {
    this.http.post("http://localhost:3000/Users",
        {
          "Username": "Anusha",
      "Email": 'Anusha@gmail.com',
	"Password":'mnbvca',
	"RepeatPassword":'mnbvca'
        })
        .subscribe(
            data => {
                console.log("POST Request is successful ", data);
                this.status = "POST Request is successful";
            },
            error => {
                console.log("Error", error);
                this.status = "Error";
            }
        );    
  }
}
class Userstable{
  Username: string;
  Email: string;
Password:string;
RepeatPassword:string
}

