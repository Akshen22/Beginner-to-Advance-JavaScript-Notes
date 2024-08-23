11) Function as a Property of an Object:g
We can store a function as a property of an object. Such properties are called methods.

const admin = {
  name: "Adam Smith",
  age: 45,
}

admin.displayGreeting = () => console.log("Hello World");

admin.displayGreeting();

In the example given above, we have defined an object admin. Then a function is assigned to the property displayGreeting of the admin object. 
displayGreeting is now a method of the admin object.

12) Shorthand for Method:
We can define methods directly inside an object's definition.

a) const admin = {
  name: "Adam Smith",
  age: 45,
  displayGreeting: () => console.log("Hello everyone"),
}

admin.displayGreeting();

Other ways:
b) const admin = {
  name: "Adam Smith",
  age: 45,
  displayGreeting: function () {
    console.log("Hello everyone");
  }
}

admin.displayGreeting();

c) const name = "Adam Smith";
const age = 45;
const displayGreeting = () => console.log("Hello everyone");

const admin = { name, age, displayGreeting };

admin.displayGreeting();
console.log(`I am ${admin.name}`);

13) 
