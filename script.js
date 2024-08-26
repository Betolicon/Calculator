let number1 = ""
let number2 = ''
let sym = ''
let operation = ''
let result = false
let finalResult = ''
let number1IsPercent = false
let number2IsPercent = false

const clear = document.querySelector("#clear")
const display = document.querySelector("#display")
const numbers = document.querySelectorAll("#number")
const del = document.querySelector("#delete")
const Symbols = document.querySelectorAll("#symbol")
const equal = document.querySelector("#equal")
const percent = document.querySelector("#percent")
const decimal = document.querySelector("#decimal")

const clearDisplay = () =>{
    display.innerHTML = ''
    number1 = ""
    number2 = ""
    sym = ""
    operation = ""
    result = false
    number1IsPercent = false
    number2IsPercent = false
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
    if(operation.length == 0)
        clearDisplay()
    else if (operation.includes('+') || operation.includes('-') || operation.includes('/') || operation.includes('*'))
        number2 = number2.slice(0, 1)
    else
        number1= number1.slice(0, -1)
}

const saveOperation = (e) =>{
    if(operation.includes('+') || operation.includes('-') || operation.includes('/') || operation.includes('*')){
      display.innerHTML = operation
}
    else{   
        sym = e.target.value
        display.innerHTML += e.target.value;
        operation += e.target.value
    }
}

const showResult = () =>{
    if (number1 == '' || number2 == '' || sym == '')
        clearDisplay()
    else if (operation.includes(number1) && operation.includes(sym) && operation.includes(number2)) {
        result = true
        finalResult = display.innerHTML = solveOperation(number1, operation, number2).toFixed(2)
        operation = ''
        number1 = ''   
        number1 = finalResult 
        operation = number1     
        number2 = ''
        sym = ''
    }
}

const changeNumber = (number) =>{
    let numAux = 0
    numAux = parseFloat(number)
    number = ''
    number += numAux/ 100;
    display.innerHTML = ''
    display.innerHTML += number;
    operation = operation.replace(numAux, number)
    return number
}

const convert = () =>{
    if(number1 != "" && number1IsPercent == false){
        number1 = changeNumber(number1)
        number1IsPercent = true
    }
    else if(number2 != '' && number2IsPercent == false){
        number2 = changeNumber(number2)
        number2IsPercent = true
    }

}

const add = (number1, number2) =>{
    return number1 + number2
}

const substract = (number1, number2) =>{
    return number1 - number2
}

const division = (number1, number2) =>{
    if (number2 == 0){
        clearDisplay()
    display.innerHTML = 'Dude, WTF???' }
    else
        return number1 / number2
}

const multiplication = (number1, number2) =>{
    return number1 * number2
}

const solveOperation = (num1, sym, num2) =>{
    if(sym.includes('+'))
        return add(parseFloat(num1), parseFloat(num2))
    else if(sym.includes('-'))
        return substract(parseFloat(num1), parseFloat(num2))
    else if (sym.includes('/'))
        return division(parseFloat(num1), parseFloat(num2))
    else if (sym.includes('*'))
        return multiplication(parseFloat(num1), parseFloat(num2))
}

const addDecimal = () =>{
    if(number1 != '' && !number1.includes('.')){
        number1 += '.'
        operation += '.'
        display.innerHTML += '.'
    }
    else if (number2 != '' && !number2.includes('.')){
        number2 += '.'
        operation += '.'
        display.innerHTML += '.' 
}
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

percent.addEventListener("click", convert)

decimal.addEventListener("click", addDecimal)