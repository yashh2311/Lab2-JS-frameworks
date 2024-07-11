// Function 1: Greet User
function greetUser(firstName, lastName) {
  console.log(`Welcome ${firstName} ${lastName} to Georgian@ilac College`);
}

// Function 2: Convert Temperature (Celsius to Fahrenheit)
function convertTemperature(celsius) {
  return (celsius * 9/5) + 32;
}

// Function 3: Calculate Factorial
function calculateFactorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  let result = 1;
  for (let i = n; i > 1; i--) {
    result *= i;
  }
  return result;
}

// Function 4: Advanced Function (Example: Calculate Fibonacci Sequence)
function advancedFunction() {
  const fibonacci = (num) => {
    let a = 1, b = 0, temp;

    while (num >= 0) {
      temp = a;
      a = a + b;
      b = temp;
      num--;
    }

    return b;
  };

  const n = 18;
  console.log(`The ${n}th number in the Fibonacci sequence is ${fibonacci(n)}`);
}

// Export the functions using CommonJS syntax
module.exports = {
  greetUser,
  convertTemperature,
  calculateFactorial,
  advancedFunction
};
