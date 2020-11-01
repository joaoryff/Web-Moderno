function intervalo(vet) {
    cont = 0
    for (let i = 0; i < vet.length; i++) {

        if (vet[i] < 0) {
            cont++
        }
    }
    console.log(cont)
}

intervalo([0, 1, 2, 3, -10, 15, 16, 20, -120])
intervalo([3, 10, 150, -16, 20, 120])