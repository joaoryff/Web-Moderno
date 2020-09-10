
const imprimir = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Honra')
            break
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperacao')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Invalido')
    }
}

imprimir(9.5)
imprimir(8.5)
imprimir(7)
imprimir(4)
imprimir(0)
imprimir(-4)
imprimir(12)
