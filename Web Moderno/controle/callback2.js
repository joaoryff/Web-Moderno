const notas= [7.7,6.5,5.2,8.9,3.6,7.1,9.0]

let Baixas = []
for (let i in notas) {
    if (notas[i] < 7) {
       Baixas.push(notas[i])        
    }
}

console.log(Baixas)

//com callBack
const Baixas2 = notas.filter(function(nota){
    return nota < 7
})

console.log(Baixas2)

const Baixas3 = notas.filter(nota => nota < 7)

console.log(Baixas3)