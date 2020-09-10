// const prod1= {
//     nome:'..',
//     preco:45
// }

function criarProduto(nome,preco){
    return{
        nome,
        preco, 
        desconto: 0.1
    }
}
console.log(criarProduto('Note',2999.95))
console.log(criarProduto('Ipad',1999.95))
console.log(criarProduto('Note',2999.95))
console.log(criarProduto('Note',2999.95))
console.log(criarProduto('Note',2999.95))