//2nd largest and 2nd smallest numbers without sorting
/*
{
    //storing 10 random numbers in an array
    let array1=new Array();
    while(array1.length<10)
    {
        let number=Math.floor(Math.random()*1000);
        if(number>=100 && number<=999)
        {
            array1.push(number);
            console.log(number);
        }
    }
    let maximum=Math.max.apply(null,array1);
    array1.splice(array1.indexOf(maximum),1);
    maximum=Math.max.apply(null,array1);
    console.log("2nd largest number: "+maximum);

    let minimum=Math.min.apply(null,array1);
    array1.splice(array1.indexOf(minimum),1);
    minimum=Math.min.apply(null,array1);
    console.log("2nd smallest number: "+minimum);
}


//sorting to get 2nd maximum and 2nd minimum
{
    //storing 10 random numbers in an array
    let array2=new Array();
    while(array2.length<10)
    {
        let number1=Math.floor(Math.random()*1000);
        if(number1>=100 && number1<=999)
        {
            array2.push(number1);
            console.log(number1);
        }
    }
    let sortedArray=array2.sort();
    console.log("2nd largest number: "+sortedArray[sortedArray.length-2]);
    console.log("2nd smallest number: "+sortedArray[1]);
}

//store prime factors in an array
process1=require('process');
console.log(FindPrimeFactors(parseInt(process1.argv[2])));
function FindPrimeFactors(number2)
{
    let factors=[];
    for(let i=2;i<=number2;i++)
    {
        while(PrimeCheck(i) && number2%i==0)
        {
            if(!factors.includes(i))
            factors.push(i);
            number2=number2/i;
        }
    }
}
function PrimeCheck(number2)
{
    for(let i=2;i<=Math.sqrt(number2);++i)
    {
        if(number2%i==0)
        return false;
    }
    return true;
}

//find sum of three numbers is zero
let array3=new Array();
FinsNumbers();
console.log(array3);
function FinsNumbers()
{
    while(array3.length!=3)
    {
        let s1=Math.floor(Math.random()*10);
        let s2=Math.floor(Math.random()*10)-9;
        let s3=Math.floor(Math.random()*10)-9;
        if(s1+s2+s3==0)
        {
            array3.push(s1);
            array3.push(s2);
            array3.push(s3);
        }
    }
}
*/

//find 2 digit numbers with repeated digits
let array4=new Array();
for(let i=1;i<=100;i++)
{
    if(i%11==0)
    array4.push(i);
}
console.log(array4);