// SIMPLE CALCULATOR CHALLENGE

let continueCalculator = true;

do {
  // Ask for inputs
  let num1 = Number(prompt("Enter the first number:"));
  let operator = prompt("Enter an operator (+, -, *, /, %):");
  let num2 = Number(prompt("Enter the second number:"));
  let result;

  // Perform calculation
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;

    case "-":
      result = num1 - num2;
      break;

    case "*":
      result = num1 * num2;
      break;

    case "/":
      if (num2 === 0) {
        console.log("Error: Division by zero is not allowed.");
        continue;
      }
      result = num1 / num2;
      break;

    case "%":
      result = num1 % num2;
      break;

    default:
      console.log("Invalid operator.");
      continue;
  }

  // Display result
  console.log(`Result: ${num1} ${operator} ${num2} = ${result}`);

  // Check even or odd (only for whole numbers)
  if (Number.isInteger(result)) {
    if (result % 2 === 0) {
      console.log("The result is EVEN.");
    } else {
      console.log("The result is ODD.");
    }
  } else {
    console.log("The result is neither even nor odd.");
  }

  // Ask if user wants to continue
  continueCalculator = confirm("Do you want to calculate again?");

} while (continueCalculator);

console.log("Calculator stopped.");
