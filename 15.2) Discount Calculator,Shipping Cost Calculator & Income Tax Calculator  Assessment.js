5) Discount Calculator:

Update the function getDiscountedPrice to calculate the discounted price of an item based on the original price, membership status, and coupon availability. 
The function should return the discounted price.

The function parameters are,

originalPrice (number): It is the original price of the item.
isMember (boolean): It indicates if the customer is a member (true) or not (false)
hasCoupon (boolean): It indicates if the customer has a coupon (true) or not (false).
The function should apply the following discounts,

If the customer is a member, they receive a 10% discount.
If the customer has a coupon, they receive a 20% discount.
If the customer is both a member and has a coupon, they receive a 30% discount.
If the customer is neither a member nor has a coupon, there is no discount applied.
The function should return the final discounted price based on the original price and the applicable discounts.

Solution:
const getDiscountedPrice = (originalPrice, isMember, hasCoupon) => {
  
  let discount = 0;
  
  if (isMember && hasCoupon) {
    discount = 0.30;
  }
  
  else if (isMember) {
    discount = 0.10;
  } 
  
  else if (hasCoupon) {
    discount = 0.20;
  }
  
  else {
    discount = 0.0;
  }
  const discountedPrice = originalPrice - (originalPrice * discount);
  return discountedPrice;
}

6) Shipping Cost Calculator:

Update the function calculateShippingCostIndia to calculate the shipping cost for packages sent to destinations within India. 
The function should consider the weight of the package and the destination state to determine the shipping cost.

The function parameters are,

weight (number): It represents the weight of the package in kilograms.
destination (string): It represents the destination state within India.
The shipping cost is calculated based on the following criteria,

For all destinations in India, the base shipping cost is ₹50.
Additionally, there is an extra charge of ₹10 per kilogram for packages weighing more than 5 kilograms.
The function should return a string indicating the shipping cost based on the weight and destination,

If the weight of the package is 5 kilograms or less, the function should return "Shipping cost is ₹X", where X is the total shipping cost.
If the weight of the package exceeds 5 kilograms, the function should return "Shipping cost is ₹Y", where Y is the total shipping cost including the additional charge for weight above 5 kilograms.

Solution:
