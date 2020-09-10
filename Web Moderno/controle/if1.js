function soBoaNota(nota){
    if(nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}

soBoaNota(8.1)
soBoaNota(6.1)

function seVouF(valor){
    if(valor) {
        console.log('Eh vero ' + valor)
    }
}

seVouF()
seVouF(null)
seVouF(undefined)
seVouF(NaN)
seVouF('')
seVouF(0)
seVouF(-1)
seVouF(' ')
seVouF('?')
seVouF([])
seVouF([1,2])
seVouF([{}])