let controlsContainer = document.querySelector('.container');
let display = document.querySelector('.display');
let displayValue = '';
let evaluateNext = false;

let operator = '';

controlsContainer.addEventListener('click', (e) => {
    let userInput = e.target.value;
    if (userInput) {
        // check if current display string index is an operator
        // if it is don't add anything
        // helps prevent user from chaining multiple operators and improves UX

        switch (userInput) {
            case '+':
                operator = '+';
                break;
            case '-':
                operator = '-'
                break;
            case 'x':
                operator = 'x'
                break;
            case '/':
                operator = '/'
                break;
        
            default:
                break;
        }

        
        displayValue += userInput !== '=' ? userInput : '' ;

        if (userInput === '=') {
            operate(displayValue);
        }
        
        display.textContent += userInput;
    }
});

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

function operate(operator, n1, n2) {
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

        case '*':
            result = multiply(n1, n2);
            break;

        default:
            return 'ERROR!'
    }

    display += result;
}