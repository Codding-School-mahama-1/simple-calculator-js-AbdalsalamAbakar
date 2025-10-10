/*

    SIMPLE CALCULATOR CHALLENGE 


 Instructions for Students:
  ----------------------------------------------------------
  1 Run this file in your browser console or VS Code terminal.
  2 Ask the user to enter:
        - First number
        - Operator (+, -, *, /, %)
        - Second number
  3 Use either:
        - if...else statements
          OR
        - switch case statements
  4 Display the result in the console.
  5 Check if the result is even or odd.
  6 Add a loop so the calculator repeats
      until the user says "no" or clicks cancel.

   Tips:
  ----------------------------------------------------------
   - Use prompt() to get user input.
   - Use console.log() to display the result.
   - Use confirm() to ask if the user wants to continue.
   - Be creative, make it your own!
   - Don’t copy from AI. The teacher will check for originality.


*/

//  Step 1: Create a loop to repeat your calculator
// TODO: Start your loop (while or do...while or for loop)

// Inside your loop:
// ------------------------------
// TODO: Ask the user for the first number
// TODO: Ask the user for the operator (+, -, *, /, %)
// TODO: Ask the user for the second number

// TODO: Do the calculation (use if...else or switch)
// TODO: Display the result in console

// TODO: Check if result is even or odd
// TODO: Ask user if they want to calculate again
// If user says "no" or clicks cancel, stop the loop

//  Remember: Write the code yourself so you can understand it!
// SIMPLE CALCULATOR CHALLENGE

do {
  // Ask for input
  let num1 = Number(prompt("Enter the first number:"));
  let operator = prompt("Enter an operator (+, -, *, /, %):");
  let num2 = Number(prompt("Enter the second number:"));
  let result;

  // Do the calculation
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    case '%':
      result = num1 % num2;
      break;
    default:
      console.log("Invalid operator!");
      continue; // skip the rest and ask again
  }

  // Display result
  console.log(`Result: ${result}`);

  // Check even or odd
  if (result % 2 === 0) {
    console.log("The result is even.");
  } else {
    console.log("The result is odd.");
  }

  // Ask if user wants to continue
} while (confirm("Do you want to calculate again?"));

console.log("Calculator closed. Goodbye!");
