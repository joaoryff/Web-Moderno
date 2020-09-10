function Carro(veloMax = 200, delta = 5) {
    //privado    
    let velo = 0


    this.acelerar = function () {
        if (velo + delta <= veloMax) {
            velo += delta
        } else {
            velo = veloMax
        }
    }


    //metodo publico
// this publico
    this.getVelo = function () {
        return velo
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelo())

const ferrari =  new Carro(350,20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelo())


console.log(typeof Carro)
console.log(typeof ferrari)