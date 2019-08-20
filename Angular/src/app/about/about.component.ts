import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router' //service is a special class 
// which acts like a pluggin
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
sub:any;
routeParam;routeparam2;allparams;
  constructor(private pObjRoute:ActivatedRoute) { 
    this.sub=pObjRoute.params.subscribe(params=>{this.routeParam=params['id']
  this.allparams=params});
  //this.routeparam2=params['name']});
    //params give a list of parameters in an array.
  }
}
