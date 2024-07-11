// Import the functions from the utilities file using CommonJS syntax
const { greetUser, convertTemperature, calculateFactorial, advancedFunction } = require('./utilities');

// Call/invoke the functions
greetUser("Yashkumar", "Patel");

const celsius = 27;
const fahrenheit = convertTemperature(celsius);
console.log(`${celsius} degrees Celsius is ${fahrenheit} degrees Fahrenheit`);

const number = 9;
const factorial = calculateFactorial(number);
console.log(`The factorial of ${number} is ${factorial}`);

advancedFunction();
