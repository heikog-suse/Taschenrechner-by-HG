function appendNumber(number) {
    document.getElementById('display').value += number;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function setOperation(operator) {
    document.getElementById('display').value += operator;
}

function calculateResult() {
    try {
        const result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (e) {
        document.getElementById('display').value = 'Error';
    }
}