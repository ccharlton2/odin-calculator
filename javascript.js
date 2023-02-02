let controlsContainer = document.querySelector('.container');
let display = document.querySelector('.display');
let displayValue = '';
let operatorCount = 0;

let currentOperator = '';

controlsContainer.addEventListener('click', (e) => {
    let userInput = e.target.value;
    if (userInput) {

        if (userInput === 'c') {
            display.textContent = '';
            currentOperator = '';
            displayValue = '';
        }

        if (userInput === 'backspace') {
            if (displayValue) {
                let slicedCharacter = displayValue.slice(-1);
                displayValue = displayValue.slice(0, displayValue.length - 1);
                display.textContent = displayValue;

                if (slicedCharacter === currentOperator) {
                    currentOperator = '';
                }
            }
        }
        else {
            if (userInput !== '=' && userInput !== 'c') {

                display.textContent += userInput;

                // displayValue = displayValue.replace(currentOperator, userInput);
                // currentOperator = userInput;
                // display.textContent = displayValue;
                // remove last character (operator) from displayValue
                // make display = displayValue

            }

            switch (userInput) {
                case '+':
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


            displayValue += userInput !== '=' && userInput !== 'c' ? userInput : '';

            if (userInput === '=' && currentOperator) {
                operate(displayValue, currentOperator);
            }
        }
        // check if current display string index is an operator
        // if it is don't add anything
        // helps prevent user from chaining multiple operators and improves UX
    }
});

function operate(expression, operator) {

    let result = 0;
    let numbers = expression.split(operator);
    let n1 = parseFloat(numbers[0]);
    let n2 = parseFloat(numbers[1]);

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
    operatorCount = 0;
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