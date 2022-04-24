

function add(number1, number2) {

    return parseInt(number1) + parseInt(number2);
}

function subtract(number1, number2) {
    return parseInt(number1) - parseInt(number2);
}

function multiply(number1, number2) {
    return parseInt(number1) * parseInt(number2);
}

function divide(number1, number2) {
    return parseInt(number1) / parseInt(number2);
}

function operate(operator, number1, number2) {
    switch (operator) {
        case '+':
            result = add(number1, number2);
            if (isFloat(result)) {
                result = Number(result.toFixed(2));
            }
            screen.textContent = result;
            break;
        case '-':
            result = subtract(number1, number2);
            if (isFloat(result)) {
                result = Number(result.toFixed(2));
            }
            screen.textContent = result;
            break;
        case '*':
            result = multiply(number1, number2);
            if (isFloat(result)) {
                result = Number(result.toFixed(2));
            }
            screen.textContent = result;
            break;
        case '/':
            result = divide(number1, number2);
            if (isFloat(result)) {
                result = Number(result.toFixed(2));
            }
            screen.textContent = result;
            break;
        default:
            break;
    }
}

let number1 = '';
let number2 = '';
let operator = '';
let result = '';

const screen = document.querySelector('.screen');

const buttonNumber = document.querySelectorAll('.number');
buttonNumber.forEach(button => button.addEventListener('click', writeScreen));
buttonNumber.forEach(button => button.addEventListener('click', storeNumber1));

const buttonOperator = document.querySelectorAll('.operator');
buttonOperator.forEach(button => button.addEventListener('click', storeOperator));

const buttonClear = document.querySelector('.clear');
buttonClear.addEventListener('click', clearValues);

function writeScreen() {
    if (number1 === '' && number2 === '' && operator === '') {
        screen.textContent = this.value;
    } else {
        screen.textContent += this.value;
    }
}

function storeNumber1() {
    if (operator === '') {
        number1 += this.value;
    } else {
        storeNumber2(this.value);
    }
}

function storeNumber2(value) {
    number2 += value;
}

function storeOperator() {
    if (operator === '' && this.value !== '=') {
        operator = this.value;
        screen.textContent += ' ' + this.value + ' ';
    } else {
        operate(operator, number1, number2);
        if (this.value === '=') {
            operator = '';
            number1 = result;
            number2 = '';
        } else {
            operator = this.value;
            number1 = result;
            number2 = '';
            screen.textContent += ' ' + this.value + ' ';
        }
    }
}

function clearValues() {
    number1 = '';
    number2 = '';
    operator = '';
    screen.textContent = '0';
}

function isFloat(n) {
    return Number(n) === n && n % 1 !== 0;
}