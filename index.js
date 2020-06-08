// ⭐️ Example Challenge start ⭐️

/**
 * ### Challenge `addNumbers`
 * 
 * @instructions
 * This function should be able to take two numbers as arguments
 * and return the result of adding them together.
 * 
 * For example, if we invoke `addNumbers` passing 5 and 3,
 * the returned value should be 8.
 *
 * NOTE: This example has been completed for you.
*/
function addNumbers(num1, num2) {
  return num1 + num2;
}
addNumbers(7,5);
console.log(addNumbers(7,5));




/**
 * ### Challenge `sayGoodbye`
 * 
 * @instructions
 * This function should take an a name as an argument,
 * and return a string that says 'Goodbye, {name}. Have a great day.'
 * 
 * For example, if we invoke `sayGoodbye`
 * passing 'Andy' as the argument,
 * the returned value should look like: 'Goodbye, Andy. Have a great day.'
 * 
*/
function sayGoodbye(name) {
  console.log(`Goodbye, ${name}. Have a great day.`); /* code here */
}

sayGoodbye('Andy');

/**
 * ### Challenge `temperatureCtoF`
 * 
 * @instructions
 * This function should take an a temperature in celsius as an argument,
 * and return the temperature in fahrenheit, rounded to the nearest whole number. 
 * 
 * For example, if we invoke `temperatureCtoF`
 * passing 24 as the argument,
 * the returned value should be: 75
 * 
 * Hint 1: The formula for converting celsius to fahrenheit is t*9/5 + 32 where t is the temperature in celsius.
 * Hint 2: There is a very easy way to round numbers in JS. Do a google search to find out how. 
*/
function temperatureCtoF(celsius) {
  let farenheit = celsius*9/5+32;
  return Math.round(farenheit) ;
}
temperatureCtoF(24);
console.log(temperatureCtoF(24));
/**
 * ### Challenge `temperatureInF`
 * 
 * @instructions
 * This function should take an a temperature and a unit (either 'F' or 'C') as arguments,
 * and return the temperature in fahrenheit, rounded to the nearest whole number. 
 * 
 * For example, if we invoke `temperatureInF`
 * passing 88, 'F' as the arguments,
 * the returned value should be: '88F'
 * 
 * If we invoke `temperatureInF`
 * passing 24, 'C' as the arguments,
 * the returned value should be: '75F'
 * 
 * Hint: You can call your `temperatureCtoF` function from inside `temperatureInF`.
*/
function temperatureInF(temp,unit) {
  if (unit === `C`){
    return (Math.round(temp*(9/5)+32))+`F`
  }
  else{
    return (`${temp}${unit}`);
  }
}

temperatureInF(24,`C`);

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
function makePersonObject(id,name,email) {
  console.log(`id: ${id},`);
  console.log(`name: ${name},`);
  console.log(`email: ${email},`);
}
makePersonObject(`5`,`Leia`,`leia@leia.com`);

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
function getName(/* code here */) {
  const namObj={
    id:57197,
    name: `Shenandoah`,
    email: `Shenandoahjeroline@email.com`,
  };
  return(`Hello, my name is `+namObj.name)
}

console.log(getName());

/**
 * ### Challenge `appleIndex`
 * 
 *@instructions
  This function takes as its only argument an array 
 * containing strings,
 * and returns the index in the array of the string 'apple'.
 * 
 * You may assume the string 'apple' will appear exactly 
 * once in the array.
 * 
 * For example, if we invoke `appleIndex`
 * passing in  'orange', 'grape', 'apple', 'banana', 'mango' ] as the argument,
 * the returned value should be: 2.[
*/


