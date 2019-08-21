
// import shape = require("./Module_IShape"); 
// import circle = require("./Module_Circle"); 
// import triangle = require("./Module_Triangle");  

import {IShape} from "./Module_IShape";
import {Triangle} from "./Module_Triangle";
import {Circle} from "./Module_Circle";


function drawAllShapes(shapeToDraw: IShape) {
   shapeToDraw.draw(); 
} 

drawAllShapes(new Circle()); 
drawAllShapes(new Triangle()); 


