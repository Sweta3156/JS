// reusable function
function ourReusableFunction()  {
    console.log("hey world");

}

ourReusableFunction();





// PASSING ARGUMENT
function ourFunctionWithArg(a, b) {
    console.log(a-b);
}
ourFunctionWithArg(10, 5);





//global vs local scope in functions
var outerWear = "tShirt"; 
  
function myOutfit() {
    var outerWear = "sweater";

    return outerWear;

}
console.log(myOutfit());
console.log(outerWear);





// return value from fun
function minusSeven(num) {
    return num-7;
}
console.log(minusSeven(20));




var sum = 0;
function addThree() {
    sum = sum + 3;
}    // won't return anythng




var changed = 0;
function change(num) {
    return (num+5) /3;

}
changed = change(10);
console.log(changed);




// return boolean values from function
function check(a,b){
    return a>b;
}
console.log(check(99,8));


// return boolean values
function check(a,b) {
    return b>a;
}
console.log(check(2,6));




