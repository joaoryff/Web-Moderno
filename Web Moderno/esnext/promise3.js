const { resolve } = require("path")

function gerarNumero(min, max) {
    if (min > max) {
        [max, min] = [min, max]
    }
    return new Promise(resolve =>{
        const fator =max -min +1
        const aleatorio =parseInt(Math.random() * fator)+ min
        resolve(aleatorio)
    })
}

gerarNumero(10,60)
.then(num=> num*10)
.then(numX10 => ` O Numero geredo foi ${numX10}`)
.then(console.log)