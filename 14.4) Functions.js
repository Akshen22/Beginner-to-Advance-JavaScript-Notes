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

13) Challenge:
Create a function named displayTotalCount with two parameters:
An array of strings.
A new string element to be added to the list.

The displayTotalCount function should execute the following tasks:
Adds the string to the array.
Display the total count of elements in the updated array by logging it to the console.

Solution:
const teamMembers = ["Ajith", "Vaishnavi", "Nilopher", "Ritika", "Shristi", "Manjunath"];
const newTeamMember = "Peter";

displayTotalCount = (list, newElement) => {
  list.push(newElement);
  console.log(`list.length`)
};

displayTotalCount(teamMembers, newTeamMember);

14) Callback Functions:
In JavaScript, you can define a function and pass it as an argument to another function. Such a function, is called a callback function.

const validateSolution = (solution, statusMessage) => {
  if (solution === 11) {
    statusMessage(true);
  } else {
    statusMessage(false);
  }
};

const statusMessage = (status) => {
  if (status) {
    console.log("Great! Your answer is correct!");
  } else {
    console.log("Oops! Your answer is incorrect. Please try again.");
  }
};
const solution = 11; 
validateSolution(solution, statusMessage);

In the above code we see 2 functions validateSolution and statusMessage. statusMessage is passed as an argument to validateSolution, this makes statusMessage a callback function.
This example showcases the use of a callback function statusMessage to handle and display the success or error status based on the result of the validation process done in the validateSolution function.

15) Anonymous Functions:
An anonymous function is one that is not given a name.

(function () {
  console.log("Function Keyword");
})();

(() => {
  console.log("Arrow Function");
})();

16) 
