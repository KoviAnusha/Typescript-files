import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forcomp',
  templateUrl: './forcomp.component.html',
  styleUrls: ['./forcomp.component.css']
})
export class ForcompComponent  {

  constructor() { }
  place:string="";
  places:string[]=["Golconda","Hyderabad","Charminar"];
 
  addperson(pPlace:string)
  {
  this.places.push(pPlace);
  }
}
