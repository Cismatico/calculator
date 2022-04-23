

function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    return number1 / number2;
}

function operate(operator, number1, number2) {
    switch (operator) {
        case '+':
            console.log(add(number1, number2));
            break;
        case '-':
            console.log(subtract(number1, number2));
            break;
        case '*':
            console.log(multiply(number1, number2));
            break;
        case '/':
            console.log(divide(number1, number2));
            break;
        default:
            break;
    }
}