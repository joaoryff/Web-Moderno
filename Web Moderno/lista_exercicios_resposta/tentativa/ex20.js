const { Console } = require("console")

function notas(x) {

    cem = x / 100
    cem = parseInt(cem)
    x = x % 100

    cinquenta = x / 50
    cinquenta = parseInt(cinquenta)
    x = x % 50

    dez = x / 10
    dez = parseInt(dez)
    x = x % 10

    cinco = x / 5
    cinco = parseInt(cinco)
    x = x % 5

    um = x / 1
    um = parseInt(um)
    x = x % 1

    console.log('O minimo de notas para essa quantia eh:')
    if (cem >= 1) { console.log(`${cem} de R$100`) }
    if (cinquenta >= 1) { console.log(`${cinquenta} de R$50`) }
    if (dez >= 1) { console.log(`${dez} de R$10`) }
    if (cinco >= 1) { console.log(`${cinco} de R$5`) }
    if (um >= 1) { console.log(`${um} de R$1`) }

}
notas(375)
notas(55)