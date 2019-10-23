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
  var {
    makePersonObject,
    getName,
    makeSmartPerson,
    carMaker,
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