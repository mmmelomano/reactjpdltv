const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']
const numeros = [10, 20, 30]


//Filter
nuevoArray = tecnologias.filter(tech => tech !== 'React')

//comprobar si un elemento existe en el Array
//const resultado = tecnologias.includes('GraphQL')

//Some - Devuelve si al menos uno cumple la condicion
//const resultado = numeros.some(numero > 15)

//Find - Devuelve el primer elemento que cumpla la condicion
//const resultado = numeros.find( numero => numero > 5)

//Every - Retorna true o false si todos cumplen la condicion 
//const resultado = numeros.every( numero => numero > 9)

//Reduce 
//const resultado = numeros.reduce( (total, numero) => numero + total , 0 )

//Filter - Crea un nuevo array en base a una condicion 
//const resultado = tecnologias.filter( tech => === 'Node.js')
//const resultado = numeros.filter( numero => numero !== 10)

//forEach se usa solo cuando se quira iterar 
tecnologias.forEach(  (tech, index) => console.log(index))

//Crear un nuevo array
const arrayMap = tecnologias.map( tech => tech )

console.log(resultado)