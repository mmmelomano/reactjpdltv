// Iteradores en JS
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']

// forEach // se ejecuta por cada elemento que hay en el arreglo 

//forEach - te permite acceder a cada elemento del Array
const arrayForeach = tecnologias.forEach(function(tech){
    return tech
})

//map - te permite crear un nuevo arreglo - Array
const arrayMap = tecnologias.map(function(tech){
    return tech
})

console.log(arrayForeach)
console.log(arrayMap)
