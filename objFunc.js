function phoneticLookup(val) {
    var result = "";


    var lookup ={
        "alpha" : "adamas",
        "bravo" : "boston",
        "charlie" : "chicago",
        "delta" : "denver",
        "echo" : "easy",
        "foxtrot" : "frank"
    };
    result = lookup[val];
    return result;

}
console.log(phoneticLookup("charlie"));





// testing obj for property
var myObj ={
    gift : "pony",
    pet : "kitten",
    bed : "aleigh"
};

function checkObj(checkProp) {
    if (myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp];
    } else {
        return "not found";
    }
}

console.log(checkObj(pony));




