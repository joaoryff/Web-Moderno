function intervalo(vet) {
    // let vet = []
    max = vet[0]
    min = vet[0]
    for (let i = 0; i < vet.length; i++) {

        max = max < vet[i] ? vet[i] : max
        min = min > vet[i] ? vet[i] : min
    }
    console.log(`${max} maior numero  e ${min} eh o menor numero dentro do intervalo`)
}

intervalo([0, 1, 2, 3, 10, 15, 16, 20, 120])
intervalo([3, 10, 150, 16, 20, 120])