///////////////////// FUNDAMENTALS PART 2 ////////////////////
//ACTIVATING STRICT MODE
"use strict";

/*
let hasDriversLicence = false;
const passTest = true;

if (passTest) hasDriversLicence = true;
if (hasDriversLicence) console.log("I can drive");

// const interface = "Audio";
// const private = 543;
*/

/////// FUNCTIONS /////////
/*
function logger() {
  console.log("My name is Cristian");
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
*/

///// FUNCTION DECLARATIONS VS. EXPRESSIONS
/*

// Function declarations :
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1991);

// Function expressions:
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}; // this  funtion is a VALUE that we assigned to the calcAge2 VARIABLE

const age2 = calcAge2(1991);

console.log(age1, age2);
*/

//// ARROW FUNCTION
/*
// Arrow function is shorter and faster to write
const calcAge3 = (birthYear) => 2023 - birthYear; // this is also a value that we assign to the calcAge3 variable, just like the function expression, but this one is easier and faster to write. We don't need the curly braces {} and also the return happens implicity.

const age3 = calcAge3(1999);
console.log(age3);

//ex de mai sus e atunci cand avem doar un parametru si un code(2037-birthYear)
// things change when we add more parameters and codes:
// we will calculate how many years a person has left until retirement:

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2023 - birthYear;
  const retirement = 65 - age;
  //return retirement; // return happens implicity only when is a single line of code, here we have to define it bcs we have more lines of code
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Bob"));
console.log(yearsUntilRetirement(1999, "Cristian"));
*/

///// FUNCTIONS CALLING OTHER FUNCTIONS
/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  console.log(apples, oranges);
  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
  return juice;
}

console.log(fruitProcessor(2, 3));
*/

//// REVIEWING FUNCTIONS
/*
const calcAge = function (birthYear) {
  return 2023 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1999, "Cristian"));
console.log(yearsUntilRetirement(1950, "Mike"));
*/
/////////////////////// CHALLANGE 1 //////////////////////////////////
/*
const calcAverage = (a, b, c) => (a + b + c) / 3;

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log("No team wins...");
  }
};

checkWinner(scoreDolphins, scoreKoalas);

// Test 2

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
checkWinner(scoreDolphins, scoreKoalas);
*/

/// INTRODUCTION TO ARRAYS
/*
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";
//instead of writing so many variables, we can store all this values into one variable:

const friends = ["Michael", "Steven", "Peter"];

//se mai poate scrie si asa:
const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length); ///length arata totalul elementelor din array, de ex daca are 100 de elemente si vrei sa stii care e ultimul element atunci pui asta :
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);
//
const firstName = "Jonas";
const jonas = [firstName, "Cristian", 2023 - 1999, "student", friends];
console.log(jonas);

//
//
//
//
//
//
//
//
//
//////////////// ex concret cu ce ne ajuta arrays:
const calcAge = function (birthYear) {
  return 2023 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

console.log(calcAge(years)); /////////this is not gonna work because we cannot return a number - an array

//WE CANNOT DO OPERATIONS WITH AN ARRAY

///instead, we can do this:
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

// since we started with an array, we should end up also with an array:

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
*/

/////////// BASIC ARRAY OPERATIONS (METHODS)
/*
/// Add elements
const friends = ["Michael", "Steven", "Peter"];
friends.push("Jay"); /////// PUSH is a method, a function, and we call that function directly on the friends array AND IT ADDS AN ELEMENT AT THE END OF THE ARRAY
console.log(friends);

///THE PUSH FUNCTION RETURNS A VALUE(the value is the length of the new array), so since is a value we can store it into a variable:
const newLength = friends.push("Jay");
console.log(newLength);

//////////PUSH method adds element to final, there's also a method that adds elements to the beginning of the array:

friends.unshift("John");
console.log(friends);

//
//
//
//
///// Remove elements
friends.pop(); // POP removes the LAST element of the array
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // SHIFT removes the FIRST element of the array
console.log(friends);

//
//
//
// There's a method that tells us in which position a certain element is in the array:

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

// the modern indexOf, and more useful:
// will simply return true if the element is in the array, and false if its not:
friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes(23));

if (friends.includes("Peter")) {
  console.log("You have a friend called Peter");
}
*/

