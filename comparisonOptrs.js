// eqality operator

function testEqual(val) {
    if(val == 12) {
        return "equal";
    } 
    return "not equal";
}

console.log(testEqual(50));




// strictly equaity operator
function testStrict(val)  {
    if(val === 7){
        return "equal";
    }
    return "not equal";
}

console.log(testStrict('7'));




function compareEquality(a,b)  {
    if(a==b){     //false with ===
        return "equal";
    }
    return "not equal";
}

console.log(compareEquality(10, '10'));




// inequality operator
function notEqual(val) {
    if(val != 100){
        return "not equal";
    }
    return "equal";

}
console.log(notEqual(50));





// strictly inequality operator 
function strictlyNotEqual(val) {
    if(val !== 100){
        return "not equal";
    }
    return "equal";

}
console.log(strictlyNotEqual('100'));





// Logical And operator 
function greaterThan(val) {
    if (val>=100) {
        return "100 or above 100";

    }
    if (val>=10){
        return "10 or above 10";

    }
    return   "under 10";

}

console.log(greaterThan(80)); 