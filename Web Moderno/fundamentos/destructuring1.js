const pessoa ={
    nome: 'Ana',
    idade: 5,
    endereco: {
        rua: 'eglise',
        numero: 333
    }
}

const { nome, idade} = pessoa
console.log(nome, idade)

const { nome: n, idade: i} = pessoa
console.log(n,i)

const { sobrenome, bemHumorada = true} = pessoa

console.log (sobrenome, bemHumorada)


const {endereco: {rua, numero, cep}} = pessoa
console.log(rua, numero, cep)

