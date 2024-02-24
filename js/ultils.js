


// função de calculo do IMC
 export function calculateIMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
}


 export function notANumber(value) {
    return isNaN(value) || value == ""
}