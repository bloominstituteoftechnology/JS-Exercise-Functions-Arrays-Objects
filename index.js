// ⭐️ Example Challenge start ⭐️

/**
 * ### Challenge `exampleFunction`
 * 
 * @instructions
 * This function should be able to take two numbers as arguments
 * and return the result of adding them together.
 * 
 * For example, if we invoke `exampleFunction` passing 5 and 3,
 * the returned value should be 8.
*/
function exampleFunction(num1, num2) {
  return num1 + num2;
}

// ⭐️ Example Challenge end ⭐️


// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// ===============================================================================
/**
 * ### Challenge `makePersonObject`
 * 
 * @instructions
 * This function should take an id, a name and an email as arguments,
 * and return an object with `id`, `name` and `email` properties.
 * 
 * For example, if we invoke `makePersonObject`
 * passing 5, 'Leia' and 'leia@leia.com' as arguments,
 * the returned value should look like:
 * {
 *   id: 5,
 *   name: "Leia",
 *   email: "leia@leia.com",
 * }
*/
//          NOTE --------------ANSWER
function makePersonObject(/* code here */) {

  let personObject = {
id: 5,
name: "Leia",
email: "leia@leia.com"

  }
  /* code here */
  return personObject;
}
makePersonObject()


// =========================================================================
/**
 * ### Challenge `getName`
 * 
 * @instructions
 * This function takes as its only argument
 * an object containing a `name` property,
 * and return a string that reads `Hello, my name is {name}`,
 * where `{name}` is the name stored in the object.
 * 
 * For example, if we invoke `getName`
 * passing { id: 1, name: 'Leia', email: 'leia@leia.com` } as the argument,
 * the returned value should look like `Hello, my name is Leia`.
*/
function getName(someName){
	let nameX = {
		name: someName
	}
		return nameX
  // }
  //          NOTE ============= ANSWER
  function getName(someName){
    let nameX = {
      id: 1,
      name: "Leia",
      email: "leia@leia.com"
    }
      return `Hello my name is ${nameX.name}`
    }
  getName();
  
  "Hello my name is Leia"
// ====================================================================================

/**
 * ### Challenge `makeSmartPerson`
 * 
 * @instructions
 * This function takes a single `name` argument and returns an object.
 * The returned object has the following characteristics:
 *     It has a `name` property that contains the argument passed in.
 *     It has a `sum` method that takes two numbers as arguments
 *         and returns the result of adding them together.
 *     It has a `speak` method that takes no arguments
 *         and returns a string like `Hello, my name is {name}`.
 *         where `{name}` is the name passed into `makeSmartPerson`.
*/
function makeSmartPerson(/* code here */) {
  /* code here */
}
//          NOTE --------------ANSWER
let makeSmartPerson= {
  name: "Bob",
  age: "old",
  speakAdd: function(num1, num2) {
    console.log(`Hello, my name is ${makeSmartPerson.name}`);
    return num1 + num2   
  }
  }
  console.log(makeSmartPerson.speakAdd(5,5));
// =========================================================================

/**
 * ### Challenge `getCarInfoByIndex`
 * 
 * @instructions
 * getCarInfoByIndex takes two arguments:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 *     (2) a number which is the desired index in the array.
 * getCarInfoByIndex returns a string in the format `This is a {car_make} {car_model}
 * 
 * For example, if getCarInfoByIndex is invoked with the inventory and the number 0,
 * it will return `This is a Lincoln Navigator`.
*/
//          NOTE --------------ANSWER
function getCarInfoByIndex(/* code here */) {
  console.log(`This is an ${exports[3].car_make} ${exports[3].car_model}`)
}
// =========================================================================

/**
 * ### Challenge `getLastCarInfo`
 * 
 * @instructions
 * getLastCarInfo takes a single argument:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 * getLastCarInfo returns a string in the format `This is a {car_make} {car_model}
 * 
 * For example, if getLastCarInfo is invoked passing the inventory inside /data/inventory.js,
 * it will return `This is a Lincoln Town Car`.
*/
function getLastCarInfo(/* code here */) {
  /* code here */
//          NOTE --------------ANSWER
  const lastCar= exports[exports.length-1]
console.log(lastCar);
}
// =========================================================================
/**
 * ### Challenge `getCarInfoById`
 * 
 * @instructions
 * getCarInfoById takes two arguments:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 *     (2) a number which is the desired car id (see how each car has its own unique id).
 * getCarInfoById returns a string in the format `This is a {car_make} {car_model}
 * 
 * For example, if getCarInfoById is invoked with the inventory and the number 1,
 * it will return `This is a Lincoln Navigator`.
*/
function getCarInfoById(/* code here */) {
  /* code here */
}
//          NOTE --------------ANSWER
function getCarInfoById(/* code here */) {
  /* code here */
	return `This is a ${exports[5].car_make} ${exports[5].car_model}.`
}
getCarInfoById()
"This is a Honda Accord."
// =========================================================================

/**
 * ### Challenge `sortCarInventory`
 * 
 * @instructions
 * sortCarInventory takes a single argument:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 * sortCarInventory returns an inventory that is sorted by car_model, ascending [A-Z].
*/
function sortCarInventory(/* code here */) {
  /* code here */
}
//          NOTE ----------------ANSWER
exports.sort(function(a, b) {
  if (a.car_model.toLowerCase() < b.car_model.toLowerCase()
  ) return -1;
	if (a.car_model.toLowerCase() > b.car_model.toLowerCase()
  ) return 1;
		return 0;
});

// =========================================================================

/**
 * ### Challenge `getModelYears`
 * 
 * @instructions
 * We need the years from every car in the inventory!
 * getModelYears takes a single argument:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 * getModelYears returns an array containing all the 'car_year's in the inventory.
*/
function getModelYears(/* code here */) {
  /* code here */
}
//          NOTE ----------------ANSWER

// To SORT by model_year      To SORT by model_year      To SORT by model_year 
exports.sort(function (a, b) {
	return a.car_year - b.car_year
 });

// =========================================================================

/**
 * ### Challenge `getOlderCars`
 * 
 * @instructions
 * We need a utility to find older cars!
 * getOlderCars takes two arguments:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 *     (2) a number which is the desired max year.
 * getOlderCars returns an array containing all the cars
 * with a `car_year` which is at most the given desired max year,
 * in the same order as they appear in the original inventory.
*/
function getOlderCars(/* code here */) {
  /* code here */
}
//          NOTE ----------------ANSWER
const olderCars = [];
for(let i = 0; i < exports.length; i++) {
  if (exports[i].car_year < 1990) {
    olderCars.push(exports[i]);
  }
}
console.log(olderCars);
// =========================================================================

/**
 * ### Challenge `getGermanCars`
 * 
 * @instructions
 * We need a utility to find German cars!
 * getGermanCars takes a single argument:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 * getGermanCars returns an array containing all the cars
 * made by either `Audi` or `Mercedes-Benz` or `Volkswagen` or `BMW`,
 * in the same order as they appear in the original inventory.
*/
function getGermanCars(/* code here */) {
  /* code here */
}
//          NOTE ----------------ANSWER
const germanCars= [];
for(let i= 0; i < exports.length; i++) {
	if (exports[i].car_make === "BMW"||exports[i].car_make=== "Volkswagen"||exports[i].car_make==="Mercedes-Benz"||exports[i].car_make==="Audi") {
		germanCars.push(exports[i]);
    }
}
console.log(germanCars);
// =========================================================================

/**
 * ### Challenge refactor to arrow functions
 * 
 * @instructions
 * Create arrow function versions of the following commented-out functions:
 * 
 * const sum = function (a, b) {
 *   return a + b
 * }
 * //          NOTE ----------------ANSWER
 * const sum= (a, b) =>{ return a+b}
 * 
 * 
 * const addFive = function(num) {
*    return num + 5
 * }
 * //          NOTE ----------------ANSWER
 *const addFive= (num) => {return num +5}
 * 
 * 
 * const argTimesTwo = function (num) {
 *   return num * 2
 * }
 * //          NOTE ----------------ANSWER
 * const argTimesTwo= (num) => { return num * 2}
 * 
 * 
*/
const sum = null; // code here!
const addFive = null; // code here!
const argTimesTwo = null; // code here!
// =========================================================================

/**
 * ### Challenge `carMaker`
 * THIS ONE IS A STRETCH GOAL. ATTEMPT IT ONLY AFTER
 * COMPLETING ALL NON-STRETCH CHALLENGES IN THE REPOSITORY!
 * 
 * @instructions
 * This function takes a single odometer argument (a number) and returns an object.
 * The returned object has the following characteristics:
 *     it has an `odometer` property that contains the argument passed in.
 *     it has a `drive` method that takes a distance as its argument, and
 *         (1) causes the odometer in the object to be increased by the distance,
 *         (2) returns the updated value of the `odometer`.
*/
function carMaker(/* code here */) {
  /* code here */
}
// =========================================================================

/// ////// END OF CHALLENGE /////////
/// ////// END OF CHALLENGE /////////
/// ////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  // IGNORE: Test/Env Detected
  // For Node/Non-browser test env
  module.exports = module.exports || {}
  if (exampleFunction) { module.exports.exampleFunction = exampleFunction }
  if (makePersonObject) { module.exports.makePersonObject = makePersonObject }
  if (getName) { module.exports.getName = getName }
  if (makeSmartPerson) { module.exports.makeSmartPerson = makeSmartPerson }
  if (carMaker) { module.exports.carMaker = carMaker }
  if (getCarInfoByIndex) { module.exports.getCarInfoByIndex = getCarInfoByIndex }
  if (getLastCarInfo) { module.exports.getLastCarInfo = getLastCarInfo }
  if (getCarInfoById) { module.exports.getCarInfoById = getCarInfoById }
  if (sortCarInventory) { module.exports.sortCarInventory = sortCarInventory }
  if (getModelYears) { module.exports.getModelYears = getModelYears }
  if (getOlderCars) { module.exports.getOlderCars = getOlderCars }
  if (getGermanCars) { module.exports.getGermanCars = getGermanCars }
  if (sum) { module.exports.sum = sum }
  if (addFive) { module.exports.addFive = addFive }
  if (argTimesTwo) { module.exports.argTimesTwo = argTimesTwo }
}



const foo= 'bar';
function returnFoo() {
	return foo
}
returnFoo();
//displays  "bar"

// =================================================
// =================================================
// =================================================
// =================================================
// =================================================
// =================================================



