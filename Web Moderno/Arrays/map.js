const nums =[1,2,3,4,5]

let resul  =nums.map(function(e) {
    return e * 20.36
})

console.log(resul)

//map muda todos os elementos do array, gera um novo array


const soma10 = e => e + 10
const triplo = e => e * 3.37
const money = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

resul = nums.map(soma10).map(triplo).map(money)
console.log(resul)