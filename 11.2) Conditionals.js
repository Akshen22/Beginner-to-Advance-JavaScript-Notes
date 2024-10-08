6) switch Statement: whenever we have a number of conditions to evaluate for a given expression, 
  using an if else might not be the best method, instead will use switch!

const name = "Akshen";

switch (name)
  {
    case "Ak":
      console.log("This is the owner.");
      break;

    case "Aki":
      console.log("This is the manager.");
      break;

    case "Akshen":
      console.log("This is the emoployee.");
      break;

    default:
      console.log("Sorry there's no one from the provided name.");
      break;
  }

i) We pass an expression to the switch statement, that is, within the parentheses of switch(). We can call this the switch expression.
ii) It is followed by a number of cases. Each case contains a value and a code block.
iii) All switch statements must also contain a default block.
iv) The break statement is used to exit the execution of a switch statement.
  If the break statement is not present at the end of a code block the switch statement continues its execution to the next case block.
  As you can see in the below example, this happens irrespective of whether the condition, here the value of name is matched with that case or not.
v) The value of the switch expression is then compared with the value of each case, to see if they are equal.
vi) The code block of the first case whose value is equal to the value of the switch expression is executed.
vii) If the value of the switch expression does not match with any of the cases, then the default code block is executed.

7) switch statement fall through method (multiple cases at once!)

const passedRollNumbers = [8746, 5649, 3268, 7901];
const otherRollNumbers = [4387, 1752, 6210, 9834];
const rollNumberToCheck = 7901;

switch(rollNumberToCheck) {
  case 8746: case 5649: case 3268: case 7901:
    console.log("Congratulations, you have passed the test!");
    break;

  case 4387: case 1752: case 6210: case 9834:
    console.log("Unfortunately, you did not pass the test. Better luck next time!");
    break;

  default:
    console.log("Provided roll number is invalid");
};

Here for the roll numbers 8746, 5649, 3268, 7901 the code to be executed is the same: console.log("Congratulations, you have passed the test!");. 
So we group them together and write the code to be executed once. We do the same for the other set as well.

8) Ternary operator:

const number = 4;
const numberType = (number % 2 === 0) ? "even" : "odd";
console.log(numberType);

It starts with a condition followed by the ? operator.
It is then followed by two expressions, separated by the : operator.
The expression to the left of the : operator is evaluated when the condition is true.
The expression to the right of the : operator is evaluated when the condition is false.

The Ternary operator requires fewer lines of code, when compared to the if...else statement, making it easy to write. 
The reduced lines of code also make it easy to read and comprehend the logic.
The Ternary operator should only be used when all three operands are small. 
Using the Ternary operator with large operands makes the code less comprehensible and harder to debug in the future.  

9)  Challenge: - Find Maximum Number:

function findMaxOfThree(a, b, c) {
  let maximumValue = a > b ? (a > c ? a : c) : (c > b ? c : b);
  console.log(maximumValue);
};

findMaxOfThree(5, 10, 3);
findMaxOfThree(8, 2, 15);
findMaxOfThree(4, 4, 4);
