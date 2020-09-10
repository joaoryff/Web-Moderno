const times = new Set()
times.add('Vasco')
times.add('Sao Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco') //repetido nao aceita

console.log(times)
console.log(times.size)
console.log(times.has('Vasco'))
console.log(times.has('vasco'))
times.delete('Vasco')
console.log(times.has('Vasco'))


const nomes = ['Raquel','Lucas','Julia', 'Lucas'] //remove repeticoes
const nomesSet = new Set(nomes)
console.log(nomesSet)