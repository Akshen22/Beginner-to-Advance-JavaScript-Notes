1) Overview:
const apples = {
  price: 5,
  quantity: 3,
};

const bananas = {
  price: 4,
  quantity: 2,
};

const milk = {
  price: 8,
  quantity: 1,
};

const totalCost =
  apples.price * apples.quantity +
  bananas.price * bananas.quantity +
  milk.price * milk.quantity;

const result = `Total Cost: ${totalCost}`;
console.log(result);

--> In the above program, we need to individually calulate price and quantity of the fruits 
and total it, a very lengthy work, right?
So, let's bring a shortcut method which gonna be done, using: "function"!

const apples = {
  price: 5,
  quantity: 3
};

const bananas = {
  price: 4,
  quantity: 2
};

const milk = {
  price: 8,
  quantity: 1
};

function calculateItemCost(item) {
  return item.price * item.quantity;
}

const totalCost =
  calculateItemCost(apples) +
  calculateItemCost(bananas) +
  calculateItemCost(milk);

const result = (`Total Cost: ${totalCost}`);
console.log(result);
