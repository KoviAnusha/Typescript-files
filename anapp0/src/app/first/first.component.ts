import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
    Name:String;
    State:String;
    Country:String;
    PlacesToVisit:String;
    constructor() { 
      
  }
getLocationDetails():any
{
  this.Name="Hyderabad";
  this.State="Telangana";
  this.Country="India";
  this.PlacesToVisit="Charminar, Wonderla";
  /*var obj={name:this.Name, state: this.State,
    country:this.Country,
    placesToVisit:this.PlacesToVisit};*/
    return this;
}

}
