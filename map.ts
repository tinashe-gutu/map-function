import { string } from "yargs";

function ourMap(inputArr: any[], callbackFn: Function):any []{
    const resultArr: any[] = [];
    for(let element of inputArr){
        resultArr.push(callbackFn(element));
    }
    
    return resultArr;
}

function addFive(number: number): number {
    return number + 5;
}

function timesFive(number: number): number {
    return number * 5;
}

console.log(ourMap(["h", "e", "l", "l", "o"], (char:string):string => char.toUpperCase()), 'to be["H", "E", "L", "L", "O"]');
console.log(ourMap([1,2,3,4],addFive));
console.log(ourMap([1,2,3,4],timesFive));










const spells = [
    {
      incantation: "Accio",
      effect: "Summons an object",
      type: "Charm"
    },
    {
      incantation: "Aguamenti",
      effect: "Shoots water from wand",
      type: "Charm"
    },
    {
      incantation: "Alohomora",
      effect: "Opens locked objects",
      type: "Charm"
    }
];

//function myFunction(spell: object):string{ return spell.incantation }
//function myFunction2(spell: object):string{ return spell.type }
//console.log(ourMap(spells, myFunction), '["Accio","Aguamenti","Alohomora",]');
//should return ["Accio", "Aguamenti", "Alohomora"];
//console.log(ourMap(spells, myFunction2), '["Charm","Charm","Charm"]');
//should return ["Charm", "Charm", "Charm"];