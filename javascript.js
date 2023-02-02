let controlsContainer = document.querySelector('.container');
let display = document.querySelector('.display');
let displayValue = '';
let evaluateNext = false;

let currentOperator = '';

controlsContainer.addEventListener('click', (e) => {
    let userInput = e.target.value;
    if (userInput) {
        // check if current display string index is an operator
        // if it is don't add anything
        // helps prevent user from chaining multiple operators and improves UX

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

        
        displayValue += userInput !== '=' ? userInput : '' ;

        if (userInput === '=') {
            operate(displayValue, currentOperator);
        }
        
        if (userInput !== '=') {
            display.textContent += userInput;
        }
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

        case '*':
            result = multiply(n1, n2);
            break;

        default:
            return 'ERROR!'
    }

    console.log(result)

    display.textContent = result;
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