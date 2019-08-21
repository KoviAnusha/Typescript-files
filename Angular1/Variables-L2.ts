var str:string = "Natasha";
var num:number= 1000;

var items: number[] = [1,2,3,4,5];
var companies:string[]=["IBM","Google", "LNT Infotech", "Infy"];
var aTuple:any[] = [100,"Laundry","Grocery", [1,2,3]];


function printDetails(){
      //Printing array
var company : string;
for(company in companies){
    console.log(company);
    console.log(companies[company]);
}


    //Printing a tuple
  for(var item in aTuple){
    console.log(typeof aTuple[item]);
    if(typeof aTuple[item] == "object"){
    console.log("Printing array inside tuple");
    var cnt=0;
        //Using Type assertion and Generics
        while(cnt < (<Array<number>>aTuple[item]).length){
            console.log((<Array<number>>aTuple[item])[cnt]);
            cnt++;
            }
    }
  else{
    console.log(aTuple[item]);
  }
} 
    
}

printDetails(); 

var strArr:any = ['2','4','5',23];

console.log(<Array<number>>strArr);