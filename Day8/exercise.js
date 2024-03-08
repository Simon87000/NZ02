// Exercise 1: Function Basics
// Create a function called greet that takes a name as a parameter 
// and logs a greeting message with the name to the console. 
// Then, call the function with your name. 

function greet(name){  //name is a parameter
    console.log("Hello",  name);
}

greet("Simon")

// Exercise 2: Local vs. Global Scope 
// Declare a global variable globalVar with a value. 
// Then, create a function that declares a local variable 
// with the same name globalVar. 
// Log the values of both variables inside and outside the function.
// What do you observe?

let globalVar = 2;
function localVar(globalVar) {
    console.log(globalVar);
    console.log(localVar);
}

console.log(globalVar);
console.log(localVar);

// Exercise 3: Higher-Order Function 
// Create a higher-order function called mathOperation that takes 
// two numbers and a callback function as parameters. 
// The callback function should perform a mathematical operation. 
// Use this higher-order function to add, subtract, multiply, 
// and divide two numbers.

function cmathOperation(num1, num2, callback) {
    return callback(num1, num2);
}
function add (a, b) {
    return a + b;
}
function substract (a, b) {
    return a - b;
}
function multiply (a, b) {
    return a * b;
}
function divide (a, b) {
    return a / b;
}

let result1 = cmathOperation(5, 3, add)
let result2 = cmathOperation(5, 3, substract)
let result3 = cmathOperation(5, 3, multiply)
let result4 = cmathOperation(5, 3, divide)

console.log("Addition :", result1);
console.log("Substraction :", result2);
console.log("Multiplication :", result3);
console.log("Division :", result4);