let vInt = [1, 2, 3, 4]
let vStr = ['um', 'dois', 'tres', 'quatro']
let vDec = [0.5, 0.7, 0.8, 0.9]

function conc(...args) {
    // txt = []
    txt2 = []
        // txt = args.concat(args)

    for (let i = 0; i < args.length; i++) {
        // for (let j = 0; j < args[i].length; j++) {
        //     txt2 = args[i].concat(args[i][j])
        for (let j = 0; j < 4; j++) {

            txt2.push(args[i][j])
        }

    }





    // for (let i = 0; i < args.length; i++) {
    //     txt2 = a[i].push(b[i])
    // }
    // console.log(txt)
    console.log(txt2)
}


conc(vInt, vStr, vDec)





let vetorInteiro = [1, 2, 3, 4]
let vetorString = ['Arthur', 'Christian', 'Yuri', 'Galdino']
let vetorDouble = [1.1, 2.2, 3.3, 4.4]

function concatenar(...args) {
    resultado = []
    for (let i = 0; i < arguments.length; i++) {
        resultado = resultado.concat(arguments[i])
    }
    return resultado;
}

console.log(concatenar(vetorInteiro, vetorDouble))
console.log(concatenar(vetorDouble, vetorString))