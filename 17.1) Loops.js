1) for loop: (start point, end point, increment)
Loops are used to run a piece of code multiple times. The code in a loop runs repeatedly as long as a certain condition is evaluated as true.

Example: 
for (let abc = 1; abc < 6; abc++) 
{
  console.log(abc);
}

Steps:
Step 1: Before the loop starts, `let abc = 1` is run, setting `abc` to 1. This only happens once before the loop begins.
Step 2: The loop checks if `abc < 6`. If true, the loop runs. Since `abc` starts at 1, the condition is true, so the loop runs.
Step 3: After running the loop's code once (one iteration), `abc++` increases its value by 1.
Step 4: The loop then checks the condition again (`abc < 6`). If true, it repeats the process. If false, the loop stops.
The loop keeps running until `abc` reaches 6. Then, the condition is false, and the loop stops.

Challenge:
The code given below displays "Welcome" in the console. 
Enclose the console.log statement in a for loop, such that it displays Welcome 3 times.

Solution:
for (let iteration = 1; iteration < 4; iteration++) 
{
  console.log("Welcome");
}

2) while loop: (start point, end point, increment)
The while loop contains a condition, which is checked at the beginning of each iteration of the loop. 
If the condition evaluates to true, then the code block is executed, and then the loop moves to its next iteration. 
If the condition evaluates to false, then the execution of the loop is stopped.

Example:
let iteration = 1;
while (iteration < 6) 
{
  console.log(iteration);
  iteration++;
}

The code starts with `iteration` at 1 and prints it. It then increases `iteration` by 1 and repeats this until `iteration` reaches 6.

Challenge:
The code below displays "Hello, World!" in the console. Enclose the console.log statement in a while loop, such that it displays "Hello, World!" 3 times.

Solution:
let iteration = 1;
while (iteration < 4) 
{
  console.log("Hello, World!");
  iteration ++;
}

3) do while: (opposite of while) (start point, increment, endpoint)
In the do...while loop, the code block is executed without any checks at the beginning. 
The loop condition is checked after the code block is executed. 
If the condition evaluates to true, the loop moves to its next iteration. 
If the condition evaluates to false, then the execution of the loop is stopped.

Example:  
let iteration = 1;
do {
  console.log(iteration);
  iteration++;
} while (iteration < 6);

Challenge:
The code given below displays "Hello, World!" in the console. Enclose the console.log statement in a do...while loop, such that it displays "Hello, World!" 3 times.

Solution:
let iteration = 1;
do {
  console.log("Hello World!");
  iteration ++;
}
while (iteration < 3);

4) for...in loop in an array: let us go through the indexes of all elements in an array. 

Example 1:
const fruits = ["Mango", "Apple", "Banana"];
for (const index in fruits) {
  console.log(index);
}

//Shows the index (or position) of each item in the array.

//Note that the value of index is always a string containing the index number.
//We can also use the for...in a loop to show all the elements of the array; 

Example 2:
const fruits = ["Mango", "Apple", "Banana"];
for (const index in fruits) {
  console.log(fruits[index]);
}

Challenge:
Use the for...in loop to show all the elements stored in the people array.
Use console.log to show the output.


Solution:
const people = ["Adam", "Eve", "Sam"];
for (const index in people) {
  console.log(people[index]);
}

5) for...in loop in an object: let us go through the indexes of all elements in an object.

Example 1: 
const car = {
  manufacturer: "Porsche",
  model: "911",
  fuelType: "Diesel"
};

for (const key in car) {
  console.log(key);
}

//used, for...in loop to show the keys of all the properties of the car object as strings.

Example 2:
const car = {
  manufacturer: "Porsche",
  model: "911",
  fuelType: "Diesel"
};

for (const key in car) {
  console.log(car[key]);
}

// used, for...in a loop to show the values stored in each property of the object.

Challenge:
Use a for...in loop to show all the values stored in each property of the person object.
Use console.log to print the output.

Solution:
const person = {
  fullName: "Adam Smith",
  age: 37,
  isAdmin: true
};
for (const key in person) {
  console.log(person[key]);
}

6) for...of loop: used to go through and access each value directly in an iterable, like an array.

Example:
const names = ["Raj", "Rajiv", "Rajvir"];
for (const name of names) 
{
  console.log(name);
}

Challenge:
Use a for...of loop to print all the values of the fruits array.
Use console.log to print the output.

Solution:
const fruits = [
  "Apple",
  "Orange",
  "Banana"
]

for (const name of fruits)
{
  console.log(name);
}
