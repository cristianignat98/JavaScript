/////////////////ASSIGNMENTS-JS-FUNDAMENTALS-PART-1/////////////////////////
///////////////////Lecture 1- Values and Variables
//let country = "Romania";
//let continent = "Europe";
let population = 20;
//console.log(population);

//
//
///////////////////Lecture 2- Data Types
//let isIsland = false;
let language;

//
//
//////////////////Lecture 3-let, const and var
language = "Romanian";
const country = "Romania";
const continent = "Europe";
const isIsland = true;
//console.log(country);
//console.log(continent);
//console.log(typeof language);
//console.log(typeof population);
//console.log(typeof country);
//console.log(typeof isIsland);
// isIsland = true; - la const variabila nu se poate modifica ulterior, ramane cea initiala valabila,altfel da eroare de tip "Uncaught TypeError: Assignment to constant variable"

//
//
//////////////////Lecture 4- operatori basic
/*console.log(population / 2);
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33);
const description =
country +
  " is in " +
  continent +
  " and its " +
  population +
  " million people speaks " +
  language;
  console.log(description);
  */

//
//
///////////////////Lecture 5- strings and template literals
/*const descriptionNew = `${country} is in ${continent} and its ${population} milion people speaks ${language}`;
 console.log(descriptionNew);
 */

//
//
///////////////////Lecture 6- Taking decisions: if/else statements
/*const averagePopulation = 33 - population;
if (population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is  ${33 - population} milion below average`
  );
}
*/

//
//
///////////////////Lecture 7- Type Conversion and Coercion
/*
4;
617;
23;
false;
117;
1149
*/

//
//
//////////////////Lecture 8- Equality Operators:   ==   vs.  ===
/*
const numNeighbours = Number(
  prompt(`How many neighbour countries does your country have?`)
  );
  if (numNeighbours === 1) {
    console.log("Only one border!");
  } else if (numNeighbours > 1) {
    console.log("More than 1 border");
  } else {
    console.log("No borders");
  }
  */

//
//
//////////////////Lecture 9- Logical Operators
/*
if (language === "english" && population < 50 && !isIsland) {
  console.log(`You should live in ${country}! :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}
*/
