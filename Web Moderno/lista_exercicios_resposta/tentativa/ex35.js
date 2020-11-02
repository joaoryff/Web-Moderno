var vpilha = [1, 2, 3, 4, 5]
var vadd = [6, 7, 8, 9, 10]

function conc(...args) {

    txt2 = []

    for (let i = 0; i < args.length; i++) {

        for (let j = 0; j < args[i].length; j++) {

            txt2.push(args[i][j])
        }

    }

    console.log(txt2)
}


conc(vpilha, vadd)

let vetorPilha = [1, 2, 3, 4, 5]
let vetorAdiciona = [6, 7, 8, 9, 10]

function adicionaVetor(vetorInicial, vetorAdicionar) {
    for (let i = 0; i < vetorAdicionar.length; i++) {
        console.log(vetorAdicionar[i])
        vetorInicial.push(vetorAdicionar[i])
    }
    console.log('Vetor adicionado: ' + vetorAdicionar)
    console.log('Vetor resultado: ' + vetorInicial)
}

adicionaVetor(vetorPilha, vetorAdiciona)