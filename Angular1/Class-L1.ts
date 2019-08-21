class Greeter {
    public greeting: string;   //class field
    constructor(message: string) {  //constructor
        this.greeting = message;
    }
    
    //Function that returns a string as return type
    greet():string {
        return "Hello, " + this.greeting;
    }
    
    //Parameterized function
    myAgeOnMars(age:number){
    var mars_multiplier:number = 1.882; //static scope variable (local scope)
    return age / mars_multiplier;
}
}

//Instantiating the class
let greeter = new Greeter();
    console.log(greeter.greeting);
console.log(greeter.greet());
console.log(greeter.myAgeOnMars(32));