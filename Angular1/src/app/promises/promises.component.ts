import { Component, OnInit} from '@angular/core';
import {HttpClient,HttpParams, HttpHeaders} from '@angular/common/http';
import { Subscription } from 'rxjs';
export const headers=new HttpHeaders().set("Access-Control-Allow-Origin","*");
@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.css']
})
export class PromisesComponent implements OnInit {
  obsObj:Subscription;
  response:any;
  status:string;
  customers:Customer[];
  constructor(public http:HttpClient) { }
//promise always have success and failure
//success case: .then((data)=>{}), else case comes after comma ((arr)=>{})
  ngOnInit() { 
    this.getCustomers();
    this.getPut();
    this.DeleteCall();
    this.getCustomers();
  }
  getThroughTypicode()
  {
    this.http.get("http://jsonplaceholder.typicode.com/posts").toPromise()
    .then((data)=>{console.log(data);})
    .catch((error)=>{console.error("404:",error)}),
    ((error)=>{console.log(error);});
  }
  getCustomers()
  {
    this.http.get("http://localhost:3000/customers").toPromise()
    .then((data)=>{this.response=data})
    .catch((error)=>{console.error("404:",error)}),
    ((error)=>{console.log(error);});
  }
  getPut()
  {
    this.http.put("http://localhost:3000/customers/1",
    {
        "name":"Anusha Kovi"
    })
    .toPromise()
    .then((data)=>{this.response="Record Update Successful"});
  }
  postCustomers()
  {
    this.http.post("http://localhost:3000/customers",{
      "name":"Customer004"    
    })
    .toPromise()
    .then(()=>{});
  }
  DeleteCall()
  {
    this.http.delete("http://localhost:3000/customers/1")
    .subscribe(
      data=>{
        console.log("Delete Request is successful",data);
        this.status="Delete Request is successful";
      },
      error=>{
        console.log("Error",error);
        this.status="Error";
      }
    );
  }
  //json to object - deserialization in java
  //object to json - serialization in java
  getwithparams()
  {
    const params = new HttpParams().set('_page',"1").set('_limit',"1");
    this.http.get<Customer[]>("localhost:3000/customers",{headers,params})
    .subscribe(
                            data => {console.log("Get Request successful", data);
                                      this.customers = data;
                                      this.status = "Get Request successful";
                                     },
                            error => {
                                      console.log("Error in http get"); 
                                      this.status = "Error";
                                  }
                            
                          );
  }
}
class Customer
{
  id:number;
  name: string;
  email: string;
  tel: string;
}
class posts{
  userId;
  title;
  body;
}
