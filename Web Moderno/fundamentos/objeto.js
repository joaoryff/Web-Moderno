const prod1 = {}  //objeto {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 49998.90
prod1['Desconto legal'] = 0.40 //evita com espaco

console.log(prod1)

const prod2 = {
    nome: 'Camisa polo',
    preco: 79.9,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
}

console.log(prod2)

// {"nome": "Camisa Polo", "Preco": 79.90} //Json