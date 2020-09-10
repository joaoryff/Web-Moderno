function funcionarOuNao(valor, chaceErro){
    return new Promise((resolve,reject)=> {
        if(Math.random() <chaceErro){
            reject('Ocorreu erro')
        }else {
            resolve(valor)
        }
    })
}

funcionarOuNao('Testando...',0.5)
.then(v=>console.log(`valor: ${v}`))
.catch(err=> console.log(`Erro: ${err}`))