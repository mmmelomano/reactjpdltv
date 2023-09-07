// Operaciones en los Arreglos

const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']

//Añadir elementos al Array
//tecnologias.push('GraphQL') // Añade al final del Array       //no 
//tecnologias.unshift('GraphQL') // añade al inicio del Array   //no

//esta es la forma correcta
//const nuevoArreglo = [...tecnologias, 'GraphQL'] //añadir al final     //recomendado
//const nuevoArreglo = ['GraphQL' , ...tecnologias] //añadir al inicio   //recomendado

//eliminar elementos del Array

//estos eliminan el arreglo original asi que no se usan con React
//tecnologias.pop() //elimina del final
//tecnologias.shift() //elimina del inicio
//tecnologias.splice(2, 3) // primer valor indica a partir de que numero eliminar // segundo valor indica el numero a eliminar

//forma recomendada //no eliminan el arreglo original sino que crean uno nuevo
//const nuevoArray = tecnologias.filter(function(tech){
//  return tech !=== 'React'})
   
//reemplazar del Array
tecnologias[0] = 'GraphQL'

const nuevoArray = tecnologias.map(function(tech) {
    if(tech === 'HTML') {
        return 'GraphQL'
    } else{
        return tech
    }
})

console.table(tecnologias)
console.table()