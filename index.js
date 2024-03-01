import readlineSync from "readline-sync";
import Calculator from "./src/calculator.js";

console.log("Welcome to the calculator!");
const a = readlineSync.questionInt("Please enter the first number: ");
const b = readlineSync.questionInt("Please enter the second number: ");

try {
  const calculator = new Calculator(a, b);
  console.log("The sum is: " + calculator.sum());
  console.log("The multiplication is: " + calculator.mul());
} catch (e) {
  console.log(e.message);
}
