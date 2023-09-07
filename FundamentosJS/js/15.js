const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']

/*const nuevoArray = tecnologias.map(function(tech) {
    if (tech === 'HTML') {
        return 'GraphQL'
    } else {
        return tech
    }
})*/

// !== diferente a === igual a
const nuevoArray2 = tecnologias.filter(tech => tech !== 'React')

//console.log(nuevoArray)
console.log(nuevoArray2)

