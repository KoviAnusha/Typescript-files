//Declaration
/*
var <variableName> : <datatype> =  <value>;
*/
//global scope variables
var aname:string = "Harshvardhan Velachery"; 
var score1:number = 60;
var score2:number = 85.50
var isCorrect:boolean = true;
var sum = score1 + score2;



function printDetails():number{
//local scope variables
console.log("name: "+aname);
console.log("first score: "+score1);
console.log("second score: "+score2);
console.log("sum of the scores: "+sum);

    return 100;
   
}

//call the function
console.log(printDetails());




