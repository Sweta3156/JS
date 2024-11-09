// if statements
function ourTrueOrFalse(isItTrue) {
    if (isItTrue) {
        return "yes , it is true";
    }
    return "no, it's false";
}

console.log(ourTrueOrFalse(true));





// else statements
function testElse(val) {
    if (val>50) {
        return "good";

    }else {
        return "improve";

    }
}
console.log(testElse(99));






// else if statements
function testElseIf(val) {
    if (val >= 70) {
        return "good";
    } else if (val >= 40 && val <70) {
        return "okay";

    } else {
        return "poor";
    }
}

console.log(testElseIf(20))






function test(val){
    if (val<5){
        return "tiny";
    } else if (val < 10) {
        return "small";
    } else if (val < 15) {
        return "medium";
    } else if (val < 20) {
        return "large";
    }else {
        return "huge";
    } 
}
console.log(test(56));





var names = ["Hole-in-one!","eagle","birdie","par","bogey","double bogey","go home"] ;
function golfScore(par, strokes) {
    if (strokes ==1){
        return names[0]
    } else if (strokes <= par -2) {
        return names[1]
    }else if (strokes == par -1)  {
        return names[2]
    } else if (strokes == par ) {
        return names[3]
    } else if (strokes == par+1 ) {
        return names[4]
    } else if (strokes == par+2 ) {
        return names[5]
    } else if (strokes >= par+3 ) {
        return names[6]
    } 
}

console.log(golfScore(60,8));