9) return Statement for Terminating Functions:
After the return statement in a function is executed, further execution of the function is terminated. 
Consider the following example:
const calculateSum = (number1, number2) => {
  console.log("Calculating...");

  return number1 +  number2;

  console.log("Calculation complete");
}

const sum = calculateSum(23, 45);
console.log(sum);
