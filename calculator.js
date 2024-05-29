function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

let firstNum = '';
let operator = '';
let secondNum = '';

function operate(firstNum, operator, secondNum) {
    if (operator == '+'){
        return add(firstNum, secondNum);
    } else if (operator == '-'){
        return subtract(firstNum, secondNum);
    } else if (operator == '*'){
        return multiply(firstNum, secondNum);
    } else if (operator == '/') {
        return multiply(firstNum, secondNum);
    }
}