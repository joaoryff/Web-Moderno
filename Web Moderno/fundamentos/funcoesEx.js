//sem retorno

function imprimirSoma(a, b) {
    console.log(a + b)
}
imprimirSoma(2,3)
imprimirSoma(2)   //aceita seg undefined
imprimirSoma(2,10,4)   //ignorar ultima
imprimirSoma() 

//retorno

function soma (a, b= 1){
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))