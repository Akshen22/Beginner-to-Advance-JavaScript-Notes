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

4) for...in loop in an array:

  
