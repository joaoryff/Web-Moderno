Number.prototype.entre = function (start, end) {
    return this >= start && this <= end
}

const imprimir = function (nota) {
    if (nota.entre(9, 10)) {
        console.log('Honra')
    } else if (nota.entre(7, 8.99)) {
        console.log('Aprovado')

    } else if (nota.entre(4, 6.99)) {
        console.log('Recuperacao')

    } else if (nota.entre(0, 3.99)) {
        console.log('Reprovado')
    }else {
        console.log("invalido")
    }
}

imprimir(9.5)
imprimir(8.5)
imprimir(7)
imprimir(4)
imprimir(0)
imprimir(-4)
imprimir(12)
