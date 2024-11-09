var ourDog = {
    "name" : "quincy",
    "legs" : 4,
    "tails" : 1,
    "friends" : ["everything!"]
};

// accessing object properties with dot notation
var nameValue = ourDog.name;
var legValue = ourDog.legs;

console.log(nameValue);
console.log(legValue);


// with bracket notation 
var tailsValue = ourDog["tails"];
var friendsValue = ourDog["friends"];

console.log(tailsValue);
console.log(friendsValue);



// updating obj properties
console.log(ourDog.name= "happy quincy");


// adding properties
ourDog ['bark'] = "woof!";
console.log(ourDog);


// deleting prop
delete ourDog.friends;
console.log(ourDog);





