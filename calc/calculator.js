const calcDisplay = document.getElementById('calc-display');
const solutionDisplay = document.getElementById('solution-display');

function clearDisplay() {
    calcDisplay.textContent = '';
    solutionDisplay.textContent = '0';
}

function appendToDisplay(value) {
    calcDisplay.textContent += value;
}

function calculateResult() {
    try {
        const result = eval(calcDisplay.textContent); 
        solutionDisplay.textContent = result;
    } catch {
        solutionDisplay.textContent = 'Error';
    }
}
