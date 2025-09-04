let display = document.querySelector("#display");
let firstInput = "";
let operators = "";
let secondeInput = "";

function appendToDisplay(input){
    firstInput += input;
    document.querySelector('#display').value = `${secondeInput} ${operators} ${firstInput}`
}

function appendToOperation(operator) {
    if (firstInput === '' ) return;
    if (secondeInput !== '') {
        calculate()
    }
    operators = operator;   
    secondeInput = firstInput;
    firstInput = '';
    document.querySelector('#display').value = `${secondeInput} ${operators} ${firstInput}` 
}

function calculate() {
    if (firstInput === '' || secondeInput === '') return;
    let result;
    let first = parseFloat(firstInput);
    let second = parseFloat(secondeInput);

    switch (operators) {
        case '+':
            result = first + second;
            break;
            case '-':
            result = second - first;
            break
            case '*':
            result = first * second;    
            break
            case '/':
                if (first === 0) {
                    alert("Cannot divide by zero");
                    return;
                }
            result = second / first;
            break
        default:
            break;
    }
    firstInput = result.toString();
    operators = '';
    secondeInput = '';
    document.querySelector('#display').value = result;
}
function clearDisplay() {
    firstInput = '';
    secondeInput = '';
    operators = '';
    document.querySelector('#display').value = '0';
}