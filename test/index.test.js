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


