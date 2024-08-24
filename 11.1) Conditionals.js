1) Truthy and Falsy Values:
Step to convert values of any data type to boolean. 
We can use Boolean() to convert any value to a boolean value.

const name = "Sam Smith";
console.log(Boolean(name));

const age = 32;
console.log(Boolean(age));

const experience = 0;
console.log(Boolean(experience));  

/*Values such as the number 0, false, null, undefined, NaN, and the empty string "", will get converted to false. 
These values are called falsy values, rest are truly values.*/

2) if Statement:

Example 1:
const age = 12;
const votingAge = 18;

if (age < votingAge) {
  console.log("Person is not eligible to vote");
}
//true, so there's output!

Example 2:
const age = 12;
const votingAge = 18;

if (age >= votingAge) {
  console.log("Person is eligible to vote");
}
// false, so no output!

3) if statement condition: //helps to get the output we want, not a logical operation!

const employee = {
  name: "Sam"
};

if (employee.name) {
  console.log(`Name of the employee is ${employee.name}.`);
};

In the above example, we see that the condition given to the if statement is not a logical operation. 
employee.name evaluates to "Sam", which is not an operation, but a String We know that String in javascript is a truthy value.

This is the reason why the code executes and we can see the code-block inside the if statement runs and the console statement is printed.

4) else statement:

const number = 7;

if (number % 2 === 0) {
  console.log("number is even");
} else {
  console.log("number is odd");
}

In this code, we are provided with details of a participant.
Your task is to modify the code to achieve the following console log output:
If the participant has the role of admin, the message should be: [Participant Name] has access to the admin area..
If the participant has a different role, the message should be: [Participant Name] has access to the public area.

Solution:
const participant = {
  name: "Tommy",
  role: "guest"
};

if (participant.role==="admin") {
  console.log(`${participant.name} has access to the admin area.`)
}
else {
  console.log(`${participant.name} has access to the public area.`)
}

5) else if Statement:

a) The else if statement is used along with the if and else statements. 
It is used to execute blocks of code conditionally when there are more than two conditions.

Example:
const number = 0; //similarly, do with -7 & 7 and see the results!
 
if (number > 0) {
  console.log("The number is positive.");
} else if (number === 0) {
  console.log("The number is 0.");
} else {
  console.log("The number is negative.");
}
  
b) Depending upon the number of conditions, we can add as many else if statements as needed. 
They must be added between the if and else statements.

Example:
const number = -9;

if (number > 9) {
  console.log("The number is positive with multiple digits.");
} else if (number > 0) {
  console.log("The number is positive with single digit.");
} else if (number === 0) {
  console.log("The number is 0.");
} else if (number > -10) {
  console.log("The number is negative with single digit.");
} else {
  console.log("The number is negative with multiple digits.");
}
