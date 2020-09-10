//Closure eh o escopo craido quandop uma funcao eh declarado (fechamento)

const x = 'Global'

function fora() {
    const x ='Local'
    function dentro() {
        return x
    }
    return dentro
}

const minha =fora ()
console.log(minha())