function appleIndex(cb) {
  let fruit =[`orange`, `grape`,`apple`, `banana`, `mango`]
  return fruit.indexOf (cb)
}
appleIndex(`apple`);
console.log(appleIndex(`apple`));
/*
 * ### Challenge `isItAnApple`
 * 
 * @instructions
 * This function takes as its only argument an array 
 * containing strings,
 * and returns an array of equal length containing the `true`
 * if the corresponding entry in the original array is 'apple' 
 * and `false` if it is anything else.
 * 
 * 
 * For example, if we invoke `isItAnApple`
 * passing in [ 'orange', 'apple', 'banana', 'apples', 'apple', 'mango' ] as the argument,
 * the returned value should be: [ false, true, false, false, true, false ].
*/
function isItAnApple(fruits) {
  const fruit2 = [];
  fruits.forEach((fruit) => {
    if (fruit === "apple") {
      fruit2.push(true);
    } else {
      fruit2.push(false);
    }
  });
  return fruit2;
}

isItAnApple(["orange", "apple", "banana", "apples", "apple", "mango"]);
console.log(isItAnApple(["orange", "apple", "banana", "apples", "apple", "mango"]));




// ⭐️ Example Test Data ⭐️

var inventory = [
  { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
  { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
  { id: 3, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
  { id: 4, car_make: "Honda", car_model: "Accord", car_year: 1983 },
  { id: 5, car_make: "Mitsubishi", car_model: "Galant", car_year: 1990 },
  { id: 6, car_make: "Honda", car_model: "Accord", car_year: 1995 },
  { id: 7, car_make: "Smart", car_model: "Fortwo", car_year: 2009 },
  { id: 8, car_make: "Audi", car_model: "4000CS Quattro", car_year: 1987 },
  { id: 9, car_make: "Ford", car_model: "Windstar", car_year: 1996 },
  { id: 10, car_make: "Mercedes-Benz", car_model: "E-Class", car_year: 2000 },
  { id: 11, car_make: "Infiniti", car_model: "G35", car_year: 2004 },
  { id: 12, car_make: "Lotus", car_model: "Esprit", car_year: 2004 },
  { id: 13, car_make: "Chevrolet", car_model: "Cavalier", car_year: 1997 },
  { id: 14, car_make: "Dodge", car_model: "Ram Van 1500", car_year: 1999 }
]

/**
  * ### Example Array Challenge:
  * 
  * @instructions
  * get3rdCar() should return the string `The is a Land Rover Defender Ice Edition`
  * 
  * NOTE: This example has been completed for you.
**/


// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇


/*
 * ### Challenge `getCarInfoByIndex`
 * 
 * @instructions
 * getCarInfoByIndex takes two arguments:
 *     (1) an array which is an inventory of cars like the preview above (see ⭐️ Preview Test Data ⭐️)
 *     (2) a number which is the desired index in the array.
 * getCarInfoByIndex returns a string in the format `This is a {car_make} {car_model}`
 * 
 * For example, if getCarInfoByIndex is invoked with the inventory and the number 0,
 * it will return `This is a Lincoln Navigator`.
*/


function getCarInfoByIndex(inventory, index) {
  const whatCar = inventory[index];
  console.log(`This is a ${whatCar.car_make} ${whatCar.car_model}`);
  return(`This is a ${whatCar.car_make}${whatCar.car_model}`);
}
getCarInfoByIndex(inventory, 3);




/*
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

function getLastCarInfo(inventory) {
   const lastCar = inventory[inventory.length-1];
  console.log(`This is a ${lastCar.car_make} ${lastCar.car_model}`);
  return lastCar;
}
getLastCarInfo(inventory);

/**
 * ### Challenge `getModelYears`
 * 
 * @instructions
 * We need the years from every car in the inventory!
 * getModelYears takes a single argument:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 * getModelYears returns an array containing all the 'car_year's in the inventory.
*/
function getModelYears(inventory) {
  const carYears = [];
  for (i = 0; i < inventory.length; i++) {
  carYears.push(inventory[i].car_year);
  }
  
  console.log(carYears);
  }

  getModelYears(inventory);

/**
 * ### Challenge `getCarInfoById`
 *  * * THIS ONE IS A STRETCH GOAL. ATTEMPT IT ONLY AFTER
 * COMPLETING ALL NON-STRETCH CHALLENGES IN THE REPOSITORY!
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

