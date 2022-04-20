const output = document.querySelector('.output')

const numberButtons = document.querySelectorAll('.number')
const numberButtonArray = Array.from(numberButtons)
const symbolButtons = document.querySelectorAll('.symbol')
const symbolButtonArray = Array.from(symbolButtons)
const modifierButtons = document.querySelectorAll('.modifier')
const modifierButtonsArray = Array.from(modifierButtons)
const allClear = document.querySelector('.clear-all')
const clearButton = document.querySelector('.clear')

let screenDisplay = ''
const wholeNumbersInput = []
let previousSymbolPressed = ''
let calculationResult = ''
const buttonsPressed = []

numberButtonArray.forEach(button => {
    button.addEventListener('click', () => {
        screenDisplay += button.value
        output.innerText = screenDisplay 
        buttonsPressed.unshift(button) 
        allClear.classList.add('hide')
        clearButton.classList.remove('hide')
    })
})

symbolButtonArray.forEach(button => {
    button.addEventListener('click', () => {
        const previousButton = buttonsPressed[0]
        const previousButtonCheck = previousButton.classList.contains('symbol')
        if(!previousButtonCheck) {
            const wholeNumber = parseFloat(screenDisplay)
            wholeNumbersInput.unshift(wholeNumber)
            console.log(screenDisplay)
            console.log(wholeNumbersInput)
            screenDisplay = ''

            if(previousSymbolPressed === '+') {
                calculationResult =  wholeNumbersInput[1] + wholeNumbersInput[0]
                wholeNumbersInput.unshift(calculationResult)
                output.innerText = calculationResult
            }
            if(previousSymbolPressed === '-') {
                calculationResult =  wholeNumbersInput[1] - wholeNumbersInput[0]
                wholeNumbersInput.unshift(calculationResult)
                output.innerText = calculationResult
            }
            if(previousSymbolPressed === 'X') {
                calculationResult =  wholeNumbersInput[1] * wholeNumbersInput[0]
                wholeNumbersInput.unshift(calculationResult)
                output.innerText = calculationResult
            }
            if(previousSymbolPressed === '/') {
                calculationResult =  wholeNumbersInput[1] / wholeNumbersInput[0]
                wholeNumbersInput.unshift(calculationResult)
                output.innerText = calculationResult
            }
            if(previousSymbolPressed === '%') {
                calculationResult =  wholeNumbersInput[0] / 100
                wholeNumbersInput.unshift(calculationResult)
                output.innerText = calculationResult
            }
        }
        previousSymbolPressed = button.value   
        buttonsPressed.unshift(button)     
    })
})

modifierButtonsArray.forEach(button => {
    button.addEventListener('click', () => {
        const buttonValue = button.value
        if(buttonValue === '%'){ 
            screenDisplay = screenDisplay / 100
            output.innerText = screenDisplay
        }
        if(buttonValue === '+/-') {
            screenDisplay = -screenDisplay
            output.innerText = screenDisplay
        }
        if(buttonValue === '.') {
            screenDisplay += button.value
            output.innerText = screenDisplay
        }
    })
})

allClear.addEventListener('click', () => {
    screenDisplay = ''
    previousSymbolPressed = ''
    wholeNumbersInput.length = 0
    calculationResult = ''
    buttonsPressed.length = 0
    output.innerText = 0
})

clearButton.addEventListener('click', () => {
    screenDisplay = ''
    output.innerText = 0
    allClear.classList.remove('hide')
    clearButton.classList.add('hide')
})