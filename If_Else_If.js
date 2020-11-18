//read a single digit number and write in words

const process=require('process');
let number=process.argv[2];
if(number==1)
console.log("ONE");
else if(number==2)
console.log("TWO");
else if(number==3)
console.log("THREE");
else if(number==4)
console.log("FOUR");
else if(number==5)
console.log("FIVE");
else if(number==6)
console.log("SIX");
else if(number==7)
console.log("SEVEN");
else if(number==8)
console.log("EIGHT");
else if(number==9)
console.log("NINE");
else
console.log("INVALID NUMBER");

//read the number and display weekday
const process=require('process');
let number=process.argv[3];
if(number==1)
console.log("SUNDAY");
else if(number==2)
console.log("MONDAY");
else if(number==3)
console.log("TUESDAY");
else if(number==4)
console.log("WEDNESDAY");
else if(number==5)
console.log("THURSDAY");
else if(number==6)
console.log("FRIDAY");
else if(number==7)
console.log("SATURDAY");
else
console.log("INVALID Number");

//perform operations
const process = require('process');
let a = parseInt(process.argv[4]);
let b = parseInt(process.argv[5]);
let c = parseInt(process.argv[6]);
let operation1 = a + b * c;
let operation2 = a % b + c;
let operation3 = c + a / b;
let operation4 = a * b + c;
let maximum=Math.max(operation1, operation2, operation3, operation4);
if(maximum == operation1)    
console.log("Maximum : Operation 1" + " Value : "+operation1);    
else if(maximum == operation2)    
console.log("Maximum : Operation 2" + " Value : "+operation2);    
else if(maximum == operation3)    
console.log("Maximum : Operation 3" + " Value : "+operation3);    
else     
console.log("Maximum : Operation 4" + " Value : "+operation4);    

let minimum = Math.min(operation1,operation2,operation3,operation4);
if(minimum == operation1)    
console.log("Minimum : Operation 1" + " Value : "+operation1);    
else if(minimum == operation2)    
console.log("Minimum  : Operation 2" + " Value : "+operation2);    
else if(minimum == operation3)    
console.log("Minimum  : Operation 3" + " Value : "+operation3);    
else     
console.log("Minimum : Operation 4" + " Value : "+operation4);    
