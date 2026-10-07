// ADD A FUNCTION CALLED CALCULATE
function calculate(x, y, operation) {
    let result;

    switch (operation) {
        case "+":
            result = x + y;
            break;
        case "-":
            result = x - y;
            break;
        case "*":
            result = x * y;
            break;
        case "/":
            result = x / y;
            break;
        default:
            result = "invalid";
    }

    return result;
}
// COLLECT FIRST NUMBER FROM USER
let firstNumber = Number(prompt("Enter the first number:"));
// COLLECT SECOND NUMBER FROM USER
let secondNumber = Number(prompt("Enter the second number:"));
// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
let operation = prompt("Enter +, -, *, or /:");
// CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
alert("The result is " + calculate(firstNumber, secondNumber, operation));