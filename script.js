

function add(number1, number2) {

    return parseFloat(number1) + parseFloat(number2);
}

function subtract(number1, number2) {
    return parseFloat(number1) - parseFloat(number2);
}

function multiply(number1, number2) {
    return parseFloat(number1) * parseFloat(number2);
}

function divide(number1, number2) {
    return parseFloat(number1) / parseFloat(number2);
}

function operate(operator, number1, number2) {
    switch (operator) {
        case '+':
            result = add(number1, number2);
            if (isFloat(result)) {
                result = Number(result.toFixed(4));
            }
            screen.textContent = result;
            break;
        case '-':
            result = subtract(number1, number2);
            if (isFloat(result)) {
                result = Number(result.toFixed(4));
            }
            screen.textContent = result;
            break;
        case '*':
            result = multiply(number1, number2);
            if (isFloat(result)) {
                result = Number(result.toFixed(4));
            }
            screen.textContent = result;
            break;
        case '/':
            result = divide(number1, number2);
            if (isFloat(result)) {
                result = Number(result.toFixed(4));
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

const buttonDot = document.querySelector('#bdot');
buttonDot.addEventListener('click', writeDot);

const buttonDelete = document.querySelector('.delete');
buttonDelete.addEventListener('click', deleteInput);

function writeScreen() {
    if (result === '' || operator !== '') {
        if (number1 === '' && number2 === '' && operator === '') {
            screen.textContent = this.value;
        } else {
            screen.textContent += this.value;
        }
    }

}

function storeNumber1() {
    if (operator === '' && result === '') {
        number1 += this.value;
    } else if (operator === '' && result !== '') {
        return;
    } else if (operator !== '') {
        storeNumber2(this.value);
    }
}

function storeNumber2(value) {
    number2 += value;
}

function storeOperator() {
    if (number1 === '' || (number1 !== '' && this.value === '=') && number2 === '') {
        return;
    }

    if (operator !== '' && number2 === '') {
        return;
    }

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
    result = '';
    screen.textContent = '0';
}

function isFloat(n) {
    return Number(n) === n && n % 1 !== 0;
}

function writeDot() {
    if (!String(number1).includes('.') && operator === '' && number2 === '') {
        number1 += this.value;
        screen.textContent += this.value;
    } else if (number1 !== '' && operator !== '' && !String(number2).includes('.')) {
        number2 += this.value;
        screen.textContent += this.value;
    }
}

function deleteInput() {
    if (number1 !== '' && operator === '' && number2 === '') {
        number1 = number1.slice(0, -1);
        screen.textContent = screen.textContent.slice(0, -1);
    } else if (number1 !== '' && operator !== '' && number2 === '') {
        operator = '';
        screen.textContent = screen.textContent.slice(0, -3);
    } else if (number1 !== '' && operator !== '' && number2 !== '') {
        number2 = number2.slice(0, -1);
        screen.textContent = screen.textContent.slice(0, -1);
    }
}