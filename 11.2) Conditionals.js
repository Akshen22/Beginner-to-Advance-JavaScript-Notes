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

7) 
