// Calculator state
let currentOperand = '0';
let previousOperand = '';
let operation = undefined;
let memory = 0;

// Display elements
const previousOperandElement = document.querySelector('.previous-operand');
const currentOperandElement = document.querySelector('.current-operand');

// Update display
function updateDisplay() {
    currentOperandElement.textContent = currentOperand;
    previousOperandElement.textContent = previousOperand;
}

// Append number
function appendNumber(number) {
    if (number === '.' && currentOperand.includes('.')) return;
    if (currentOperand === '0' && number !== '.') {
        currentOperand = number;
    } else {
        currentOperand += number;
    }
    updateDisplay();
}

// Clear calculator
function clearCalculator() {
    currentOperand = '0';
    previousOperand = '';
    operation = undefined;
    updateDisplay();
}

// Delete last digit
function deleteLastDigit() {
    if (currentOperand.length === 1) {
        currentOperand = '0';
    } else {
        currentOperand = currentOperand.slice(0, -1);
    }
    updateDisplay();
}

// Set operation
function setOperation(op) {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
        calculate();
    }
    operation = op;
    previousOperand = currentOperand + ' ' + op;
    currentOperand = '';
    updateDisplay();
}

// Toggle sign
function toggleSign() {
    currentOperand = (parseFloat(currentOperand) * -1).toString();
    updateDisplay();
}

// Calculate percentage
function calculatePercentage() {
    currentOperand = (parseFloat(currentOperand) / 100).toString();
    updateDisplay();
}

// Memory operations
function memoryOperation(op) {
    const current = parseFloat(currentOperand);
    switch(op) {
        case 'MC':
            memory = 0;
            break;
        case 'MR':
            currentOperand = memory.toString();
            break;
        case 'M+':
            memory += current;
            break;
        case 'M-':
            memory -= current;
            break;
    }
    updateDisplay();
}

// Scientific calculations
function calculate(type) {
    let computation;
    const current = parseFloat(currentOperand);
    const previous = parseFloat(previousOperand);

    if (type === '=') {
        if (isNaN(previous) || isNaN(current)) return;
        switch (operation) {
            case '+':
                computation = previous + current;
                break;
            case '-':
                computation = previous - current;
                break;
            case '×':
                computation = previous * current;
                break;
            case '÷':
                if (current === 0) {
                    alert('Cannot divide by zero!');
                    return;
                }
                computation = previous / current;
                break;
            default:
                return;
        }
    } else {
        switch (type) {
            case 'sin':
                computation = Math.sin(current * Math.PI / 180);
                break;
            case 'cos':
                computation = Math.cos(current * Math.PI / 180);
                break;
            case 'tan':
                computation = Math.tan(current * Math.PI / 180);
                break;
            case 'log':
                if (current <= 0) {
                    alert('Invalid input for logarithm!');
                    return;
                }
                computation = Math.log10(current);
                break;
            case 'sqrt':
                if (current < 0) {
                    alert('Cannot calculate square root of negative number!');
                    return;
                }
                computation = Math.sqrt(current);
                break;
            case 'power':
                computation = Math.pow(previous, current);
                break;
            case 'exp':
                computation = Math.exp(current);
                break;
            case 'pi':
                computation = Math.PI;
                break;
        }
    }

    // Round to avoid floating point errors
    computation = Math.round(computation * 1000000000) / 1000000000;
    currentOperand = computation.toString();
    operation = undefined;
    previousOperand = '';
    updateDisplay();
}

// Keyboard support
document.addEventListener('keydown', (event) => {
    if (event.key >= '0' && event.key <= '9' || event.key === '.') {
        appendNumber(event.key);
    }
    if (event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/') {
        const opMap = {
            '+': '+',
            '-': '-',
            '*': '×',
            '/': '÷'
        };
        setOperation(opMap[event.key]);
    }
    if (event.key === 'Enter' || event.key === '=') {
        calculate('=');
    }
    if (event.key === 'Backspace') {
        deleteLastDigit();
    }
    if (event.key === 'Escape') {
        clearCalculator();
    }
});

// Initial display update
updateDisplay();