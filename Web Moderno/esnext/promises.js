const { resolve } = require("path");

function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase) //so aceita um parametro, se for enviar mais tem que fazer um objeto
        }, segundos*1000)
    })
}

falarDepoisDe(3, 'Que legal!')
.then((frase) => frase.concat('?!?'))
.then(outraFrase => console.log(outraFrase))
.catch(e=> console.log(e))