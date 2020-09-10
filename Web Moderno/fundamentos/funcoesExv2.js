//armanzenar na variavel

const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma funcao arrow
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

// implicito

const subtracao = (a, b) => a - b
console.log(subtracao(2,3))

const imp2 = a => console.log(a)
imp2('Legal!!!')