function nextInLine(arr, item)  {

    arr.push(item);
    return arr.shift();
}

var testArray=[1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArray));
console.log(nextInLine(testArray, 6));
console.log("After :" + JSON.stringify(testArray));


