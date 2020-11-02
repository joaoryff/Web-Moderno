// var n = 9
// var a1 = 3
// var r = 3
// var q = 5

// function PA(n, a1, r) {
//     vet = []

//     res = a1

//     for (let i = 0; i < n; i++) {
//         vet.push(res)
//         res = res * r
//     }

//     console.log(vet)
//     console.log(res)
// }




// PA(n, a1, r)

// function PG(n, a1, q) {
//     vet = []

//     res = a1

//     for (let i = 0; i < n; i++) {
//         vet.push(a1 * q ** i)

//     }
//     res = a1 * q.

//     console.log(vet)
//     console.log(res)
// }

// PG(n, a1, q)




function pA(n, a1, r) {
    for (let i = 0; i < n; i++) {
        console.log(a1 + r * i)
    }
    console.log('Soma: ' + (n * (a1 + (a1 + ((n - 1) * r)))) / 2)
}

function pG(n, a1, r) {
    //console.log(a1)
    for (let i = 0; i < n; i++) {
        console.log(a1 * (r ** i))
    }
    console.log('Soma: ' + (a1 * ((r ** n) - 1)) / (r - 1))
}

pA(10, 10, 15)
console.log('----------------')
pG(10, 5, 3)