//finding maximum and minimum of 5 random three digit numbers

let minimum=999;
for(i=1;i<=5;i++)
{
    let number=Math.floor(Math.random()*900)+100;
    console.log(i+":-"+number);
    if(number<minimum)
    minimum=number;
    if(number>maximum)
    maximum=number;
}
console.log("MAXIMUM: "+maximum+"\nMINIMUM: "+minimum);


//check if date is between march 20th and june 20th
const process=require('process');
let input=process.argv;
let date=new Date(input[2]);
if((date.getMonth()==2 && date.getDate()>=20)||(date.getMonth()==5 && date.getDate()<=20)||(date.getMonth()>2 && date.getMonth()<5))
console.log("true");
else
console.log("False");

//check for leap year
const process=require('process');
let input=process.argv;
let year=new Date(input[3]);
if((year%4==0 && year%100!=0) || (year%400==0))
console.log("Leap Year");
else
console.log("Not a Leap Year");

//coin flip experiment
const HEAD=1;
let value=Math.floor(Math.random()*10)%2;
if(value==HEAD)
console.log("TAIL");
else
console.log("TAIL");