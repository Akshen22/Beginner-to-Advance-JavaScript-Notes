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

8) continue statement:
