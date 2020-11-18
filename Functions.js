//temperature converter
/*
const io=require('console-read-write');
DoConversions();
async function DoConversions()
{
    console.log("Enter your choice: \n1.Fahrenheit to Centigrade \n2.Centigrade to Fahrenheit");
    let choice=parseInt(await io.read());
    switch(choice)
    {
        case 1:
            FahToCen();
            break;
        case 2:
            CenToFah();
            break;
        default:
            console.log("Invalid choice");
    }
}
async function FahToCen()
{
    console.log("Enter temperature in Fahrenheit");
    let tempF=parseInt(await io.read());
    if(tempF>=32 && tempF<=212)
    {
        let tempC=5*((tempF-32)/9);
        console.log("Corresponding temperature in Centigrade is: "+tempC);
    }
    else
    console.log("Invalid range");
}
async function CenToFah()
{
    console.log("Enter temperature in Centigrade");
    let tempC=parseInt(await io.read());
    if(tempF>=0 && tempF<=100)
    {
        let tempF=((9*tempC)/5)+32;
        console.log("Corresponding temperature in Fahrenheit is: "+tempF);
    }
    else
    console.log("Invalid range");
}
*/

//palindrome number check
const io=require('console-read-write');
console.log("Enter a number");
let number=parseInt(await io.read());
if(CheckPrime(number)==true)
{
    if(FindPalindrome(number)==true)
    console.log("Number is Prime and Palindrome");
}
else
console.log("Number is not prime");
function CheckPrime(num)
{
    let factors=0;
    if(num==1)
    return false;
    else if(num==2)
    return true;
    else if(num>2)
    {
    for(let i=2;i<num;i++)
    {
        if(num%i==0)
        factors++;
    }
    if(factors==0)
    return true;
    else
    return false;
    }
    else
    return false;
}
function FindPalindrome(num)
{
    let reverse=0;
    let r=num;
    while(num!=0)
    {
        reverse=reverse*10;
        reverse=reverse+(num%10);
        num=num/10;
    }
    if(r==reverse)
    return true;
    else
    return false;
}