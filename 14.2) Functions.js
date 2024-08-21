1) Parameters & Arguments:

Example 1: 
const displayValidationError = (invalidFieldName, additionalMessage) => { // parameters
  const result = `The user ${invalidFieldName} is not valid. ${additionalMessage}`;
  console.log(result);
}

displayValidationError("name", "Please provide a valid name."); // arguments

Example 2:
const displayAge = (age) => {
  console.log(`The user is ${age} years old.`);
}

displayAge(24);

Example 3:
const user = {
  name: "",
  age: 20,
  voterIDNumber: "",
};

const displayValidationError = (invalidFieldName, additionalMessage) => {
  const result = `The user ${invalidFieldName} is not valid. ${additionalMessage}`;
  console.log(result);
}

if (!user.name) {
  displayValidationError("name", "Please provide a valid name.");
}

if (user.age >= 18 && !user.voterIDNumber) {
  displayValidationError("Voter ID Number", "Voter ID Number is required for ages 18 and above.");
}

It is important to note that parameters are the list of variables wrapped in parentheses () in a function definition. 
In the example above, (invalidFieldName, additionalMessage) are parameters of the function displayValidationError. 
Arguments are the values passed in a function call. In the above example, displayValidationError("name", "Please provide a valid name.") is a function call
and "name", "Please provide a valid name." are the arguments.

