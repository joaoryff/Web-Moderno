const fab= ["Mercedes", "Audi", "BMW" ]

function imprimir(nome, indice) {
    console.log(`${indice + 1}.${nome}`)
    }

    fab.forEach(imprimir)

    fab.forEach(function(a){
        console.log(a)
    })

    fab.forEach(a =>
        console.log(a)) //arrow
