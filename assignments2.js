////////////Lecture Functions

// function describeCountry(country, population, capitalCity) {
//   return `${country} has ${population} million people and its capital city is ${capitalCity}`;
// }

// const describeRomania = describeCountry("Romania", 20, "Bucuresti");
// const describeAnglia = describeCountry("Anglia", 50, "Londra");
// const describeItalia = describeCountry("Italia", 45, "Roma");

// console.log(describeRomania, describeAnglia, describeItalia);

////////////Lecture Function Declarations vs Expressions
//function declaration
/*
function percentageofWorld1(population) {
  return (population / 7900) * 100;
}

const percentageRomania = percentageofWorld1(20);
const percentageGermania = percentageofWorld1(83);
const percentageItalia = percentageofWorld1(57);

console.log(percentageRomania, percentageGermania, percentageItalia);

//function expression

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

const percRomania = percentageOfWorld2(20);
const percGermania = percentageOfWorld2(83);
const percItalia = percentageOfWorld2(57);

console.log(percRomania, percGermania, percItalia);
*/

///////////Lecture Arrow Functions
/*
const percentageofWorld3 = (population) => (population / 7900) * 100;

const percentRomania = percentageofWorld3(20);
const percentGermania = percentageofWorld3(83);
const percentItalia = percentageofWorld3(77);

console.log(percentRomania, percentGermania, percentItalia);
*/

///////////Lecture Functions Calling Other Functions
/*
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const describePopulation = function (country, population) {
  const percentage = percentageOfWorld1(population);
  const description = `${country} has ${population} million
  people, which is about ${percentage}% of the world.`;
  console.log(description);
};
describePopulation("Portugal", 10);
describePopulation("China", 1441);
describePopulation("USA", 332);
*/
