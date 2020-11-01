function parimpar(vet) {
    // let vet = []
    par = 0
    impar = 0
    for (let i = 0; i < vet.length; i++) {
        if (vet[i] % 2 == 0 && vet[i] != 0) {
            par++
        } else if (vet[i] == 0) {
            console.log(" um zero")
        } else {
            impar++
        }
    }
    console.log(`${par} numeros pares e ${impar} numeros impares`)
}

parimpar([0, 1, 2, 3, 4, 5, 6, 1555, 120])
parimpar([1, 2, 3, 4, 5, 6, 1555, 121])