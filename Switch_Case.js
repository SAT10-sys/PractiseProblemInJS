//read single digit number using switch case
const process1 = require('process');
let number = parseInt(process1.argv[2]);
switch(number)
{
    case 1 : console.log("One");
    break;
    case 2:console.log("Two");
    break;
    case 3:console.log("Three");
    break;
    case 4:console.log("Four");
    break;
    case 5:console.log("Five");
    break;
    case 6:console.log("Six");
    break;
    case 7:console.log("Seven");
    break;
    case 8:console.log("Eight");
    break;
    case 9:console.log("Nine");
    break;
    default:console.log("Invalid number");
    break;
}

//read number and display week-day using switch case
const process2 = require('process');
let number = parseInt(process2.argv[2]);
switch(number)
{
    case 1 : console.log("Monday");
    break;
    case 2:console.log("Tuesday");
    break;
    case 3:console.log("Wednesday");
    break;
    case 4:console.log("Thursday");
    break;
    case 5:console.log("Friday");
    break;
    case 6:console.log("Saturday");
    break;
    case 7:console.log("Sunday");
    break;
    default:console.log("Invalid number");
    break;
}

//unit conversions
const process3 = require('process');
let number = parseInt(process3.argv[3]);
let choice = parseInt(process3.argv[2]);
switch(choice)
{
    case 1 : console.log(number + "Feet :"+ number * 12 +" Inches");
    break;
    case 2 : console.log(number + "Inches :"+ number / 12 +" Feet");
    break;
    case 3 : console.log(number + "Feet :"+ number * 0.3048 +" Meter");
    break;
    case 4 : console.log(number + "Meter :"+ number * 3.28 +" Feet");
    break;
    default: console.log("Wrong input");
    break;
    }