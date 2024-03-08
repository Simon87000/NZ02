// Arrow Functions
const greet = (name) => console.log("Hello Simon");
    
greet();

const square = (a) => console.log('square: ', a*a)

square(5);

//Template literals
let name = 'Simon';
let age = 36;

// console.log("I'm "+  name + " and I'm "+ age + " years old");

//modern best way to do it
console.log(`Hi! I'm ${name} and I'm ${36} years old`)

//Destructuring
//destructure an array
let nums = [24, 23, 13];

let [firstNum , secondNum, thirdNum] = nums;
console.log(`${firstNum}, ${secondNum}, ${thirdNum}`)

//Objects
const numbers = {
    first: 1,
    second: 2,
    third: 3,
}

let {first, second, third} = numbers;
console.log(`First: ${first},
Second: ${second},
Third: ${third}`);

// var person = {
//     name: 'John',
//     age: 39,
//     sayHello: function(){
//         console.log('Hello!');
//     }
// }

const person = {
    name,
    age,

    sayHello() {
        return `Hello! I'm ${name} and I am ${age} years old.`
    }
}

console.log(person.sayHello());

//Spread and Rest

//Spread operator
function sum(x, y, z) {
    return x + y + z;
}

// let nums = [24, 23, 13];
console.log(sum(...nums))

//Rest operator
function myFunction(firstArg, ...restOfArg){
    console.log(firstArg);
    console.log(restOfArg);
}

myFunction('one', 'two', 'three', 'four');

//Default parameter
function multiply (a = 4, b = 5) {
    return a*b;
}

console.log(multiply());
console.log(multiply(8));
console.log(multiply(9, 6));