//////////////////// INTRODUCTION TO OBJECTS
/*
//aici avem un array:
const jonasArray = [
  "Jonas",
  "Cristian",
  2023 - 1999,
  "student",
  ["Michael", "Peter", "Steven"],
];

//aici avem un object:
const jonas = {
  //THERE ARE MULTIPLE WAYS OF DOING OBJECTS, BUT WITH CURLY BRACES LIKE THIS IS THE EASIEST ONE AND ITS CALLED OBJECT LITERAL SYNTAX, bcs we are literally writing down the entire object content
  firstName: "Jonas",
  lastName: "Cristian",
  age: 2023 - 1999,
  job: "student",
  friends: ["Michael", "Peter", "Steven"],
}; /////// we have here an Object(which contains 5 properties- firstName,lastName,age,job,friends), each property has a VALUE
*/

////////////////// DOT VS. BRACKET NOTATION
/*
const jonas = {
  firstName: "Jonas",
  lastName: "Cristian",
  age: 2023 - 1999,
  job: "student",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(jonas);

/// THE 1st WAY OF GETTING A PROPERTY FROM AN OBJECT IS BY USING THE DOT NOTATION:
console.log(jonas.lastName);
/// THE 2nd WAY OF GETTING A PROPERTY FROM AN OBJECT IS BY USING THE BRACKETS NOTATION:
console.log(jonas["job"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends"
);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job and friends"
  );
}

////Using both the DOT and Bracket Notation to ADD NEW PROPERTIES to the OBJECT:
jonas.location = "Romania"; /// that's how we use the DOT notation to add location property
jonas["twitter"] = "@portugal"; /// here we used the brackets to add twitter property to the object
console.log(jonas);

//Challange
// write 'Jonas has 3 friends, and his best friend is called Michael'
console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
);
*/
////////////////// OBJECT METHODS
/*
/// Since functions are values, we can add them to an object
const jonas = {
  firstName: "Jonas",
  lastName: "Cristian",
  birthYear: 1999,
  job: "student",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicence: true,

  // calcAge: function (birthYear) {
  //   return 2023 - birthYear;
  // }, // aici calcAge is not a variable its just a property of the object

  // const calcAge= function (birthYear) {
  // return 2023 - birthYear;
  // }  /// this is how we used to do it before

  // calcAge: function () {
  //   // console.log(this);
  //   return 2023 - this.birthYear; // jonas.birthYear would also work but we try do not repeat yourself principle, so when we would want to change the variable name to jonas2 for example, we would have to go through all jonas.smth to change it to jonas2.smth, and that's not ok
  // },

  calcAge: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} year old ${
      jonas.job
    }, and he has ${this.hasDriversLicence ? "a" : "no"} driver's licence}`;
  },
};

console.log(jonas.calcAge());

console.log(jonas);
console.log(jonas.age);
console.log(jonas.age);

//Challange
// write "Jonas is a 24-year old student, and he has a/no drivers licence"

console.log(jonas.getSummary());
*/

///////////// CHALLANGE 3
// BMI = mass / (height * height)
/*
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);

// Log to the console 'John Smith's BMI() is higher than Mark Miller's ()'
if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI(${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`
  );
} else {
  console.log(
    `${mark.fullName}'s BMI(${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`
  );
}
*/

///////////// ITERATION: THE FOR LOOP
/*
// IF/ELSE statement it's a CONTROL structure, just like others, including LOOP and more
// so let's say you go to the gym and you lift some weights and you are doing 1 exercise with 10 reps
// this could be write like this:

// console.log("Lifting weights repetition 1");
// console.log("Lifting weights repetition 2");
// console.log("Lifting weights repetition 3");
// console.log("Lifting weights repetition 4");
// console.log("Lifting weights repetition 5");
// console.log("Lifting weights repetition 6");
// console.log("Lifting weights repetition 7");
// console.log("Lifting weights repetition 8");
// console.log("Lifting weights repetition 9");
// console.log("Lifting weights repetition 10");

///instead of writing 10 times this code, we can create a loop and put one of these lines of code in there:

// this condition will be evaluated before each iteration of the loop, if the condition it's TRUE, then the next loop iteration will run, when this condition is false, then the loop stops
for (let rep = 1; rep <= 30; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}
//this loop is keep running while the rep variable is less or equal 10
// rep++ is basically rep= rep + 1, so for each line of code, loop calculates rep + 1 and execute it
*/

