9) return Statement for Terminating Functions:

a) After the return statement in a function is executed, further execution of the function is terminated. 

Consider the following example:
const calculateSum = (number1, number2) => {
  console.log("Calculating...");

  return number1 +  number2;

  console.log("Calculation complete");
}

const sum = calculateSum(23, 45);
console.log(sum);

When the calculateSum function is invoked, first we get the output "Calculating...".
Then the sum number1 + number2 is returned.
After the return statement, the function execution is stopped. The statement console.log("Calculation complete") is not executed and hence we don't see it in the output.

b) 

