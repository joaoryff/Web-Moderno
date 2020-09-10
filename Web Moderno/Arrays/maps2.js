const car =[
    '{"nome":"Borracha","preco":3.45}',
    '{"nome":"Caderno","preco":13.90}',
    '{"nome":"Lapisa","preco":41.22}',
    '{"nome":"Caneta","preco":7.50}',
]

const objt = json => JSON.parse(json)
const preco = produto => produto.preco

const result = car.map(objt).map(preco)
console.log(result)