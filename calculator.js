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

let num = [];
let num1 = '';
let operator = '';
let num2 = '';

function operate(firstNum, operator, secondNum) {
    if (operator == '+'){
        let result = document.querySelector('#screen').textContent = add(firstNum, secondNum);
        num = [];
        num2 = '';
        return result;
    } else if (operator == '-'){
        let result = document.querySelector('#screen').textContent = subtract(firstNum, secondNum);
        num = [];
        num2 = '';
        return result;
    } else if (operator == '*'){
        let result = document.querySelector('#screen').textContent = multiply(firstNum, secondNum);
        num = [];
        num2 = '';
        return result;
    } else if (operator == '/') {
        let result = document.querySelector('#screen').textContent = divide(firstNum, secondNum);
        num = [];
        num2 = '';
        return result;
    }
}

document.querySelector('#calculator').addEventListener('click', (event) => {
    let target = event.target;
    if (target.classList.contains('0')) {num.push('0')};
    if (target.classList.contains('1')) {num.push('1')};
    if (target.classList.contains('2')) {num.push('2')};
    if (target.classList.contains('3')) {num.push('3')};
    if (target.classList.contains('4')) {num.push('4')};
    if (target.classList.contains('5')) {num.push('5')};
    if (target.classList.contains('6')) {num.push('6')};
    if (target.classList.contains('7')) {num.push('7')};
    if (target.classList.contains('8')) {num.push('8')};
    if (target.classList.contains('9')) {num.push('9')};
    if (target.classList.contains('backspace')) {
        num.pop();
    };
    if (target.classList.contains('clear')) {
        num = [];
        num1 = '';
        num2 = '';
        operator = '';
    };
    if (target.classList.contains('.')) {
        if (!num.includes('.')){
            num.push('.');
        }
    };
    if (target.classList.contains('negative')) {
        if(num[0] != '-'){
            num.unshift('-');
        } else num.shift();
    };
    document.querySelector('#screen').textContent = num.join('');
    if (target.classList.contains('+')) {
        operatorCheck('+');
    };
    if (target.classList.contains('-')) {
        operatorCheck('-');
    };
    if (target.classList.contains('*')) {
        operatorCheck('*');
    };
    if (target.classList.contains('/')) {
        operatorCheck('/');
    };
    if (target.classList.contains('enter')) {
        if(num1 == '' || operator == ''){
        } else {
        num2 = Number(num.join(''));
        num1 = operate(num1, operator, num2);
        operator = '';
        }
    };
})

function operatorCheck(operatorSymbol) {
    if (num1 == ''){
        operator = operatorSymbol;
        num1 = Number(num.join(''));
        document.querySelector('#screen').textContent = num1;
        num = [];
    } else if (num == ''){
        operator = operatorSymbol;
    } else {
        num2 = Number(num.join(''));
        num1 = operate(num1, operator, num2);
        operator = operatorSymbol;
    }
}

document.querySelectorAll('.button').forEach(button =>
    button.addEventListener('mouseover', () => button.classList.add('hover')));

document.querySelectorAll('.button').forEach(button =>
    button.addEventListener('mousedown', () => button.classList.add('click')));

document.querySelectorAll('.button').forEach(button =>
    button.addEventListener('mouseup', () => button.classList.remove('click')));

document.querySelectorAll('.button').forEach(button =>
    button.addEventListener('mouseout', () => button.classList.remove('hover')));
