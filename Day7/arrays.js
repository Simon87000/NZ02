let fruits = ['apple', 'bannana', 'orange', 'mango'];
console.log(fruits)

//Accessing individual  elements
console.log("Third fruit: ", [2]);
console.log("First fruit: ", [0]);
console.log("Last fruit: ", fruits[fruits.length - 1]);

//Modifying elements
fruits[1] = 'grape'
console.log(fruits);
fruits.push('strawberry');
console.log(fruits);

console.log(fruits.pop());
console.log(fruits);

console.log(fruits.pop());
console.log(fruits);

//Array iteration
for (let i = 0; i < fruits.length; i = i + 2){
    console.log('Fruits:', fruits[i])
}

let colors = ['red', 'blue', 'white', 'yeallow'];

colors.forEach(function (color){
    console.log("color: ", color);
})


//Some common array methods include :
//push(), pop(), shift(), unshift(), slice(), and splice(), 
//which allow you to add, remove, and modify elements in an array.
fruits.unshift("lemon");
console.log(fruits);

//Common array method

let numbers = [1,2,3,4,5];

//length
console.log('Array length: ', numbers.length);

//indexOf
console.log('Index of 3:', numbers.indexOf(3))
console.log('Index of white:', colors.indexOf('white'))

//includes
console.log('Includes number 5: ', numbers.includes(5));
console.log('Includes number 5: ', numbers.includes(8));

//join
console.log('joined array: ', numbers.join('/'));

//slice
let slicedArray = numbers.slice(1, 4);
console.log('sliced array: ', slicedArray);

//splice
let  removedElements = numbers.splice(2, 2);
console.log('Removed items: ', removedElements)
console.log('Updated array: ', numbers)