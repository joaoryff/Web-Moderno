const tecn = new Map()
tecn.set('react', {framework: false})
tecn.set('angular', {framework:true})

console.log(tecn.react) //undefined
console.log(tecn.get(`react`).framework)

const chavesVariadas = new Map([
    [function () {}, 'Funcao'],
    [{}, 'Objeto'], [123, 'Numero'],
])

chavesVariadas.forEach((vl,ch)=> {
    console.log(ch,vl)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
chavesVariadas.set(456, 'b')
console.log(chavesVariadas)

