////////////Lecture Functions
/*
// function describeCountry(country, population, capitalCity) {
//   return `${country} has ${population} million people and its capital city is ${capitalCity}`;
// }

// const describeRomania = describeCountry("Romania", 20, "Bucuresti");
// const describeAnglia = describeCountry("Anglia", 50, "Londra");
// const describeItalia = describeCountry("Italia", 45, "Roma");

// console.log(describeRomania, describeAnglia, describeItalia);
*/
////////////Lecture Function Declarations vs Expressions
/*
//function declaration
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

////////////Introduction to arrays
/*
const populations = [20, 56, 88, 107];
console.log(populations.length === 4);

function percentageofWorld1(population) {
  return (population / 7900) * 100;
}

const percentages = [
  percentageofWorld1(populations[0]),
  percentageofWorld1(populations[1]),
  percentageofWorld1(populations[2]),
  percentageofWorld1(populations[3]),
];
console.log(percentages);
*/

//////////// Basic Array Operations (Methods)
/*
const neighbours = ["Bulgaria", "Moldova", "Ucraina", "Serbia", "Ungaria"];
console.log(neighbours);

const newNeighbour = neighbours.push("Utopia");
console.log(neighbours);
console.log(newNeighbour);

const popped = neighbours.pop();
console.log(neighbours);
console.log(popped);

if (!neighbours.includes("Germany")) {
  console.log("Probably not an Easten European country");
}

neighbours[neighbours.indexOf("Moldova")] = "Republica Moldova";
console.log(neighbours);
*/

//////////// Challange 2
/*
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}; /// HERE WE USED TERNARY OPERATOR

// U CAN DO WITH ARROW ALSO:
// const calcTip = (bill) => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals);
*/

///////////// Iteration: The for Loop
/*
for (let i = 1; i < 51; i++) {
  console.log(`Voter ${[i]} is currently voting`);
}
*/

///////////// Looping Arrays, Breaking and Continuing
/*
const populations = [20, 56, 88, 107];
function percentageofWorld1(population) {
  return (population / 7900) * 100;
}

const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
  const perc = percentageofWorld1(populations[i]);
  percentages2.push(perc);
}
console.log(percentages2);
*/

///////////// Looping Backwards and Loops in Loops
/*
const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let y = 0; y < listOfNeighbours[i].length; y++) {
    console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
  }
}
*/

///////////// The while Loop
/*
const populations = [20, 56, 88, 107];
function percentageofWorld1(population) {
  return (population / 7900) * 100;
}

const percentages3 = [];
let i = 0;
while (i < populations.length) {
  const perc = percentageofWorld1(populations[i]);
  percentages3.push(perc);
  i++;
}
console.log(percentages3);
*/
