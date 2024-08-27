1) Find Positive Numbers:
Update the function getPositiveNumbers to accept an array of numbers as an argument and display to the console, 
a new array containing only the positive numbers, including zero.

Solution:
function getPositiveNumbers(numbers) {
  const positiveNumbers = numbers.filter(number => number >= 0);
  console.log(positiveNumbers)
}

2) Calculate Grade:
If the score is 100, then grade is A+.
If the score is more than 80 and less than 100, then grade is A.
If the score is more than 60 and less than 81, then grade is B.
If the score is 60 or less than 60, then grade is C.
Based on the above conditions create a function getGrade that accepts two parameters score and name. 
The function should log [name] got X grade; accordingly to the console.

Solution:
const getGrade = (score, name) => {
  
  let grade = null;
  
  if (score === 100) {
    grade = "A+";
  }
  
  else if (score > 80 && score < 100) {
    grade = "A";  
  }
  
  else if (score > 60 && score < 81) {
    grade = "B";
  }
  
  else if (score < 61) {
    grade = "C";
  }
  
  console.log(`${name} got ${grade} grade.`);
};

3) Build Pizza Price Calculator:
function priceCalculator(menu, order) {
  
  const total_veggie_pizza_cost = menu["veggie_pizza"] * order["veggie_pizza"];
  
  const total_chicken_pizza_cost = menu["chicken_pizza"] * order["chicken_pizza"];
  
  const total_cookies_cost = menu["chocolate_cookie"] * order["chocolate_cookie"];
  
  const total_shake_cost = menu["vanilla_shake"] * order["vanilla_shake"];

  const total_order_cost = total_veggie_pizza_cost + total_chicken_pizza_cost + total_cookies_cost + total_shake_cost;

  console.log(`Total cost of your order is ${total_order_cost}`);

};

4) Greetings:
Create a function greetings that accepts two parameters a string message and a function callback.
The callback should always be console.log. If the function is not console.log then log to the console: "Provide correct callback."
Else, greetings should call callback function with the message as argument.

Solution:
const greetings = (message, callback) => {
  if (callback === console.log) {
    return callback(message);
  }
  else {
    console.log(`Provide correct callback.`)
  }
};

5) Addition in Array:
