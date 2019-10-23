////// STUDENTS: DO NOT MODIFY THIS FILE //////
////// STUDENTS: DO NOT MODIFY THIS FILE //////
////// STUDENTS: DO NOT MODIFY THIS FILE //////
////// STUDENTS: DO NOT MODIFY THIS FILE //////
////// STUDENTS: DO NOT MODIFY THIS FILE //////


/* eslint-env mocha */
if (typeof exports !== 'undefined') {
  // IGNORE: Test/Env Detection Stuff //
  // Node/Non-browser test env

  var chai = require('chai')
  var inventory = require('../data/inventory')
  var {
    makePersonObject,
    getName,
    makeSmartPerson,
    carMaker,
    getCarInfoByIndex,
    getLastCarInfo,
    getCarInfoById,
    sortCarInventory,
    getModelYears,
  } = require('../index.js')
}
var expect = chai.expect
var person = { id: 1, name: 'Luke', email: 'luke@luke.com' }

describe('makePersonObject()', () => {
  it('makes an object of the right shape', () => {
    expect(makePersonObject(1, 'Luke', 'luke@luke.com'))
      .to.eql(person)
  })
})

describe('getName()', () => {
  it('makes an object of the right shape', () => {
    expect(getName(person))
      .to.include('my name is Luke')
  })
})

describe('makeSmartPerson()', () => {
  it('makes an object with a name', () => {
    expect(makeSmartPerson('Sam').name).to.eql('Sam')
  })
  it('makes an object with a functioning sum method', () => {
    expect(makeSmartPerson('Sam').sum(1, 2)).to.eql(3)
  })
  it('makes an object with a functioning speak method', () => {
    expect(makeSmartPerson('Sam').speak()).to.include('Sam')
  })
})

describe('getCarInfoByIndex()', () => {
  it('returns a string containing the car_make', () => {
    expect(getCarInfoByIndex(inventory, 0)).to.include(inventory[0].car_make)
  })
  it('returns a string containing the car_model', () => {
    expect(getCarInfoByIndex(inventory, 0)).to.include(inventory[0].car_model)
  })
})


describe('getLastCarInfo()', () => {
  it('returns a string containing the car_make', () => {
    expect(getLastCarInfo(inventory)).to.include(inventory[inventory.length - 1].car_make)
  })
  it('returns a string containing the car_model', () => {
    expect(getLastCarInfo(inventory)).to.include(inventory[inventory.length - 1].car_model)
  })
})

describe('getCarInfoById()', () => {
  it('returns a string containing the car_make', () => {
    expect(getCarInfoById(inventory, 1)).to.include(inventory[0].car_make)
  })
  it('returns a string containing the car_model', () => {
    expect(getCarInfoById(inventory, 1)).to.include(inventory[0].car_model)
  })
})

describe('sortCarInventory()', () => {
  it('can sort the inventory', () => {
    const copyOfInventory = [...inventory]
    const sorted = sortCarInventory(copyOfInventory)
    expect(sorted[sorted.length - 1].car_model).to.eql('Yukon')
  })
})

describe('getModelYears()', () => {
  it('returns an array of car years', () => {
    const carYears = inventory.map(c => c.car_year)
    expect(getModelYears(inventory)).to.eql(carYears)
  })
})

describe('carMaker() STRETCH', () => {
  it('makes a car with an odometer set to the correct value', () => {
    expect(carMaker(123).odometer).to.eql(123)
  })
  it('driving the car increases the odometer', () => {
    var car = carMaker(100)
    car.drive(1)
    expect(car.odometer).to.eql(101)
  })
  it('driving the car returns the updated odometer', () => {
    expect(carMaker(100).drive(5)).to.eql(105)
  })
})