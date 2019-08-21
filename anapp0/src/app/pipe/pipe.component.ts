import { Component, OnInit } from '@angular/core';
import {Greeting} from '../greeting';

 @Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
Greetingobj:Greeting=new Greeting;
  constructor() {
    this.Greetingobj.Name="Anusha";
   }
Title:string="Hello pipes";
  ngOnInit() {
  }

}
