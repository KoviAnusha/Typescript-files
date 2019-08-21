import { Component, OnInit, OnDestroy } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-workwithhttp',
  templateUrl: './workwithhttp.component.html',
  styleUrls: ['./workwithhttp.component.css']
})
export class WorkwithhttpComponent implements OnInit,OnDestroy {
  obsObj:Subscription;
  constructor(public http:HttpClient) { }
  ngOnInit() {
    this.obsObj=this.http.get("http://jsonplaceholder.typicode.com/posts").subscribe
    (
      (data)=>{console.log(data);},
      (error)=>{console.log(error);}
    ); //subscribe is observable (bit by bit loading the page)
    // 3 parameters for subscribe: data,error,success
  }
  ngOnDestroy()
  {
    this.obsObj.unsubscribe();
  }


  //observables and promises do asynchronous programming.
}
