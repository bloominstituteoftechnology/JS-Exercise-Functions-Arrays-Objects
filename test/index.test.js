////// STUDENTS: DO NOT MODIFY THIS FILE //////
////// STUDENTS: DO NOT MODIFY THIS FILE //////
////// STUDENTS: DO NOT MODIFY THIS FILE //////
////// STUDENTS: DO NOT MODIFY THIS FILE //////
////// STUDENTS: DO NOT MODIFY THIS FILE //////

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
  { id: 14, car_make: "Dodge", car_model: "Ram Van 1500", car_year: 1999 },
  { id: 15, car_make: "Dodge", car_model: "Intrepid", car_year: 2000 },
  { id: 16, car_make: "Mitsubishi", car_model: "Montero Sport", car_year: 2001 },
  { id: 17, car_make: "Buick", car_model: "Skylark", car_year: 1987 },
  { id: 18, car_make: "Geo", car_model: "Prizm", car_year: 1995 },
  { id: 19, car_make: "Oldsmobile", car_model: "Bravada", car_year: 1994 },
  { id: 20, car_make: "Mazda", car_model: "Familia", car_year: 1985 },
  { id: 21, car_make: "Chevrolet", car_model: "Express 1500", car_year: 2003 },
  { id: 22, car_make: "Jeep", car_model: "Wrangler", car_year: 1997 },
  { id: 23, car_make: "Eagle", car_model: "Talon", car_year: 1992 },
  { id: 24, car_make: "Toyota", car_model: "MR2", car_year: 2003 },
  { id: 25, car_make: "BMW", car_model: "525", car_year: 2005 },
  { id: 26, car_make: "Cadillac", car_model: "Escalade", car_year: 2005 },
  { id: 27, car_make: "Infiniti", car_model: "Q", car_year: 2000 },
  { id: 28, car_make: "Suzuki", car_model: "Aerio", car_year: 2005 },
  { id: 29, car_make: "Mercury", car_model: "Topaz", car_year: 1993 },
  { id: 30, car_make: "BMW", car_model: "6 Series", car_year: 2010 },
  { id: 31, car_make: "Pontiac", car_model: "GTO", car_year: 1964 },
  { id: 32, car_make: "Dodge", car_model: "Ram Van 3500", car_year: 1999 },
  { id: 33, car_make: "Jeep", car_model: "Wrangler", car_year: 2011 },
  { id: 34, car_make: "Ford", car_model: "Escort", car_year: 1991 },
  { id: 35, car_make: "Chrysler", car_model: "300M", car_year: 2000 },
  { id: 36, car_make: "Volvo", car_model: "XC70", car_year: 2003 },
  { id: 37, car_make: "Oldsmobile", car_model: "LSS", car_year: 1997 },
  { id: 38, car_make: "Toyota", car_model: "Camry", car_year: 1992 },
  { id: 39, car_make: "Ford", car_model: "Econoline E250", car_year: 1998 },
  { id: 40, car_make: "Lotus", car_model: "Evora", car_year: 2012 },
  { id: 41, car_make: "Ford", car_model: "Mustang", car_year: 1965 },
  { id: 42, car_make: "GMC", car_model: "Yukon", car_year: 1996 },
  { id: 43, car_make: "Mercedes-Benz", car_model: "R-Class", car_year: 2009 },
  { id: 44, car_make: "Audi", car_model: "Q7", car_year: 2012 },
  { id: 45, car_make: "Audi", car_model: "TT", car_year: 2008 },
  { id: 46, car_make: "Oldsmobile", car_model: "Ciera", car_year: 1995 },
  { id: 47, car_make: "Volkswagen", car_model: "Jetta", car_year: 2007 },
  { id: 48, car_make: "Dodge", car_model: "Magnum", car_year: 2008 },
  { id: 49, car_make: "Chrysler", car_model: "Sebring", car_year: 1996 },
  { id: 50, car_make: "Lincoln", car_model: "Town Car", car_year: 1999 }
]

/* eslint-env mocha */
if (typeof exports !== "undefined") {
  // IGNORE: Test/Env Detection Stuff //
  // Node/Non-browser test env

  var chai = require("chai");

  var {
    addNumbers,
    sayGoodbye,
    temperatureCtoF,
    temperatureInF,
    makePersonObject,
    getName,
    appleIndex,
    isItAnApple,
    getCarInfoByIndex,
    getLastCarInfo,
    getModelYears,
    getCarInfoById,
    getOlderCars,
    getGermanCars,
    carMaker
  } = require("../index.js");
}
var expect = chai.expect;


describe("addNumbers()", () => {
  it("can add two numbers", () => {
    expect(addNumbers(1, 2)).to.eql(3);
  });
});


describe("sayGoodbye()", () => {
  it('can say goodbye', () => {
    expect(sayGoodbye('Hannah')).to.eql('Goodbye, Hannah. Have a great day.');
  })
});


