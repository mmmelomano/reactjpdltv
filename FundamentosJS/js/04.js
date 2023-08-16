//Objetos

const producto = {
    nombre: "tablet",
    precio: 300,
    disponible: true
}

console.log(producto)
console.table(producto)

//sintaxis de punto
console.log(producto.nombe)
console.log(producto.precio)
console.log(producto.disponible)

//Destructuring (sacar el valor de una estructura)
//se puede crear una variable de una no existente
const {nombre,precio,disponible} = producto
console.log(nombre)
console.log(precio)
console.log(disponible)

//Object Literal Enhacement
const autenticado = true
const usuario = "Juan"

const nuevoObjeto = {
    autenticado,
    usuario
}

console.log(nuevoObjeto)