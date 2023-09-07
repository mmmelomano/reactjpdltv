// Compararacion y Operador Estricto

const numero1 = 20
const numero2 = "20"

/*
== ( comparacion pero no es estricto)
=== (comparacion estricta - Revisa valor y tipo de dato)
*/ 

console.log(typeof numero1)
console.log(typeof numero2)

if(numero1 == numero2) {
    console.log('Si, son iguales')
} else {
    console.log('No, no son iguales')
}

const autenticado = true

if (autenticado === true) {
    console.log('si esta autenticado')
}