describe('temperatureCtoF()', () => {
  it('should convert temperature', () => {
    expect(temperatureCtoF(40)).to.eql(104);
    expect(temperatureCtoF(12)).to.eql(54);
  })
})

describe('temperatureInF()', () => {
  it('should return temperature in F', () => {
    expect(temperatureInF(66, 'F')).to.eql('66F');
    expect(temperatureInF(8, 'F')).to.eql('8F');
  });

  it('should convert from C', () => {
    expect(temperatureInF(40, 'C')).to.eql('104F');
    expect(temperatureInF(12, 'C')).to.eql('54F');
  });
})

var person = { id: 1, name: "Luke", email: "luke@luke.com" };

describe("makePersonObject()", () => {
  it("makes an object of the right shape", () => {
    expect(makePersonObject(1, "Luke", "luke@luke.com")).to.eql(person);
  });
});

describe("getName()", () => {
  it("makes an object of the right shape", () => {
    expect(getName(person)).to.include("my name is Luke");
  });
});

describe('appleIndex()', () => {
  it("should find the index of 'apple'", () => {
    expect(appleIndex(['orange', 'apple', 'banana'])).to.eql(1);
  });
});

describe('isItAnApple', () => {
  it('should correctly identify apple in the array', () => {
    expect(isItAnApple([ 'apple', 'orange', 'apple', 'banana', 'mango' ])).to.eql([ true, false, true, false, false]);
  });

  it('should only identify exact matches', () => {
    expect(isItAnApple([ 'apples', 'applesauce', 'APPLE', 'appl', 'apple' ])).to.eql([ false, false, false, false, true]);
  })
});

describe("getCarInfoByIndex()", () => {
  it("returns a string containing the car_make", () => {
    expect(getCarInfoByIndex(inventory, 0)).to.include(inventory[0].car_make);
  });
  it("returns a string containing the car_model", () => {
    expect(getCarInfoByIndex(inventory, 0)).to.include(inventory[0].car_model);
  });
});

describe("getLastCarInfo()", () => {
  it("returns a string containing the car_make", () => {
    expect(getLastCarInfo(inventory)).to.include(
      inventory[inventory.length - 1].car_make
    );
  });
  it("returns a string containing the car_model", () => {
    expect(getLastCarInfo(inventory)).to.include(
      inventory[inventory.length - 1].car_model
    );
  });
});


describe("getModelYears()", () => {
  it("returns an array of car years", () => {
    const carYears = inventory.map(c => c.car_year);
    expect(getModelYears(inventory)).to.eql(carYears);
  });
});


describe("STRETCH: getCarInfoById()", () => {
  it("returns a string containing the car_make", () => {
    expect(getCarInfoById(inventory, 1)).to.include(inventory[0].car_make);
  });
  it("returns a string containing the car_model", () => {
    expect(getCarInfoById(inventory, 1)).to.include(inventory[0].car_model);
  });
});

describe("STRETCH: getOlderCars()", () => {
  it("returns an empty array for a very low max year", () => {
    const cars = inventory.filter(c => c.car_year <= 0);
    expect(getOlderCars(inventory, 0)).to.eql(cars);
  });
  it("returns the entire inventory for a very high max year", () => {
    const cars = inventory.filter(c => c.car_year <= 3000);
    expect(getOlderCars(inventory, 3000)).to.eql(cars);
  });
  it("returns some cars when the max year is somewhere in the middle", () => {
    const cars = inventory.filter(c => c.car_year <= 1990);
    expect(getOlderCars(inventory, 1990)).to.eql(cars);
  });
});

describe("STRETCH: getGermanCars()", () => {
  it("returns an array with the correct cars", () => {
    const makes = ["Audi", "Mercedes-Benz", "Volkswagen", "BMW"];
    const cars = inventory.filter(c => makes.includes(c.car_make));
    expect(getGermanCars(inventory)).to.eql(cars);
  });
});

describe("STRETCH: carMaker()", () => {
  it("makes a car with an odometer set to the correct value", () => {
    expect(carMaker(123).odometer).to.eql(123);
  });
  it("driving the car increases the odometer", () => {
    var car = carMaker(100);
    car.drive(1);
    expect(car.odometer).to.eql(101);
    car.drive(1);
    expect(car.odometer).to.eql(102);
  });
  it("driving the car returns the updated odometer", () => {
    expect(carMaker(100).drive(5)).to.eql(105);
  });
});

////// STUDENTS: DO NOT MODIFY THIS FILE //////
////// STUDENTS: DO NOT MODIFY THIS FILE //////
////// STUDENTS: DO NOT MODIFY THIS FILE //////
////// STUDENTS: DO NOT MODIFY THIS FILE //////
////// STUDENTS: DO NOT MODIFY THIS FILE //////
