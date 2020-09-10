const prod = [
    { nome: 'Note', preco: 2499, fragil: true },
    { nome: 'Ipad', preco: 4199, fragil: false },
    { nome: 'Vidro', preco: 12.49, fragil: true },
    { nome: 'Plastico', preco: 18.99, fragil: true }
]

console.log(prod.filter(function (p) {
    return p.preco > 2400
}))

const caro = prod => prod.preco>= 500
const fragil = prod => prod.fragil


console.log(prod.filter(caro).filter(fragil))

console.log(prod.map(a=>a.preco))

const sum = prod.map(a=> a.preco).reduce(function(acumula, atual){
    console.log(acumula,atual)
    return acumula + atual
}, 0)

console.log(sum)

const todosFragil = (res,fragil) => res && fragil
console.log(prod.map(a=>a.fragil).reduce(todosFragil))

const algumFragil = (res,fragil) => res || fragil
console.log(prod.map(a=>a.fragil).reduce(algumFragil))


