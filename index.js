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

// ⭐️ Example Challenge end ⭐️


// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇


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
  /* code here */
  console.log(`Goodbye, ${name}. Have a great day.`)
}

sayGoodbye("Cameron")

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
  /* code here */

  let convert = celsius * 9 / 5 + 32;
  return Math.round(convert);

}

console.log(temperatureCtoF(24))


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
function temperatureInF(temperature, unit) {

  if (unit === "C") {
    function temperatureCtoF(C) {
      const convert = C * 9 / 5 + 32;
      return Math.round(convert);
    }
    console.log(temperatureCtoF(temperature, "C") + "C");
  } else if (unit === "F") {
    return temperature + "F"

  }
}

console.log(temperatureInF(88, "C"));



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
function makePersonObject(id, name, email) {
  /* code here */
  const person = {
    id,
    name,
    email
  }
  return person;
}
console.log(makePersonObject(5, "Cameron", "cameron@email.com"));


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
function getName(name) {
  name = {
    id: 1,
    name: "Cameron",
    email: "cameron@email.com"
  };
  return `Hello, my name is ${name.name}`;
}

console.log(getName())


/**
 * ### Challenge `appleIndex`
 * 
 * @instructions
 * This function takes as its only argument an array 
 * containing strings,
 * and returns the index in the array of the string 'apple'.
 * 
 * You may assume the string 'apple' will appear exactly 
 * once in the array.
 * 
 * For example, if we invoke `appleIndex`
 * passing in [ 'orange', 'grape', 'apple', 'banana', 'mango' ] as the argument,
 * the returned value should be: 2.
 */
function appleIndex(arr) {
  /* code here */
  const fruits = ['orange', 'grape', 'apple', 'banana', 'mango'];
  return fruits.indexOf(arr)
}

console.log(appleIndex('apple'));

/**
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
//
const fruits = ['orange', 'grape', 'apple', 'banana', 'mango'];

function isItAnApple(arr) {
  /* code here */
  const newFruit = []; //New empty array created
  for (let i = 0; i < arr.length; i++) { //iterate though fruits array 
    if (arr[i] === 'apple') { //condition for index of fruits array

      newFruit.push(true); //Push boolean true into newFruit array
    } else {
      newFruit.push(false); // else Push boolean false into newFruit array
    }
  }

  return newFruit; // return result 
}
console.log(isItAnApple(fruits));







// ⭐️ Example Test Data ⭐️

var inventory = [{
    id: 1,
    car_make: "Lincoln",
    car_model: "Navigator",
    car_year: 2009
  },
  {
    id: 2,
    car_make: "Mazda",
    car_model: "Miata MX-5",
    car_year: 2001
  },
  {
    id: 3,
    car_make: "Land Rover",
    car_model: "Defender Ice Edition",
    car_year: 2010
  },
  {
    id: 4,
    car_make: "Honda",
    car_model: "Accord",
    car_year: 1983
  },
  {
    id: 5,
    car_make: "Mitsubishi",
    car_model: "Galant",
    car_year: 1990
  },
  {
    id: 6,
    car_make: "Honda",
    car_model: "Accord",
    car_year: 1995
  },
  {
    id: 7,
    car_make: "Smart",
    car_model: "Fortwo",
    car_year: 2009
  },
  {
    id: 8,
    car_make: "Audi",
    car_model: "4000CS Quattro",
    car_year: 1987
  },
  {
    id: 9,
    car_make: "Ford",
    car_model: "Windstar",
    car_year: 1996
  },
  {
    id: 10,
    car_make: "Mercedes-Benz",
    car_model: "E-Class",
    car_year: 2000
  },
  {
    id: 11,
    car_make: "Infiniti",
    car_model: "G35",
    car_year: 2004
  },
  {
    id: 12,
    car_make: "Lotus",
    car_model: "Esprit",
    car_year: 2004
  },
  {
    id: 13,
    car_make: "Chevrolet",
    car_model: "Cavalier",
    car_year: 1997
  },
  {
    id: 14,
    car_make: "Dodge",
    car_model: "Ram Van 1500",
    car_year: 1999
  }
]

/**
 * ### Example Array Challenge:
 * 
 * @instructions
 * get3rdCar() should return the string `The is a Land Rover Defender Ice Edition`
 * 
 *
 * NOTE: This example has been completed for you.
 **/
