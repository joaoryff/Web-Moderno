const saudacao = 'Opa' //contexto lexico

function exec(){
    const saudacao = 'Falaa'
    return saudacao
}

const  cliente = {
    nome: 'Pedro',
    idade:32,
    peso: 90,
    endereco: {
        rua:'Rua Show',
        numero:123
    }

}

console.log(saudacao)
console.log(exec())
console.log(cliente)


