const clear = document.querySelector("#clear")
const display = document.querySelector(".display")
const numbers = document.querySelectorAll("#number")

const clearDisplay = () =>{
    display.innerHTML = ''
}

const showOperation = (e) =>{
    display.innerHTML += e.target.value;
}

clear.addEventListener("click", clearDisplay)
numbers.forEach(number => {
    number.addEventListener("click", showOperation)
})