///////////////// LOOPING ARRAYS. BREAKING AND CONTINUING
/*
//////////////////////////////////// EXEMPLUL 1/////////////////////////////////////
//aici avem un array:
const jonas = [
  "Jonas",
  "Cristian",
  2023 - 1999,
  "student",
  ["Michael", "Peter", "Steven"],
  true,
];
// now we can use the for loop to loop through this array
// let's say that we wanted to individually log every element of the array to the console:

// console.log(jonas[0])
// console.log(jonas[1])
// ...
// console.log(jonas[4])
// jonas[5] does NOT exist

for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i], typeof jonas[i]);
}

// type of jonas[i] arata langa fiecare element in consola ce anume este(string,boolean,object,number etc)
// am pus i<jonas.length pentru a nu conditiona loop cu un anumit nr de variabile, iar in cazul in care vrem ulterior sa schimbam si sa adaugam inca un element sau mai multe in array, acestea sa poata fi redate de catre loop.
// am pus i = 0 pentru ca un array incepe cu elementul 0
//
//
//
// now we create an array with the typeof elements from last array:
const types = [];
for (let i = 0; i < jonas.length; i++) {
  // Reading from jonas array
  console.log(jonas[i], typeof jonas[i]);

  // Filling types array
  //types[i] = typeof jonas[i]; // the 1st way
  types.push(typeof jonas[i]);
}
console.log(types);


//////////////////////////////////// EXEMPLUL 2 /////////////////////////////////////
const years = [1991, 2007, 1969, 2020];
// now we want to calculate the ages for all this four birth years here, and we want to store them in a new array:
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2023 - years[i]);
}
console.log(ages);

/////////////////////////////// continue and break //////////////////////////////////
// CONTINUE is to exit the current iteration of the loop and continue to the next one
const jonas = [
  "Jonas",
  "Cristian",
  2023 - 1999,
  "student",
  ["Michael", "Peter", "Steven"],
  true,
];
// let's say we wanted to print elements from the array that are only strings, the continue statement it's perfect for this:
console.log("--- ONLY STRINGS ---");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue; // we say if the typeof the current element is NOT a string, then continue, which means that the current iteration of the loop is exited, and then the next one starts immediately
  console.log(jonas[i], typeof jonas[i]);
}

//
// BREAK is to completely terminate the whole loop
// what we want now, is to log no other elements after we found a number
// so basically after a number is found, NOTHING ELSE should be printed
console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === "number") break;
  console.log(jonas[i], typeof jonas[i]); // nici macar acest cod nu mai este redat
}
//in array-ul jonas, the number ar fi 2023-1999 adica 24, deci break n a mai redat niciun element ce se afla dupa 2023-1999

*/
///////////////// LOOPING BACKWARDS AND LOOPS IN LOOPS
/*

//LOOPING BACKWARDS:
const jonas = [
  "Jonas",
  "Cristian",
  2023 - 1999,
  "student",
  ["Michael", "Peter", "Steven"],
];
// let's now loop over this array BACKWARDS(de la ultimul la primul): 4,3,2,..,0
// am scris let i =jonas.length - 1 pentru a reda unul cate unul de la sfarsit la final
for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}

//LOOP INSIDE OF A LOOP:
// back to the weight lifting exercise that we did in the previous lecture, where we had an exercise with 10 reps, but now let's say that we have three different exercises with 5 reps each

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
  }
}
*/

//////////////// THE WHILE LOOP
/*
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

//
//

let rep = 1;
while (rep <= 10) {
  //console.log(`WHILE:  Lifting weights repetition ${rep}`);
  rep++;
}

// while does not really need a COUNTER(let rep=1), only the condition have to be there in order to stay true and to keep running
// on this example we do not depend on a counter, but instead it will depend on a random variable:
// we will basically roll a dice and then keep rolling the dice until we roll a six, then when we roll a six, we stop:

//the roll of a dice is between 1 and 6
let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}
*/

////////////////// CHALLANGE 4
/*
// Let's improve Steven's tip calculator even more, this time using loops!
// Your tasks:
// Create an array called bills containing all 10 test bill values.
// Create empty arrays for the tips and the totals (tips and totals)
// Use the calcTip function we wrote before (included in the starter code) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

// TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.

// BONUS:
// Write a function calcAverage which takes an array called arr as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it if you feel like it:

// First, you will need to add up all values in the array. To do the addition, start by creating a variable sum that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the sum variable. This way, by the end of the loop, you have all values added together.

// To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements).

// Call the function with the totals array.

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

// BONUS rezolvare:
const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum= sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
*/
