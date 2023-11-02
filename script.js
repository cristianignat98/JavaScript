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

// Function declarations :
/*
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
// Arrow function is shorter and faster to write
/*
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
