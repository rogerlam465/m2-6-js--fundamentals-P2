// Exercise 1.0
// ------------
// Create an object that represents *you*.
// It should contain your first name, last name, age and hometown.

// It should look something like this
// let myObject = {
//     name: {
//         first: 'Scott',
//         last: 'Morin',
//     },
//     age: '49',
//     city: 'Montreal',
//     siblings: 1,
//     petName: 'Mia',
//     monthOfBirth: 'July'
// }

let myObject = {
  name: {
    first: 'Roger',
    last: 'Lam'
  },
  age: '38',
  city: 'Montreal',
  siblings: 1,
  petNames: [
    "Opie",
    "Buttercup"
  ],
  monthOfBirth: 'May'
}

console.log(myObject);
console.log(myObject.petNames);
console.log(myObject.age);

// A) console.log() your object.
// B) console.log() a few of the values in the object.

//-------------------------------------------------

// Exercise A
// ------------
// Add three more key/value pairs to your object that represent other attributes
// of yourself. Ideas include (but are not limited to):
//     - Favorite TV Shows/Movies/Sports/Activities etc.
//     - Occupation
//     - Date of Birth
//     - Pets (number of pets, names of pets, etc.)

// HINT: You can just modify the object that you created before.

myObject.occupation = "supervisor";
myObject.birthdate = "May 24th, 1982";
myObject.favouriteFood = "curry";

//-------------------------------------------------

// Exercise B
// ------------
// Look up your favorite movie on IMDB, and make an object that represents some
// aspects of that movie, *e.g.*:
//     - Title
//     - Director
//     - Year released
//     - Rating
//     - Actors

// HINT: Most movies have multiple actors. What data-structure do we use to
// represent a collection of similar things?

let favoriteMovie = {
  title: "How to Train Your Dragon",
  director: ["Dean DeBlois", "Chris Sanders"],
  yearReleased: "2010",
  rating: 75,
  actors: ["Jay Baruchel", "Gerard Butler", "Craig Ferguson", "America Ferrera"]
};

//-------------------------------------------------

// Exercise C
// ------------
// Fix the attempts to access values in the `person` object:

const key = 'name';
const person = {
  name: 'Alyssa P. Hacker',
  age: 26,
  hometown: 'somewhere',
};

console.log(person.age); // => 26
console.log(person[key]); // => "Alyssa P. Hacker"

//-------------------------------------------------

// Exercise D
// ------------
// Write a function `fullName` that takes a person object as an argument, and
// returns that person's full name as a string. By *person object*, we mean an
// object that has the structure of the object you created to represent
// yourself above.

// Example
const alyssa = {
  name: {
    first: 'Alyssa',
    middle: 'P.',
    last: 'Hacker',
  },
  age: 26,
};

function fullName(person) {
  let { first, middle, last } = person.name;
  return `${first} ${middle} ${last}`;
}

console.log("Exercise D");

console.log(fullName(alyssa)); // => "Alyssa P. Hacker"

// Exercise E
// ------------
// What happens if you pass a person object to `fullName` that doesn't have a
// middle name? It's likely that you'd get a double space: "Alyssa  Hacker"

// Your `fullName` function should work correctly regardless of whether or not
// the person has a middle name -- if it doesn't produce the output shown above
// when given the object `{name: {first: "John", last: "Doe"}}`, fix it so that
// it does.

const rick = {
  name: {
    first: 'Rick',
    last: 'Sanchez',
  },
  age: 66,
};

// this seems like a brute force way of doing this. There should be a more elegant solution.

function betterFullName(person) {
  if (person.name.middle === undefined) {
    let { first, last } = person.name;
    return `${first} ${last}`;
  } else {
    let { first, middle, last } = person.name;
    return `${first} ${middle} ${last}`;
  }
}

console.log(betterFullName(rick)); // => "Rick Sanchez"
