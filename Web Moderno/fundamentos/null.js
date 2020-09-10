
let valor
console.log(valor)
//console.log(valor2)

valor = null
console.log(valor)
//console.log(valor.toString()) //erro

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //naooo
console.log(!!produto.preco)

// delete melhor
console.log(produto)

produto.preco = null //sem preco
console.log(!!produto.preco)
console.log(produto)