//Unir 2 Objetos en javascript

const producto = {
    nombre: "tablet",
    precio: 300,
    disponible: true
}

const cliente = {
    nombre: 'Juan',
    premium: true 
}

//const nuevoObjeto = Object.assign(producto, cliente) // no
const nuevaObjeto2 = {
    producto: {...producto},
    cliente: {...cliente}
}
console.log(nuevaObjeto2)
console.log(cliente)
console.log(producto)