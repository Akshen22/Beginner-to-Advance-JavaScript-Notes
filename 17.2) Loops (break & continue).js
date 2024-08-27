7) break statement:

"for" example:
for (let iteration = 1; iteration < 6; iteration++) {
  console.log(iteration);
}

to stop it at 3 itself, will write, using break:
  
for (let iteration = 1; iteration < 6; iteration++) {
  if (iteration === 4) {
    break;
  }
  console.log(iteration);
}

Challenge:
The for loop given below, displays all the elements of the array fruits. Use a break statement in the loop such that "Banana" and all the following elements are not displayed.

Solution:
const fruits = ["Apple", "Kiwi", "Mango", "Banana", "Orange", "Watermelon"];

for (let index = 0; index < 6; index++) {
  if (index === 3) {
    break;
  }
  console.log(fruits[index]);
}

8) continue statement: used to skip an iteration of a loop by immediately ending the current iteration of the loop, & moving to the next iteration.

Example 1:
let iteration = 1;
while (iteration <= 10) {
  iteration++;
  if (iteration % 2 === 0) {
    continue;
  }
  console.log(iteration);
}

/*During each iteration, we check the value of iteration to see if it is even, using the condition - iteration % 2 === 0. 
If the condition is true, the continue statement is executed, which ends the current iteration and starts the next iteration of the loop.*/

Example 2:
for (let iteration = 1; iteration <= 10; iteration++) {
  if (iteration % 2 === 0) {
    continue;
  }
  console.log(iteration);
}

//used to display the odd numbers from 1 to 10 using a for loop.

Challenge:
The for loop given below prints the numbers from 1 to 30. Use the continue statement in the for loop to print only the numbers that are divisible by 3.

Solution:
for (let iteration = 0; iteration <= 30; iteration++) {
  if(iteration % 3 != 0) {
    continue;
  }
  console.log(iteration);
}
