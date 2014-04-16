// I worked on this challenge [by myself]

// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment.
// Note: to make commenting easier, you can highlight the section you want to comment and hold
// command + / This will comment the line.

//Rescue Mission
// move down x2
// move right
// move up x2
// move right x2
// move down
// attack!

this.moveDown();
this.moveDown();
this.moveRight();
this.moveUp();
this.moveUp();
this.moveRight();
this.moveRight();
this.moveDown();
this.attackNearbyEnemy();

// Grab the Mushroom
// move up
// move right
// move left
// move up
// kill

this.moveUp();
this.moveRight();
this.moveLeft();
this.moveUp();
this.attackNearbyEnemy();

//Drink Me
// kill
// move right
// move down
// move up
// move right
// leave no prisoners

this.attackNearbyEnemy();
this.moveRight();
this.moveDown();
this.moveUp();
this.moveRight();
this.attackNearbyEnemy();

//Taunt the Guards
// delete the comments
// move right x2
// move up
// move right
// taunt
// kill
// move right

this.moveRight();
this.bustDownDoor();
this.moveRight();
this.say("Hey there!");
this.moveLeft();
this.moveLeft();
this.say("Attack!");
this.moveRight();
this.say("Follow me.");
this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();
this.say("My Butt!");
this.say("Attack!");
this.attackNearbyEnemy();
this.attackNearbyEnemy();
this.say("Follow me.");
this.moveRight();

// It's a Trap!
// move down x2
// yo!
// move up x2
// attack!

this.moveDown();
this.moveDown();
this.say("Poopy");
this.moveUp();
this.moveUp();
this.say("Attack!");

// Taunt
// make fun of the ogres mom x4

this.say("Yo momma!");
this.say("Hey! yo momma!");
this.say("She's calling me!");
this.say("I have higher standards though");

// Cowardly Taunt
// run out
// make fun of them
// run back

this.moveXY(50, 16);
this.moveXY(63, 20);
this.moveXY(70, 10);  // This is a safe spot.
this.say("I can lure them in here.");
this.moveXY(56, 34);
this.say("You're all ugly!");
this.moveXY(70, 10);

// Commanding Followers
// tell them to follow me, like peasants
// tell them to fight
// eat muffins

this.moveXY(49, 66);
this.moveXY(60, 63);
this.moveXY(75, 63);
this.say("Hail, friends!");
this.say("follow, NOW!");
this.moveXY(66,43);
this.say("Attack those ogres, while I eat muffins");
this.moveXY(75,62);

// Mobile Artillery
// move to the middle
// sho0t group 1 x2
// shoot group 2 x2

this.moveXY(30, 26);  // Move into range
this.attackXY(46, 5);  // Shoot once in the middle of the ogres
this.moveXY(43, 37);
this.attackXY(68, 54);
this.attackXY(58, 48);
this.attackXY(50,63);
this.attackXY(45, 49);

// "this" is referring to the object itself. In this example it was usually Tharin,
// and one time the cannon.

// The parens let JavaScript know that the object is a method and not a property.
// Kind of like letting it know it's a verb and not an adjective.

// Semicolons let the program know that the line of code is done

// Reflection:
// Write your reflection here.

// I'm not really sure what I learned, actually. I just followed the instructions,
// and made sure that I typed everything correctly (capitals and all). I think I spent
// maybe 2 hours watching my dude slay ogres after telling him to move in front of them
// and kill. I think reading the instructions was the hardest part of this exercise
// (something that can be suprisingly difficult). Hopefully I followed them half decently.
// I'm guessing that when I go to actually code JavaScript in the future, that
// the syntax structure will look more familiar.
