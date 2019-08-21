import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ifcomp',
  templateUrl: './ifcomp.component.html',
  styleUrls: ['./ifcomp.component.css']
})
export class IfcompComponent implements OnInit {

  constructor() { }
person:string="Vijay";
  show:boolean=false;
  
  ngOnInit() {
  }
Toggleshow()
{
  this.show=!(this.show);
}

}
