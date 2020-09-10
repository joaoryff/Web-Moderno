//literal
const obj1 = {}
console.log(obj1)

// Object JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// constructore
function Produto (nome, preco, desc){
    this.nome = nome
    this.getPrecoDesc = () =>{
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notea', 2897.99, 0.25)
console.log(p1.getPrecoDesc(), p2.getPrecoDesc())

//factory

function criarFunc(nome, salBase, faltas) {
    return {
        nome,
        salBase,
        faltas,
        getSal() {
            return (salBase /30) * (30 - faltas)
        }
    }
}

const f1 = criarFunc('Joao', 7980,4)
const f2 = criarFunc('Maria', 11400,1)
console.log(f1.getSal(), f2.getSal())

// Object.create

const filha = Object.create(null)
filha.nome ='Ana'
console.log(filha)

// JSON

const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)