function get3rdCar(inv) {
  const the3rd = inventory[2];
  return `The is a ${the3rd.car_make} ${the3rd.car_model}`
}

console.log(get3rdCar(2));
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇


/**
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



function getCarInfoByIndex(inv, index) {
  /* code here */

  // 1st paramter must be inventory
  // 2nd paramter must be arr=this.car_make

  const cars = inventory[inv]
  const cars2 = inventory[index]
  return `The is a ${cars.car_make} ${cars2.car_model}`

}

console.log(getCarInfoByIndex(0, 0));




/*----------------------------------------------------------------*/
const data = [{
    id: 1,
    car_make: "Lincoln",
    car_model: "Navigator",
    car_year: 2009
  },
  {
    id: 2,
    car_make: "Mazda",
    car_model: "Miata MX-5",
    car_year: 2001
  },
  {
    id: 3,
    car_make: "Land Rover",
    car_model: "Defender Ice Edition",
    car_year: 2010
  },
  {
    id: 4,
    car_make: "Honda",
    car_model: "Accord",
    car_year: 1983
  },
  {
    id: 5,
    car_make: "Mitsubishi",
    car_model: "Galant",
    car_year: 1990
  },
  {
    id: 6,
    car_make: "Honda",
    car_model: "Accord",
    car_year: 1995
  },
  {
    id: 7,
    car_make: "Smart",
    car_model: "Fortwo",
    car_year: 2009
  },
  {
    id: 8,
    car_make: "Audi",
    car_model: "4000CS Quattro",
    car_year: 1987
  },
  {
    id: 9,
    car_make: "Ford",
    car_model: "Windstar",
    car_year: 1996
  },
  {
    id: 10,
    car_make: "Mercedes-Benz",
    car_model: "E-Class",
    car_year: 2000
  },
  {
    id: 11,
    car_make: "Infiniti",
    car_model: "G35",
    car_year: 2004
  },
  {
    id: 12,
    car_make: "Lotus",
    car_model: "Esprit",
    car_year: 2004
  },
  {
    id: 13,
    car_make: "Chevrolet",
    car_model: "Cavalier",
    car_year: 1997
  },
  {
    id: 14,
    car_make: "Dodge",
    car_model: "Ram Van 1500",
    car_year: 1999
  },
  {
    id: 15,
    car_make: "Dodge",
    car_model: "Intrepid",
    car_year: 2000
  },
  {
    id: 16,
    car_make: "Mitsubishi",
    car_model: "Montero Sport",
    car_year: 2001
  },
  {
    id: 17,
    car_make: "Buick",
    car_model: "Skylark",
    car_year: 1987
  },
  {
    id: 18,
    car_make: "Geo",
    car_model: "Prizm",
    car_year: 1995
  },
  {
    id: 19,
    car_make: "Oldsmobile",
    car_model: "Bravada",
    car_year: 1994
  },
  {
    id: 20,
    car_make: "Mazda",
    car_model: "Familia",
    car_year: 1985
  },
  {
    id: 21,
    car_make: "Chevrolet",
    car_model: "Express 1500",
    car_year: 2003
  },
  {
    id: 22,
    car_make: "Jeep",
    car_model: "Wrangler",
    car_year: 1997
  },
  {
    id: 23,
    car_make: "Eagle",
    car_model: "Talon",
    car_year: 1992
  },
  {
    id: 24,
    car_make: "Toyota",
    car_model: "MR2",
    car_year: 2003
  },
  {
    id: 25,
    car_make: "BMW",
    car_model: "525",
    car_year: 2005
  },
  {
    id: 26,
    car_make: "Cadillac",
    car_model: "Escalade",
    car_year: 2005
  },
  {
    id: 27,
    car_make: "Infiniti",
    car_model: "Q",
    car_year: 2000
  },
  {
    id: 28,
    car_make: "Suzuki",
    car_model: "Aerio",
    car_year: 2005
  },
  {
    id: 29,
    car_make: "Mercury",
    car_model: "Topaz",
    car_year: 1993
  },
  {
    id: 30,
    car_make: "BMW",
    car_model: "6 Series",
    car_year: 2010
  },
  {
    id: 31,
    car_make: "Pontiac",
    car_model: "GTO",
    car_year: 1964
  },
  {
    id: 32,
    car_make: "Dodge",
    car_model: "Ram Van 3500",
    car_year: 1999
  },
  {
    id: 33,
    car_make: "Jeep",
    car_model: "Wrangler",
    car_year: 2011
  },
  {
    id: 34,
    car_make: "Ford",
    car_model: "Escort",
    car_year: 1991
  },
  {
    id: 35,
    car_make: "Chrysler",
    car_model: "300M",
    car_year: 2000
  },
  {
    id: 36,
    car_make: "Volvo",
    car_model: "XC70",
    car_year: 2003
  },
  {
    id: 37,
    car_make: "Oldsmobile",
    car_model: "LSS",
    car_year: 1997
  },
  {
    id: 38,
    car_make: "Toyota",
    car_model: "Camry",
    car_year: 1992
  },
  {
    id: 39,
    car_make: "Ford",
    car_model: "Econoline E250",
    car_year: 1998
  },
  {
    id: 40,
    car_make: "Lotus",
    car_model: "Evora",
    car_year: 2012
  },
  {
    id: 41,
    car_make: "Ford",
    car_model: "Mustang",
    car_year: 1965
  },
  {
    id: 42,
    car_make: "GMC",
    car_model: "Yukon",
    car_year: 1996
  },
  {
    id: 43,
    car_make: "Mercedes-Benz",
    car_model: "R-Class",
    car_year: 2009
  },
  {
    id: 44,
    car_make: "Audi",
    car_model: "Q7",
    car_year: 2012
  },
  {
    id: 45,
    car_make: "Audi",
    car_model: "TT",
    car_year: 2008
  },
  {
    id: 46,
    car_make: "Oldsmobile",
    car_model: "Ciera",
    car_year: 1995
  },
  {
    id: 47,
    car_make: "Volkswagen",
    car_model: "Jetta",
    car_year: 2007
  },
  {
    id: 48,
    car_make: "Dodge",
    car_model: "Magnum",
    car_year: 2008
  },
  {
    id: 49,
    car_make: "Chrysler",
    car_model: "Sebring",
    car_year: 1996
  },
  {
    id: 50,
    car_make: "Lincoln",
    car_model: "Town Car",
    car_year: 1999
  }
]
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
function getLastCarInfo(inv) {
  /* code here */


  console.log(`This is a ${data[inv.length-1].car_make},${data[inv.length-1].car_model}`)

}
getLastCarInfo(data)

