////////////////////////OPERATORI BASIC////////////////////////////
// OPERATORI MATEMATICI
/* 
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 (2 la puterea 3) = 2 * 2 * 2

const firstName = "Cristian";
const lastName = "Ignat";
console.log(firstName + "" + lastName);


// OPERATORI DE SARCINI(ASSIGNMENT OPERATORS)
let x = 10 + 5; // In cazul acesta, = este operatorul de sarcina  //  10+5 = 15
x += 10; // aici operatorul de sarcina este +=  //////  += inseamna x= x + 10 si este egal cu 25
x *= 4; // x= x * 4 = 100
x++; // x= x+1
x--;
x--;
console.log(x);


// OPERATORI DE COMPARATIE ( COMPARISON OPERATORS) //  >  <  >=  <=
console.log(ageJonas > ageSarah); // semnul > este un comparison operator, compara 2 elemente si genereaza un bololean cu TRUE sau FALSE
console.log(ageSarah >= 18);
const isFullAge = ageSarah >= 18;
console.log(now - 1991 < now - 2018);
*/

//OPERATOR PRECEDENCE ( precedenti)- MDN operator precedence pentru o mai detaliata explicatie
/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 < now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);
const averageAge = (ageJonas + ageSarah) / 2; // average age calculated
console.log(ageJonas, ageSarah, averageAge);
*/

// STRINGS AND TEMPLATE LITERALS
/*
const firstName = "Cristian";
const job = "student";
const birthYear = 1999;
const year = 2023;

const cristian =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(cristian);

const cristianNew = `I'm ${firstName}, a ${
  year - birthYear
} years old ${job}! `;
console.log(cristianNew);
*/

// TAKING DECISIONS: IF/ELSE STATEMENT
/*const age = 15;

if (age >= 18) {
  console.log("Sarah can start driving licence!");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1999;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/

// TYPE CONVERSION AND COERCION
//Type conversion:

// string converted to a number
/*
const inputYear = "1991";
console.log(Number(inputYear)); //aici am transformat 1991 din string in number
console.log(Number(inputYear) + 18);

// number converted to a string
console.log(Number("Cristian")); // rezulta NaN (Not a Number)
console.log(String(23), 23); // aici am transformat 23 din number in string

//Type Coercion (happens whenever an operator is dealing with two values that have diff types)
console.log("I am " + 23 + " years old"); //aici de ex avem o operatiune unde js transforma singur numarul 23 into a string, pentru ca este adunat between 2 strings.

//Alt exemplu:
console.log("23" - "10" - 3); // js automatically converted the strings into numbers // Doar la scadere se intampla asta, la adunare js converteste numarul 3 into a string, si iese 23103

//Alt exemplu:
console.log("23" * "2"); // aici ambele sunt transformate in numbers, pt ca doar asa * works
console.log("23" / "2"); // la fel si aici

// boolean // 5 falsy values: 0, '' , undefined, null, NaN

console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean("Cristian")); // true
console.log(Boolean({})); // true
console.log(Boolean("")); // false

//aici de ex se va arata mesajul de la else, pt ca JS a convertit money = false, daca are valoarea 0 , si atunci mesajul va fi "You should get a job!" desi logic ar fi fost sa fie cel de la if statement, dar boolean conversion il percepe ca false
const money = 0; // daca dam alta valoare lui 0, atunci se va executa mesajul de la if
if (money) {
  console.log("Don't spend it all ;) ");
} else {
  console.log("You should get a job!");
}

// alt ex:
let height; // since height is undefined, boolean will consider it false, so the else statement will be showed
if (height) {
  console.log("Yay! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}
*/

// EQUALITY OPERATORS:    ==   VS.  ===
/*
const age = 18;
if (age === 18) console.log("You just became an adult"); // === is a strict equal sign and does not get coercion like double equal does ==

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  // 23===23
  console.log("Cool! 23 is nice");
} else if (favourite === 7) {
  console.log("Number 7 is also cool!");
} else if (favourite === 9) {
  console.log("Number 9 is also cool!");
} else {
  console.log("Great!");
}

// we talked about equality operator, but there's also a 'different' operator:   !=  sau  !==
if (favourite !== 23) console.log("Why not 23?");
*/

// BASIC BOOLEAN LOGIC: THE AND, OR & NOT OPERATORS
// LOGICAL OPERATORS
/*
const hasDriversLicence = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicence && hasGoodVision);
console.log(hasDriversLicence || hasGoodVision);
console.log(!hasDriversLicence);

// if (hasDriversLicence && hasGoodVision) {
//   console.log("Sarah is able to drive");
// } else {
//   console.log("Someone else should drive...");
// }

const isTired = false; // C
console.log(hasDriversLicence && hasGoodVision && isTired);
if (hasDriversLicence && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive");
} else {
  console.log("Someone else should drive...");
}
*/
// THE SWITCH STATEMENT
/*
const day = "thursday";

switch (day) {
  case "monday": // day === 'monday'
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend!");
    break;
  default:
    console.log("Not a valid day!");
}

// mai jos e varianta cu if/else statement
if (day === "monday") {
  console.log("Plan course structure");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend!");
} else {
  console.log("Not a valid day!");
}
*/
