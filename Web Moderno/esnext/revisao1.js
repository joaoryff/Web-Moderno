// let e const
{
    var a =3 //escopo de bloco roda fora
    let b =3 // nao tem...
    console.log(b)
}
console.log(a)

//template String
const prod = 'Ipad'
console.log(`${prod} eh caro`)

//Destructuring
const [l, e , ...tras] ="Cod3r"
console.log(l,e, tras)

const [x, , y] = [1,2,3]
console.log(x,y)

const {idade: i, nome} = {nome: 'Ana' , idade: 9}
console.log(i, nome)