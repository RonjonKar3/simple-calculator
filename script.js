const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".buttons button");

let currentInput = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "AC") {
      currentInput = "";
      display.value = "";
    } else if (value === "DEL") {
      currentInput = currentInput.slice(0, -1);
      display.value = currentInput;
    } else if (value === "=") {
      try {
        display.value = eval(currentInput);
        currentInput = display.value;
      } catch {
        display.value = "Error";
        currentInput = "";
      }
    } else if (value === "%") {
      if (currentInput !== "") {
        display.value = parseFloat(currentInput) / 100;
        currentInput = display.value;
      }
    } else {
      currentInput += value;
      display.value = currentInput;
    }
  });
});
