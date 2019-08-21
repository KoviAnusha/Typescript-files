import { IShape } from "./Module_IShape";

//Single Inheritance
class Shape { 
   Area:number 
   
   constructor(a:number) { 
      this.Area = a 
   } 
} 

class Circle extends Shape { 
   show():void { 
      console.log("Area of the circle:  "+this.Area) 
   } 
}
  
var obj = new Circle(150); 
obj.show()
//Accessing the parent class property
console.log(obj.Area);

//Multi-level Inheritance
class Root { 
   str:string; 
} 

class Child extends Root {} 
class Leaf extends Child {} //indirectly inherits from Root by virtue of inheritance  

var objMultiple = new Leaf(); 
objMultiple.str ="hello" 
console.log(objMultiple.str)



//Inheritance with Method Overriding
class PrinterClass { 
   doPrint():void {
      console.log("doPrint() from Parent called…") 
   } 
} 

class StringPrinter extends PrinterClass { 
   doPrint():void { 
      super.doPrint() //access base class
      console.log("doPrint() is printing a string…")
   } 
} 

var objPrinter = new StringPrinter() 
objPrinter.doPrint()