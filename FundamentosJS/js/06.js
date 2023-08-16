// Objetos - Destructuring con 2 o mas objetos

const producto = {
    nombre: "tablet",
    precio: 300,
    disponible: true
}

const cliente = {
    nombre: 'Juan',
    premium: true 
}


const { nombre, precio, disponible} = producto
// este codigo sera util para integrar una api y hayan variables con el mismo nombre
const {nombre: nombreCliente, premium} = cliente

console.log(nombre)
console.log(nombreCliente)

