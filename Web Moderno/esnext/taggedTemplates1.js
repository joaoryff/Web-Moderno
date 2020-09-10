//tagged templates
function tag(partes, ...valores){
console.log(partes)
console.log(valores)
return 'Outra string'
}

const aluno = 'Gui'
const situacao = 'Aprovada'
console.log(tag `${aluno} esta ${situacao}.`)
