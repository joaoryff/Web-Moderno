const aprovados = ['Agatha', 'Aldo','Daniel','Raquel']

aprovados.forEach(function(name,indice,array) {
console.log(`${indice +1} ) ${name}`)
console.log(array)

})

aprovados.forEach(name => console.log(name))

const exibir =aprovado => console.log(aprovado)
aprovados.forEach(exibir)


Array.prototype.forEach2 = function(callback){
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i,this)
        
    }
}

aprovados.forEach2(function(name,indice, array) {
    console.log(`${indice +1} ) ${name} /// [${array}]`)
})

