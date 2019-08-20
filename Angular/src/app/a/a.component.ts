import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {
//communication between component a and b;
@Input() propA:string;//[]
@Output() customEvent = new EventEmitter() ;//()

  constructor() { }

  ngOnInit() {
  }

}
