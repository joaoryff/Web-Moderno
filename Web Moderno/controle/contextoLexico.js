const valor = 'global'

function minha(){
    console.log(valor)
}

function exec(){
    const valor ='local'
    minha()
}

exec()