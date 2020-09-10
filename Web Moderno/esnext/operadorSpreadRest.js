//usar spread como objeto
const funcionario = {nome: 'Maria', salario: 12348.99}
const clone ={ativo: true, ...funcionario} //... traz tudo 

console.log(clone)
console.log(funcionario)

//usar spread com array
const groupA =['Joao','Pedro','Gloria']
const groupFinal = ['Maria', ...groupA, 'Rafaela'] //... espalhando spread
console.log(groupFinal)
