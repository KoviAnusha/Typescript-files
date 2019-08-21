import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {

valueForProp:string;
resultOfEvent:string;

customEventHandler()
{
  this.resultOfEvent="Event Triggered: Custom Event of Component A";
}

  constructor() { 
    this.valueForProp="Initial Value...........";
  }

  ngOnInit() {
  }

}
