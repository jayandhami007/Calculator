let buttons = document.getElementsByClassName("btn");
let inputDisplay = document.querySelector("#display");
let expression = "";

for (let b of buttons) {
  b.addEventListener("click", function (e) {
    let value = e.target.value;

    if (value === "=") {
      try {
        inputDisplay.value = eval(expression);
        expression = "";
      } catch (err) {
        inputDisplay.value = "Error";
        expression = "";
      }
    } else if (value === "C") {
      inputDisplay.value = "";
      expression = "";
    } else {
      if (/[\+\-\*\/]/.test(value) && /[\+\-\*\/]$/.test(expression)) {
        return;
      }

      expression = expression + value;
      inputDisplay.value = expression;
    }
  });
}
