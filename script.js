let number1 = ""
let number2 = ''
let sym = ''
let operation = ''

const clear = document.querySelector("#clear")
const display = document.querySelector(".display")
const numbers = document.querySelectorAll("#number")
const del = document.querySelector("#delete")
const Symbols = document.querySelectorAll("#symbol")
const equal = document.querySelector("#equal")

const clearDisplay = () =>{
    display.innerHTML = ''
    number1 = ""
    number2 = ""
    sym = ""
}

const showOperation = (e) =>{
    display.innerHTML += e.target.value;
    if (sym === '')
        number1 += e.target.value
    else 
        number2 += e.target.value
    operation += e.target.value
}

const deleteNumber = () =>{
    operation = operation.slice(0, -1)
    display.innerHTML = display.innerHTML.slice(0, -1)    
}

const saveOperation = (e) =>{
    sym = e.target.value
    display.innerHTML += e.target.value;
    operation += e.target.value
}

const showResult = () =>{
    if (number1 == '' || number2 == '' || sym == '')
        display.innerHTML = ''
    else 
        display.innerHTML = solveOperation(number1, sym, number2)
}

const solveOperation = (num1, sym, num2) =>{
    if(sym === '+')
        add(num1, num2)
    else if(sym === '-')
        substract(num1, num2)
    else if (sym === '/')
        division(num1, num2)
    else if (sym === '*')
        multiplication(num1, num2)
}

clear.addEventListener("click", clearDisplay);

numbers.forEach(number => {
    number.addEventListener("click", showOperation)
});

del.addEventListener("click", deleteNumber);
Symbols.forEach(symbol => {
    symbol.addEventListener("click", saveOperation)
})

equal.addEventListener("click", showResult)