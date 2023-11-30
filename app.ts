let numberOne = document.getElementById("num1") as HTMLInputElement;
let numberTwo = document.getElementById("num2") as HTMLInputElement;
let buttonElement = document.querySelector("button")!;
// here we added exclamation mark to indicate that it is not a null value;

// function add(num1:any, num2: any)
function add(num1: number, num2: number) {
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
