let number1 = ""
let number2 = ''
let sym = ''
let operation = ''
let result = false
let finalResult = ''

const clear = document.querySelector("#clear")
const display = document.querySelector("#display")
const numbers = document.querySelectorAll("#number")
const del = document.querySelector("#delete")
const Symbols = document.querySelectorAll("#symbol")
const equal = document.querySelector("#equal")

const clearDisplay = () =>{
    display.innerHTML = ''
    number1 = ""
    number2 = ""
    sym = ""
    operation = ""
    result = false
    finalResult = ""
}

const showOperation = (e) =>{
    display.innerHTML += e.target.value;

    if (sym === '' && result == false)
        number1 += e.target.value
    else if(result == false)
        number2 += e.target.value
    else if(result == true){ 
        number2 += e.target.value
    }

    operation += e.target.value
}

const deleteNumber = () =>{
    operation = operation.slice(0, -1)
    display.innerHTML = display.innerHTML.slice(0, -1)    
}

const saveOperation = (e) =>{
    if(result == false)
        sym = e.target.value
    else{
        operation = ''
        number1 = ''        
        number2 = ''
        sym = ''
        number1 += finalResult
        sym = e.target.value
        operation += number1 
        operation += sym
    }

    display.innerHTML += e.target.value;
    operation += e.target.value
}

const showResult = () =>{
    if (number1 == '' || number2 == '' || sym == '')
        display.innerHTML = ''
    else {
        result = true
        finalResult = display.innerHTML = solveOperation(number1, sym, number2)
        console.log(finalResult)
    }
}

const add = (number1, number2) =>{
    return number1 + number2
}

const substract = (number1, number2) =>{
    return number1 - number2
}

const division = (number1, number2) =>{
    if (number2 == 0)
        return 'Dude, WTF???'
    return number1 / number2
}

const multiplication = (number1, number2) =>{
    return number1 * number2
}

const solveOperation = (num1, sym, num2) =>{
    if(sym === '+')
        return add(parseInt(num1), parseInt(num2))
    else if(sym === '-')
        return substract(parseInt(num1), parseInt(num2))
    else if (sym === '/')
        return division(parseInt(num1), parseInt(num2))
    else if (sym === '*')
        return multiplication(parseInt(num1), parseInt(num2))
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