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

b) const student1 = {
  name: "Sam Smith",
  nationality: "India",
};

const student2 = {
  name: "Oliver Smith",
  nationality: "USA",
};

const courseFee = 5000;

const getStudentFee = student => {
  if (student.nationality !== "India") {
    return courseFee;
  } 
  else {
    const discountedFee = courseFee - courseFee * 0.1;
    return discountedFee;
  }
};

console.log(getStudentFee(student1));

console.log(getStudentFee(student2));

In the example given above, in the function getStudentFee:

If the value of the nationality property of the parameter student is not "India", the value of courseFee is returned.
If the value of student.nationality is "India", a 10% discounted course fee is calculated, stored in discountedFee, and the value of discountedFee is returned.
We can rewrite the getStudentFee function in the example given above, to make use of the fact that the return statement terminates further execution of a function.

c) Same code, without using else:

const student1 = {
  name: "Sam Smith",
  nationality: "India",
};

const student2 = {
  name: "Oliver Smith",
  nationality: "USA",
};

const courseFee = 5000;

const getStudentFee = student => {
  if (student.nationality !== "India")
    return courseFee;

  const discountedFee = courseFee - courseFee * 0.1;
  return discountedFee;
};

console.log(getStudentFee(student1));

console.log(getStudentFee(student2));

i) If the value of student.nationality is not "India", we return the value of courseFee. 
  Since further execution of the function is stopped, we do not need to provide the else statement.
ii) If the value of student.nationality is "India", return courseFee; will not be executed and we move to the next statement.
  A 10% discounted course fee is calculated, stored in discountedFee, and the value of discountedFee is returned.

d) 
