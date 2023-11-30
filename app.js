"use strict";
let numberOne = document.getElementById("num1");
let numberTwo = document.getElementById("num2");
let buttonElement = document.querySelector("button");
// here we added exclamation mark to indicate that it is not a null value;
// function add(num1:any, num2: any)
function add(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    }
    else if (typeof num1 === "string" && typeof num2 === "string") {
        return num1 + " " + num2;
    }
    else {
        return +num1 + +num2;
    }
}
function printResult(resultobj) {
    console.log(resultobj.val);
}
buttonElement.addEventListener("click", function () {
    let num1 = numberOne.value;
    let num2 = numberTwo.value;
    let result = add(+num1, +num2);
    let stringResult = add(num1, num2);
    console.log(result);
    console.log(stringResult);
    printResult({ val: result, timestamp: new Date() });
});
// console.log(add(1, 5));
// console.log(add("1", "5"));
