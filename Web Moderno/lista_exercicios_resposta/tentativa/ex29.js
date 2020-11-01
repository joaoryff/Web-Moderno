function intervalo(vet) {
    // let vet = []
    dentro = 0
    fora = 0
    for (let i = 0; i < vet.length; i++) {
        // if (vet[i]>=10 && vet[i] != 0) {
        //     dentro++
        // } else {
        //     fora++
        // }
        vet[i] >= 10 && vet[i] >= 20 ? dentro++ : fora++
    }
    console.log(`${dentro} numeros dentro do intervalo e ${fora} numeros fora do internvalo`)
}

intervalo([0, 1, 2, 3, 10, 15, 16, 20, 120])
intervalo([3, 10, 15, 16, 20, 120])