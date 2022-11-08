function ourMap(inputArr:any [], callbackFn: Function):any []{
    const resultArr: any [] = [];
    for(let element of inputArr){
        resultArr.push(callbackFn(element));
    }
    
    return resultArr;
}