function intervalo(vet) {
    let soma = vet.reduce((t, n) => t + n, 0);
    media = soma / vet.length
        // console.log(soma)
    console.log(media)
}

intervalo([0, 1, 2, 3, -10, 15, 16, 20, 120])
intervalo([3, 10, 150, -16, 20, 120])