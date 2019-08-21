class JustForFun{
    initial_val:number;    //field or class variable;
    static message = "Hello User!";   //static scope field
    //readonly a:string = "a readOnly value";
  
//constructor - multiple
//constructor();
constructor(_initialValue?:number){
if (_initialValue == undefined){    
    this.initial_val = 0;
    console.log("Default constructor invoked...");
    console.log("this.init_val = "+ this.initial_val);
}
else{
    this.initial_val = _initialValue;
    console.log("Parameterized constructor invoked...");
    console.log("this.init_val = "+ this.initial_val);
}
}

    //Function
myAgeOnMars(age:number){
var mars_multiplier:number = 1.882; //static scope variable (local scope)    
    return age / mars_multiplier;
}

    //Function
myBirthNumber(day:number, month:number, year:number=17){
if((day <= 31) && (month <=12) && (year <= new Date().getUTCFullYear())){
    var result:number = ((day + month + year)- this.initial_val)/100; //local scope variable
        return Math.round(result);
}
}
}
//Instantiate the above class

    console.log(JustForFun.message); //Printing static field

//Default Instance
    var instanceDefault = new JustForFun(); 
    console.log(instanceDefault.myAgeOnMars(32));
    console.log(instanceDefault.myBirthNumber(18,5));


var instanceParameterized = new JustForFun(17);
    console.log(instanceParameterized.myAgeOnMars(32));
    console.log(instanceParameterized.myBirthNumber(28,7,84));
