/**
 * One of the most common tasks as a software developer is to "transform" data
 * from one form to another.
 *
 * In this exercise, you're asked to transform data from the given shape to
 * a new shape.
 */

let inputData = {
  name: 'Will Byers',
  age: 9,
  status: 'upside down',
  superpower1: 'can-blink-lights',
  superpower2: null,
  address1: '123 Whatever street',
  addressCity: 'Hawkins',
  addressState: 'Indiana',
  addressCountry: 'United States',
  motherName: 'Joyce Byers',
  motherAge: 35,
  motherStatus: 'worried',
  motherSuperpower1: null,
  motherSuperpower2: null,
  bestFriendName: 'Mike Wheeler',
  bestFriendAge: 9,
  bestFriendStatus: 'frenetic',
  bestFriendSuperpower1: null,
  bestFriendSuperpower2: null,
  girlfriendName: 'Eleven',
  girlfriendAge: 9,
  girlfriendStatus: 'angry',
  girlfriendSuperpower1: 'telepathy',
  girlfriendSuperpower2: 'multiverse portal sealing',
};

/*

We want a function that can transform it from that shape to this shape:

{
  "name": "Will Byers",
  "age": 9,
  "status": "upside down",
  "address": {
    "streetAddress": "123 Whatever street",
    "city": "Hawkins",
    "state": "Indiana",
    "country": "United States"
  },
  "superpowers": [
    "can-blink-lights"
  ],
  "relationships": [
    {
      "type": "mother",
      "name": "Joyce Byers",
      "age": 35,
      "status": "worried",
      "superpowers": []
    },
    {
      "type": "girlfriend",
      "name": "Eleven",
      "age": 9,
      "status": "angry",
      "superpowers": [
        "telepathy",
        "multiverse portal sealing"
      ]
    }
  ]
}

Specifically:

- Address becomes nested in an object
- Instead of `superpower1` and `superpower2`, an array is used
- Instead of having a "flat" structure for relationships, a new `relationships`
  array is added, which holds objects for each relationship.
- Each relationship has a `type`, like mother/best-friend/girlfriend
- Each relationship also has an array of super powers, same logic as the main
  `superpowers` array

NOTE: For superpowers, you should only have as many items as are available.
For example, the main superpowers array should be:
✅ ['can-blink-lights']
⛔️ ['can-blink-lights', null]
*/

// hmm. actually, the common bits are at the end.
// name, age, status, superpowerN
// so we want to create an array of the keys
// go through each item, use string.includes()
// determine if it has name, age, etc.

function transformData(data) {
  let newObject = {
    "name": data.name,
    "age": data.age,
    "status": data.status,
    "address": {
      "streetAddress": data.address1,
      "city": data.addressCity,
      "state": data.addressState,
      "country": data.addressCountry
    },
    superpowers: [
      'can-blink-lights'
    ],
    relationships: []
  };

  // only the relationships.

  // the relevant people

  let targetRel = ['mother', 'bestFriend', 'girlfriend'];

  // the relevant data bits

  let targetData = ['Name', 'Age', 'Status'];

  // can't return 'null', I guess

  function superpowers(a, b) {
    let relevantPowers = [];
    if (a) {
      relevantPowers.push(a);
    }
    if (b) {
      relevantPowers.push(b);
    }
    return relevantPowers;
  }

  targetRel.forEach(function (person) {

    let tempObj = {
      type: person,
      name: data[person + targetData[0]],
      age: data[person + targetData[1]],
      status: data[person + targetData[2]],
      superpowers:
        superpowers(data[person + "Superpower1"], data[person + "Superpower2"])
    }

    newObject.relationships.push(tempObj);
  });

  return newObject;

}

/*
  `JSON.stringify` is used to "pretty-print" the output, so that it's easy
  to see what it looks like, and debug any problems.
*/
console.log(JSON.stringify(transformData(inputData), null, 2));
