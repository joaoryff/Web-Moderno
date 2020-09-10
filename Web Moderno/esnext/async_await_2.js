const { rejects } = require("assert")


function gerarNumero(min, max, numPro) {
    if (min > max) {
        [max, min] = [min, max]
    }
    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if (numPro.includes(aleatorio)) {
            reject('Numero repetido!')
        } else {

            resolve(aleatorio)
        }
    })
}

async function megasena(qtn) {
    try {
        const numeros = []
        for (let _ of Array(qtn).fill()) {
            numeros.push(await gerarNumero(1, 60, numeros))
        }
        return numeros
    } catch (e) {
        throw "que chato"
    }
}
// gerarNumero(1, 5, [1, 2, 4])
//     .then(console.log)
//     .catch(console.log)
megasena(15)
    .then(console.log)
    .catch(console.log)