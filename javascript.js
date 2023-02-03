let controlsContainer = document.querySelector('.container');
let display = document.querySelector('.display');
let displayValue = '';
let operationComplete = false;

let firstNumber = 0;
let secondNumber = 0;
let userInput = '';
let previousResult = 'none';
let currentOperator = '';

controlsContainer.addEventListener('click', (e) => {
    userInput = e.target.value;
    if (userInput) {

        // clear
        if (userInput === 'c') {
            clear();
        }

        switch (userInput) {
            case '+':
                firstNumber = display.textContent;
                clear(false);
                currentOperator = '+';
                break;
            case '-':
                currentOperator = '-'
                break;
            case 'x':
                currentOperator = 'x'
                break;
            case '/':
                currentOperator = '/'
                break;
            default:
                break;
        }


        if (userInput === '=') {
            userInput = '';
            secondNumber = display.textContent;
            console.log(`I am numba wan: ${firstNumber}`);
            console.log(`I am numba two: ${secondNumber}`);
            display.textContent = operate(parseFloat(firstNumber), parseFloat(secondNumber), currentOperator);
        }

        displayValue += userInput;
        display.textContent += userInput;

        // operate(parseFloat(firstNumber), parseFloat(secondNumber), currentOperator);
    }
});

function clear(clearNumbers = true) {

    if (clearNumbers) {
        firstNumber = '';
        secondNumber = '';
    }

    display.textContent = '';
    currentOperator = '';
    displayValue = '';
    userInput = '';
}

function operate(n1, n2, operator) {

    // let numbers = expression.split(operator);
    // let n1 = parseFloat(numbers[0]);
    // let n2 = parseFloat(numbers[1]);

    let result = 0;

    switch (operator) {
        case '+':
            result = add(n1, n2);
            break;

        case '-':
            result = subtract(n1, n2);
            break;

        case '/':
            result = divide(n1, n2);
            break;

        case 'x':
            result = multiply(n1, n2);
            break;

        default:
            return 'ERROR!'
    }

    console.log(result)

    displayValue = result;
    display.textContent = result;
    currentOperator = '';
    operationComplete = true;
}

function add(n1, n2) {
    return n1 + n2;
}

function subtract(n1, n2) {
    return n1 - n2;
}

function divide(n1, n2) {
    return n1 / n2;
}

function multiply(n1, n2) {
    return n1 * n2;
}

function containsOperator(expression) {
    let = knownOperators = ['+', '-', '/', 'x'];
    let hasOperator = false;
    knownOperators.forEach(operator => {
        if (expression.includes(operator)) {
            hasOperator = true;
        }
    });

    return hasOperator;
}

function replaceOperator(expression, operator) {
    let = knownOperators = ['+', '-', '/', 'x'];
    let splitExpression = expression.split("");
    let replacedExpression = splitExpression.map((char) => {
        if (knownOperators.includes(char)) {
            char = operator;
        }

        return char;
    });

    return replacedExpression.join("");
}