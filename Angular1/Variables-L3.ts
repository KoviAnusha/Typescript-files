function show(name:string|string[]) { 
   if(typeof name == "string") { 
      console.log(name) 
   } else { 
      var i; 
      
      for(i = 0;i<name.length;i++) { 
         console.log(name[i])
      } 
   } 
} 
show("Chris") 
console.log("Printing names array....") 
show(["Mark","Chris","Satish","Meera"])
