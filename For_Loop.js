//Printing powers of two

{
process1=require('process');
let number1=parseInt(process1.argv[2]);
console.log("Displaying powers of two: ")
for(i=0;i<=number1;i++)
console.log(Math.pow(2,i)+"\t");
}

//Harmonic series
{
    process2=require('process');
    let number2=parseInt(process2.argv[2]);
    let sumOfSeries=1;
    for(let i=2;i<=number2;i++)
    sumOfSeries=sumOfSeries+(1/i);
    console.log("Sum of the Harmonic Series: "+sumOfSeries);
}

//Finding Prime Factors

{
process3=require('process');
let number3=parseInt(process3.argv[2]);
CheckIfPrime(number3);
function CheckIfPrime(number3)
{
    let factorsCount=0;
    if(number3==1)
    console.log("Neither Prime nor Composite");
    else if(number3==2)
    console.log("Prime Number");
    else if(number3>2)
    {
        for(let i=2;i<number3;i++)
        {
            if(number3%i==0)
            factorsCount++;
        }
        if(factorsCount>0)
        console.log("Composite Number");
        else
        console.log("Prime Number");
    }
}
}

//check prime numbers in a range
{
    process4=require('process');
    let startNumber=parseInt(process4.argv[2]);
    let endNumber=parseInt(process4.argv[3]);
    if(endNumber>=startNumber)
    {
        for(let i=startNumber;i<=endNumber;i++)
        if(CheckPrimeNumber(i)==true)
        console.log(i);
    }
    else
    console.log("Invalid Range");
    function CheckPrimeNumber(number)
    {
        let factorsCount=0;
    if(number==1)
    return false;
    else if(number==2)
    return true;
    else if(number>2)
    {
        for(let i=2;i<number3;i++)
        {
            if(number3%i==0)
            factorsCount++;
        }
        if(factorsCount>0)
        return false;
        else
        return true;
    }
    else
    return false;
}
}

//calculate factorial of the number
{
    process5=require('process');
    let number5=parseInt(process5.argv[2]);
    let factorial=1;
    for(let i=1;i<=number5;++i)
    factorial=factorial*i;
    console.log("Factorial of "+number5+" is "+factorial);
}


//find factors of the number
{
    process6=require('process');
    let number6=parseInt(process6.argv[2]);
    console.log("The factors of "+number6+" is: ");
    for(let i=1;i<=number6;++i)
    {
        if(number6%i==0)
        console.log(i);
        console.log("\n");
    }
}