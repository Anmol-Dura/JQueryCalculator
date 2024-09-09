$(document).ready(function () {
  let currentInput = "";
  let previousInput = "";
  let operator = "";
  let resultDisplayed = false;

  // Number and decimal button click
  $(".number, .decimal").click(function () {
    // To check if the result was just displayed and empty it.
    if (resultDisplayed) {
      currentInput = "";
      resultDisplayed = false;
    }
    currentInput += $(this).text();
    $("#calculator-screen").text(currentInput);
  });

  // Operator button click
  $(".operator").click(function () {
    if (currentInput === "" && previousInput === "") return; // Ignore if nothing to operate on
    if (previousInput !== "") {
      calculate();
    }
    operator = $(this).text();
    previousInput = currentInput;
    currentInput = "";
  });

  // Equal sign button click
  $(".equal-sign").click(function () {
    if (currentInput !== "" && previousInput !== "") {
      calculate();
      resultDisplayed = true;
    }
  });

  // Clear button (C) click
  $(".all-clear").click(function () {
    currentInput = "";
    previousInput = "";
    operator = "";
    $("#calculator-screen").text("0");
  });

  // Clear entry (CE) click
  $(".clear-entry").click(function () {
    currentInput = "";
    $("#calculator-screen").text("0");
  });

  // Backspace button click
  $(".back").click(function () {
    currentInput = currentInput.slice(0, -1);
    $("#calculator-screen").text(currentInput || "0"); //if the currentInput is a truthy value it will use the currentInput otherwise 0.
  });

  // Calculate the result
  function calculate() {
    let result;
    switch (operator) {
      case "+":
        result = parseFloat(previousInput) + parseFloat(currentInput);
        break;
      case "-":
        result = parseFloat(previousInput) - parseFloat(currentInput);
        break;
      case "*":
        result = parseFloat(previousInput) * parseFloat(currentInput);
        break;
      case "/":
        if (currentInput === "0") {
          result = "Error";
        } else {
          result = parseFloat(previousInput) / parseFloat(currentInput);
        }
        break;
      case "sqrt":
        result = Math.sqrt(parseFloat(currentInput));
        break;
      case "1/x":
        result = 1 / parseFloat(currentInput);
        break;
      case "%":
        result = parseFloat(currentInput) / 100;
        break;
      case "+/-":
        result = parseFloat(currentInput) * -1;
        break;
      case "pi":
        result = Math.PI;
        break;
      default:
        return;
    }
    $("#calculator-screen").text(result);
    currentInput = result;
    previousInput = "";
    operator = "";
  }
});
