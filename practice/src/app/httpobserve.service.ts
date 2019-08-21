import { Injectable, OnDestroy } from '@angular/core';

import {HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';
import {Subscription} from 'rxjs';
export const headers = new HttpHeaders().set("Access-Control-Allow-Origin", "*");
@Injectable({
  providedIn: 'root'
})
export class HttpobserveService implements OnDestroy{
  status:string;
  response:any;
  obsObj:Subscription;
  customers:Customer[];
  constructor(public http: HttpClient) { }
  PostCall(pUsername,pEmail,pNum:number=9963814867){
    this.http.post("http://localhost:3000/customers",
        {
            "name": pUsername,
            "email": pEmail,
            "tel": pNum
        })
        .subscribe(
            data => {console.log("POST Request is successful ", data);this.status = "POST Request is successful";},
            error => {console.log("Error", error);this.status = "Error";});
  }  
  Getcustomer(){
    this.obsObj=this.http.get("http://localhost:3000/customers",{})
    .subscribe(
        data => { console.log("Get Request is successful ", data);this.response=data;this.status = "Get Request is successful";},
        error => {console.log("Error", error);this.status = "Error";});
  }
  Getcustomers(){
    const params = new HttpParams();
    this.obsObj=this.http.get<Customer[]>("http://localhost:3000/customers",{headers,params})
    .subscribe(
        data => { console.log("Get Request is successful by array ", data);this.customers=data;this.status = "Get Request is successful by array";},
        error => {console.log("Error", error);this.status = "Error";});
  }
  ngOnDestroy()
  {
    this.obsObj.unsubscribe();
  }
}
class Customer{
  id : number;
  name: string;
  email: string;
  tel: string;
}
