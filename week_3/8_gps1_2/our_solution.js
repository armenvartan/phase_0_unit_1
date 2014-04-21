// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1.Armen
//  2.Emmanuel


// 1. "YOU SIGNED... WHO?!"
var toshiroMifune = {
    name: "Toshiro Mifune",
    age: 90,
    quote: "YAMERO"
};
toshiroMifune.name

var toshiroMifune = new Object()

toshiroMifune.name = "Toshiro Mifune"
toshiroMifune.age = "90"

var toshiroMifune = {}
//create an object in JS storing age, name, quote



// 2. "Here they Come!"
// constructor function
var Client = function(name, age, quote) {
  this.name = name,
  this.age = age,
  this.quote = quote
};
var adamSandler = new Client("Adam Sandler", 47, "That's your home! Are you too good for your home?!");
var kristinBell = new Client("Kristin Bell", 33, "Do you wanna build a snowman?");
var jimCarrey = new Client("Jim Carrey", 52, "...So you're telling me there's a chance? YEAH!");
aList = [adamSandler, kristinBell, jimCarrey, toshiroMifune];
// 3. "TIME IS MONEY!"

//YOUR CODE HERE!

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";





// 4. "SHOW 'EM OFF!"
displayClient  = function(client){
    alert("Please meet " + client.name),
    alert("At the young age of " + client.age),
    alert(quote)
};
for (i=0, i < aList.length, i++){
    displayClient(aList[i])
};

// ** BONUS **


//  Your Reflection:
// I was pretty off for this assignment. Emmanuel was really helpful. He let me try to work through things,
// and didn't give me any clues until I was definitely stuck. I learned how 'this' works.
// This assignment also helped solidify my JS flow.
