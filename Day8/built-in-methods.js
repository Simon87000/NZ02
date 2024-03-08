// Built in method for Strings
// split
const message = "Hello, Simon!";
const words = message.split(", "); //and how do you wnat do split them
console.log(words);

// includes
const sentence = " The quick brown fox jumps over the lazy dog."
const constainsWord = sentence.includes("fox")
console.log(constainsWord)

// length
const sampleString = "Welcone to ";
const strLength = sampleString.length
console.log(strLength)

// math
// max will return the max number
const maxNumber = Math.max(10, 5, 20);
console.log(maxNumber);

// min
const minNumber = Math.min(10, 5, 20);
console.log(minNumber);

// random 0 (inclusive) and 1 (exclusive)
const randomValue = Math.random();
console.log(randomValue);

// floor
const roundedNFloor = Math.floor(3.2);
console.log(roundedNFloor);

// ceil
const roundedCeil = Math.ceil(3.2);
console.log(roundedCeil);

// round
const roundedValue = Math.round(3.6);
console.log(roundedValue);

// get random integer
function getRandomInt(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const randomInt = getRandomInt(1, 10);
console.log(randomInt)

// other built--method
// number.toFixed()
const fixedNumber = 3.141592.toFixed(3);
console.log(fixedNumber);

// Date()
const currentDate = new Date();
console.log(currentDate);