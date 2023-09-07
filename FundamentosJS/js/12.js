// Funciones - Function Declaration
/*function sumar() {
    console.log(2+2)
}

sumar()
*/

// Funciones - con parametros
/*function sumar(numero, numero2 = 0) { // lo que esta dentro de los parentesis son parametros
    console.log(numero + numero2)
    
}

sumar(10, 20) // argumentos
sumar(2, 3)
sumar(100)
sumar()
*/

// funciones que retornan valores
function sumar(numero = 0, numero2 = 0) {
    return {
        resultado: numero + numero2,
        mensaje: 'Hola Mundo'
    }
}

const {resultado, mensaje} = sumar(20, 30)

console.log(resultado)
console.log(mensaje)