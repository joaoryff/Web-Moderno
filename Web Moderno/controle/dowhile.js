function getrandow (min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1
do
 {
    opcao = getrandow(-1, 10)
    console.log(`Opcao escolhida foi ${opcao}.`)
}while (opcao !=-1)

console.log('Ate a proxima!')