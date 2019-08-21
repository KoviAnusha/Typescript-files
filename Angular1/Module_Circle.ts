//require("amd-loader");

//import shape = require("./Module_IShape"); 
import {IShape} from './Module_IShape';
export class Circle implements IShape { 
   public draw() { 
       var objCircle = new Circle();
       //For typecasting, there has to be something common between the 2 types
       var typecasted = <IShape>objCircle;
       console.log("Typecasted Circle to Ishape");
       console.log(typecasted);

       //For type assertion, we are informing the compiler that we know about the how type conversion
       //takes place than the compiler.
       //The algorithm for conversion must be implemented by 
       //the user
       var typeasserted = {} as Circle;
       typeasserted.draw = function(){
           console.log("Implemented draw for typeasserted object");
       }
       console.log("Asserted Empty object to be a Circle object");       
       typeasserted.draw();
      console.log("Circle is drawn (external module)"); 
   } 
} 