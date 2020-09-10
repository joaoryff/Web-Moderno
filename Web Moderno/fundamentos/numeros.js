const peso1=1.0
const peso2= Number('2.3')

console.log(peso1,peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avak1=9.871
const avak2=6.871

const total= avak1*peso1 + avak2 *peso2
const media= total/ (peso1+peso2)
console.log(media.toFixed(2))
console.log(media.toString())
console.log(media.toString(2)) //binario
console.log(media.toString(10)) 

console.log(typeof media)
console.log(typeof Number)


