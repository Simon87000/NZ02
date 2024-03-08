// Higher Order Functions
function calculate(num1, num2, operation) {
    return operation(num1, num2);
}

//Callback function
function add (a, b) {
    return a + b;
}

function substract( a, b) {
    return a - b
}

let result1 = calculate(5, 3, add)
let result2 = calculate(5, 3, substract)

console.log("Addition :", result1);
console.log("Substraction :", result2);

