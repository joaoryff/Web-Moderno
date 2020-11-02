var a = [12, 2566, 34]
var b = ['a2bn', 'b3v', 'c']

function troca(a, b) {

    for (let i = 0; i < a.length; i++) {
        let acount = a[i].toString().length

        a[i] = `${a[i]} ${b[i]}`
        b[i] = a[i].substring(acount, 0)
        a[i] = a[i].substring(a[i].toString().length + 1, acount)

    }

    console.log(`Vetor a: ${a}`)
    console.log(`Vetor b: ${b}`)
}

troca(a, b)