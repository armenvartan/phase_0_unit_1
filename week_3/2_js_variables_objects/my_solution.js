// I paired by myself on this challenge.


// Pseudocode
// "assert" secretNumber = 7 and password = "just open the door" allowedIn = false
// members = [John, xx, xx, Mary]


// __________________________________________
// Write your code below.

secretNumber = 7;
password = "just open the door";
allowedIn = false;
members = ["John", "Boomey", "Blamblam", "Mary"];
assert(secretNumber, password, allowedIn, members);



// __________________________________________
// Refactored Code: Include a refactored version (or justification of your original code) here.
// I'm pretty happy with my code. I made 5 arguments in 5 lines and satisfied all 4 of the parameters.




// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here.
// I did my usual 'monkey with a stick' method to start. So I looked at the code and poked it for a bit
// Once I had an idea of what I thought the program was looking for (to get all the values listed),
// I started trying things. The biggest challenge was using the JavaScript syntax. I'm still in
// a Ruby mindset. Luckily, they're not too different, so it didn't take too much messing around
// to get the syntax right. This assignment as a whole took me maybe 1/2 an hour, so I'm feeling
// pretty good about solving it. The most tedious part was definitely the syntax for me. Once
// I realized this was going to be the problem, I deleted all of my code and started taking it 1 by 1
// to make sure that the code kept passing. by the time 'password' passed and it prompted me for the boolean,
// I knew I was a minute from finishing. I enjoyed this as an introduction, This is my first TDD and my
// what I thought was my first week in JavaScript (turns out I did half the code academy course a few months ago).
// So I got to push my brain to think in another way without being overwhelmed trying to solve a complicated
// problem


// __________________________________________
// Driver Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)
