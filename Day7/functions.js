//Functions
function greet() {
    console.log("Hello bruhs, functions bro !");
}
greet();

//2 ways to define functions
//1. function declaration
function squareDeclaration(num) {
    return num * num
}
squareDeclaration(6);

//2. function expressions
const squareExpression = function (num) {
    return num * num;
};

console.log("Square for  Function Declaration: ", squareDeclaration(6));
console.log("Square for  Function Expression: ", squareExpression(5));

//Function Hoisting - only works for function declaration
sayHello()
function sayHello() {
    console.log("Hello, Function Hoisting");
}

//helloExpression();

//const helloExpression = function () {
//    console.log("Expresion hoisting");
//}

// anonymous function
const anonymousFunction = function() {
    console.log("Hello anonymous funstion")
}

anonymousFunction();
