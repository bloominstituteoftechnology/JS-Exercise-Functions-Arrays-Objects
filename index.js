/*
// ⭐️ Example Solution Provided For First Function ⭐️

// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/**
 * ### Challenge `makePersonObject`
 * 
 * @instructions
 * This function should be able to take an id, a name and an email,
 * and return an object with `id`, `name` and `email` properties.
 * 
 * For example, if we invoke `makePersonObject`
 * passing 5, 'Leia' and 'leia@leia.com' as arguments,
 * the returned value should look like:
 * {
 *   id: 5,
 *   name: "Leia",
 *   email: "examples@you.edu",
 * }
*/
function makePersonObject(id, name, email) {
  return { id, name, email };
}

/**
 * ### Challenge `getName`
 * 
 * @instructions
 * This function should be able to take an object that has a `name` property,
 * and return a string that reads `Hello, my name is {name}`, where `{name}`
 * is the name in the object.
 * 
 * For example, if we invoke `getName`
 * passing { id: 1, name: 'Leia', email: 'leia@leia.com` },
 * the returned value should look like `Hello, my name is Leia`.
*/
function getName(personObject) {
  return 'Hello, my name is ' + personObject.name;
}

/// ////// END OF CHALLENGE /////////
/// ////// END OF CHALLENGE /////////
/// ////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  // IGNORE: Test/Env Detected
  // For Node/Non-browser test env
  module.exports = module.exports || {}
  if (makePersonObject) { module.exports.makePersonObject = makePersonObject }
  if (getName) { module.exports.getName = getName }
}
