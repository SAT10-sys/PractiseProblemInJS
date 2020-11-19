//birth month problem

let birthMonth=new Map();
for(let i=1;i<=50;i++)
{
    let month=(Math.floor(Math.random() * 100) % 12) + 1;
    birthMonth.set(i,month);
}
for(let m=1;m<=12;m++)
{
    let sameMonth=[...birthMonth.entries()].filter(([a,b]) => b == m).map(([c,d]) => c);
    console.log("People with birthday in month: "+m);
    console.log(sameMonth);
}

//Dice Roll Problem
let myMap = new Map();
while(1)
{
    let diceRoll = (Math.floor(Math.random() * 10) % 6) + 1;
    if(!myMap.has(diceRoll))
        myMap.set(diceRoll, 1);
    else
    {
        let count = myMap.get(diceRoll);
        myMap.set(diceRoll, ++count)
    }
    if(myMap.get(diceRoll) == 10)
        break;
}
let maxCount = Math.max(...myMap.values());
let maxKeys = [...myMap.entries()]
        .filter(({ 1: v }) => v == maxCount)
        .map(([k]) => k);
let minCount = Math.min(...myMap.values());
let minKeys = [...myMap.entries()]
        .filter(({ 1: v }) => v == minCount)
        .map(([k]) => k);

console.log("Maximum reached number: " + minKeys + " Minimum reached number: " + maxKeys); 
