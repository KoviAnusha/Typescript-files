//Optional Params
function printDetails(id:number,aname:string,mail_id?:string) { 
   console.log("EmpId:", id); 
   console.log("Name",aname); 
   
   if(mail_id != undefined)  
   console.log("Email Id",mail_id); 
}
printDetails(1120,"Saumya Krishnamoorthy");
printDetails(2190,"Hariprasad Chaurasia","hari.c@lnt.com");

//Default Params
function printDefault(id:number,aname:string,mail_id?:string, prefix:string="LNT-") { 
   console.log("EmpId:", prefix+id); 
   console.log("Name",aname); 
   
   if(mail_id != undefined)  
   console.log("Email Id",mail_id); 
}
printDefault(1120,"Saumya Krishnamoorthy");
printDefault(2190,"Hariprasad Chaurasia","hari.c@lnt.com");
printDefault(2190,"Hariprasad Chaurasia","hari.c@lnt.com", "IND-");

//Rest Params
function printTeam(teamName:string, defaultVal:string = '0', intruder ?:string, ...members:string[]){
console.log("***** TEAM: "+teamName+" *****");
for(var i=0; i<members.length; i++){    
    console.log((i+1)+". {0}",members[i]); 
}
}


printTeam("MIS", "Radha","Krishna","Mohana","Annapoorna","Sridhar");
printTeam("Microtec", "Govind","Murali","Heena","Sweta", "Damodar", "Harish", "Gayatri", "Sairam", "Sheetal");

//Anonymous Function
var mul = function(a:number,b:number) { 
   return a*b;  
}; 
console.log(mul(12,2));

var formulae:string[] = ["throw err","return a + b"]
var myFunction = new Function("a", "b", formulae[0]); 
var x = myFunction(4, 3);
console.log(typeof(myFunction)) ;
console.log(x);

//Self-executing Anonymous function
(function a() { 
   var x = "Hello Typescript User !";   
   console.log(x)     
})() 

//Using Lambda Expressions
function fooTraditional(x:number){
    x = 10 + x 
    console.log(x)
}
var foo = (x:number)=> {    
   x = 10 + x 
   console.log(x)  
} 

var doSomething=(y:number) => (x) => y*y*x;

console.log("***** Using Lambda Expressions *****");
foo(100);
var result1 = doSomething(5);
console.log(result1(10));
console.log(doSomething(5)(10));

doSomething(5);

var inferredType = (x)=> { 
   if(typeof x=="number") { 
      console.log(x+" is numeric") 
   } else if(typeof x=="string") { 
      console.log(x+" is a string") 
   }  
} 
inferredType(1002) 
inferredType("Snehalata")


//Function Overloading
function show(s1:string):void; 
function show(n1:number,s1:string):void; 

function show(x:any,y?:any):void { 
   console.log(x); 
   console.log(y); 
} 

console.log("***** Function Overloading *****");
show("Neha") 
show(1,"Deepak");