//Global Variable
let globalVar = "I am a global variable";

//Local Variable
function localScope() {
    let localVar = "I am local";
    console.log(globalVar);
    console.log(localVar);
}

localScope();
console.log(globalVar);
// console.log(localVar);