/**
 * ### Challenge `getModelYears`
 * 
 * @instructions
 * We need the years from every car in the inventory!
 * getModelYears takes a single argument:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 * getModelYears returns an array containing all the 'car_year's in the inventory.
 */


function getModelYears(inv) {
  /* code here */

  const years = [];

  for (let i = 0; i < inv.length; i++) {
    years.push(inv[i].car_year)
  }

  return years;
}

console.log(getModelYears(data));


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
function getCarInfoById(make, model) {
  /* code here */

  const MAKE = Object.values(data)[make].car_make;
  const MODEL = Object.values(data)[model].car_model;

  return `This is a ${MAKE} ${MODEL}`
}

console.log(getCarInfoById(1, 1));

/**
 * ### Challenge `getOlderCars`
 * * THIS ONE IS A STRETCH GOAL. ATTEMPT IT ONLY AFTER
 * COMPLETING ALL NON-STRETCH CHALLENGES IN THE REPOSITORY!
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
function getOlderCars(cars, years) {

  let newCars = [];
  for (let i = 0; i < cars.length; i++) {
    if (cars[i] < years.length - 1) {
      newCars.push(cars[i].car_year);
    }
  }
  return newCars;
}
console.log(getOlderCars(data, 2000));

/**
 * ### Challenge `getGermanCars`
 * * THIS ONE IS A STRETCH GOAL. ATTEMPT IT ONLY AFTER
 * COMPLETING ALL NON-STRETCH CHALLENGES IN THE REPOSITORY!
 * 
 * @instructions
 * We need a utility to find German cars!
 * getGermanCars takes a single argument:
 *     (1) an array which is an inventory of cars like the one inside /data/inventory.js.
 * getGermanCars returns an array containing all the cars
 * made by either `Audi` or `Mercedes-Benz` or `Volkswagen` or `BMW`,
 * in the same order as they appear in the original inventory.
 */
function getGermanCars( /* code here */ ) {
  /* code here */
}

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
function carMaker( /* code here */ ) {
  /* code here */
}