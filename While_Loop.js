// print powers on 2
/*
{
    let result=1;
    console.log("Displaying powers of 2");
    while(result<256)
    {
        result=result*2;
        let i=1;
        console.log(result);
        i++;
    }
}

//flip coin problem
let head=0;
let tail=0;
while(head<11 && tail<11)
{
    let toss=Math.floor(Math.random()*10)%2;
    if(toss==0)
    {
        head++;
        console.log("Heads");
        console.log("Headwins: "+head);
    }
    else
    {
        tail++;
        console.log("Tails");
        console.log("TailWins: "+tail);
    }
}
*/
//Gambling Game
{
let money=100;
let wins=0;
let numberOfbets=0;
while(money!=0 && money!=200)
{
    let bet=Math.floor(Math.random()*10)%2;
    if(bet==1)
    {
        wins++;
        numberOfbets++;
        money++;
    }
    else
    {
        money--;
        numberOfbets++;
    }
}
console.log("Final Money: "+money);
console.log("Number of wins: "+wins);
console.log("Number of bets: "+numberOfbets);
}

