function ourMap(inputArr: number [], callbackFn: Function):any []{
    const resultArr: number [] = [];
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


console.log(ourMap([1,2,3,4],addFive));
console.log(ourMap([1,2,3,4],timesFive));