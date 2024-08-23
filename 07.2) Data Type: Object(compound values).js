12) Get Object Keys - Object.keys(): helps to get keys!

const person = {
  fullName: "Adam Smith",
  age: 37,
  isAdmin: true
};

const result = Object.keys(person);
console.log(result);

13) Get Object Keys - Object.values(): helps to get values!

const person = {
  fullName: "Adam Smith",
  age: 37,
  isAdmin: true
};

const result = Object.values(person);
console.log(result);

14) Get Object Keys and Values - Object.entries(): helps to get key-value pairs!

const person = {
  fullName: "Adam Smith",
  age: 37,
  isAdmin: true
};

const result = Object.entries(person);
console.log(result);

15) Remove property from object: used to delete a property from an object!

const person = {
  fullName: "Sam Smith",
  age: 37,
  isAdmin: true
};

delete person.age;
delete person[`isAdmin`];
console.log(person);
