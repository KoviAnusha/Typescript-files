//require("amd-loader");
//import shape = require("./Module_IShape"); 

import {IShape} from "./Module_IShape";
export class Triangle implements IShape { 
   public draw() { 
      console.log("Triangle is drawn (external module)"); 
   } 
}