const pessoa = {
    name:"Rebeca",
    idade:2,
    peso:13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave,valor]) => {
    console.log(`${chave}: ${valor}`)
    
});

Object.defineProperty(pessoa, 'dataNasci', {
    enumerable: true,
    writable: false,
    value: '01/01/2017'
})

pessoa.dataNasci = '05/02/2018'
console.log(pessoa.dataNasci)
console.log(Object.keys(pessoa))


const dest = {a: 1}
const o1 = {b:2}
const o2 = {c: 3, a:4}
const obj = Object.assign(dest,o1,o2)