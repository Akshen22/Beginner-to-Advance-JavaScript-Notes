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

12) We can also assign a pre-defined function to an object property.

const admin = {
  name: "Adam Smith",
  age: 45,
}

const displayHelloWorld = () => console.log("Hello World");

admin.displayGreeting = displayHelloWorld;

admin.displayGreeting();

In the example given above, we first defined the displayHelloWorld function. 
Then we assigned it to the displayGreeting property of admin.

This way of defining an object method is not preferred. 
We'll take a look at the preferred way of defining object methods in the next chapter.

13) 
