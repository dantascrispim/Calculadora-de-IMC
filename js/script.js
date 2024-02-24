//Variaveis
import { Modal } from './modal.js'
import { AlertErro } from './alert.js'
import {calculateIMC, notANumber } from './ultils.js'

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')



/*const modalWrapper = document.querySelector('.modal-wrapper')
const modalMessage = document.querySelector('.modal .title span')
const modalBtnClose = document.querySelector('.modal button.close')*/


inputHeight.oninput = () => {AlertErro.close()}
inputWeight.oninput = () => {AlertErro.close()}

form.onsubmit = event => {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value //value, valores atribuidos aos inputs


    const weightOrHeightIsNotAnmber = notANumber(weight) || notANumber(height)


    if(weightOrHeightIsNotAnmber) {
        AlertErro.open()
        return;
    }
    
    AlertErro.close()

    const result = calculateIMC(weight, height)    // resultado da funcaçã IMC 
    displayResultMessage(result)
    
        // eventos

            
}


function displayResultMessage(result) {
    const message = ` Seu IMC é de ${result}`

    Modal.message.innerText = message
    Modal.open()
}



    