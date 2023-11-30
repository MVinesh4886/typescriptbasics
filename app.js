var numberOne = document.getElementById("num1");
var numberTwo = document.getElementById("num2");
var buttonElement = document.querySelector("button");
function add(num1, num2) {
    return num1 + num2;
}
buttonElement.addEventListener("click", function () {
    var num1 = numberOne.value;
    var num2 = numberTwo.value;
    var result = add(+num1, +num2);
    console.log(result);
});
// console.log(add(1, 5));
// console.log(add("1", "5"));
