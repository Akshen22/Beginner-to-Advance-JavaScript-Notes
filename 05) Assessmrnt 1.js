1) Weather Report:
You are given the following variables,

personName
currentTemperature
shiveringTemperature (the temperature at which the person will start shivering.)
hourlyTemperatureDecrease (the amount by which the temperature drops every hour.)
Your task is to calculate how many hours it will take before the person starts shivering, store the result in a variable called hoursRemainingForShivering, and log it to the console in the following format:

[personName] will start shivering in [hoursRemainingForShivering] hours.

Solution:
const personName = "Sam";
const shiveringTemperature = 20;
const currentTemperature = 30;
const hourlyTemperatureDecrease = 2;

const hoursRemainingForShivering = (currentTemperature - shiveringTemperature) / hourlyTemperatureDecrease

console.log(`${personName} will start shivering in ${hoursRemainingForShivering} hours.`)

2) Teamwork:
Eve, Sam and Renu are competing as a team for India in the Olympics relay race. Each has to do 1 lap then pass the baton.
The average speed of each of them are given in the variables averageSpeedEve, averageSpeedSam, and averageSpeedRenu respectively.
Store the average speed to a variable called averageSpeed, and then log it to the console in the format:
The Average speed of Team India was [Average Speed] meters per second.

Solution:



