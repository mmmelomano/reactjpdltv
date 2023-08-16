// Ovjetos - Manipulacion

const producto = {
    nombre : "tablet",
    precio : 300,
    disponible: true
}

//con freeze no te permite modificar las propiedades, ni añadir ni eliminar
//Object.freeze(producto)

//con seal permite reescribir las propiedades existentes, pero no añadir ni eliminar
//Object.seal(producto)

//reescribir un valor
producto.nombre = "monitor curvo"

//si no existe lo va a añadir
producto.imagen = "imagen.jpg"

//eliminar un valor
delete producto.disponible

console.table(producto)