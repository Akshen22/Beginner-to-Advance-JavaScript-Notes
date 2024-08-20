3) Comprehensive Challenge - Logical operations (AND/OR):
If the number is less than or equal to 10 and the string has a length greater than or equal to 5, or if the boolean is true, 
log true to the console, else log false.

Use the following to test the code:
number = 10;
string = "hi";
boolean = true;

Solution:
const givenNumber = 10;
const givenString = "hi";
const givenBoolean = true;

if (givenNumber <= 10 && givenString.length >= 5 || givenBoolean === true) {
  console.log(true);
}
else {
  console.log(false);
}

4) NOT ('!'):
The NOT operator - !, when applied to a value or expression returns false if the condition evaluates to true and returns true if the condition evaluates to false.

For example, let's say we have an object user with two properties - name and isAdmin. 
Let's say we need to display "You do not have access to this feature", if the value of user.isAdmin is false. 
The following example shows how to use the ! operator to perform this check:

const user = {
  name: "Oliver Smith",
  isAdmin: false,
};

if (!user.isAdmin===true) {
  console.log("You do not have access to this feature");
}

In the example given above, user.isAdmin is false and the condition !user.isAdmin returns true. 
If the value of user.isAdmin was true, then the condition !user.isAdmin would result in false. 

NOT table:
user.isAdmin	Result
true	        false
false	        true

5) 
