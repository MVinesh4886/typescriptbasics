"use strict";
let numberOne = document.getElementById("num1");
let numberTwo = document.getElementById("num2");
let buttonElement = document.querySelector("button");
function add(num1, num2) {
    return num1 + num2;
}
buttonElement.addEventListener("click", function () {
    let num1 = numberOne.value;
    let num2 = numberTwo.value;
    let result = add(+num1, +num2);
    console.log(result);
});
// console.log(add(1, 5));
// console.log(add("1", "5"));
