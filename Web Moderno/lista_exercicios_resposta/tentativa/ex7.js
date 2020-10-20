function ex7(a, b, c) {
    let r = []

    let delta = (b ** 2) - (4 * a * c)
    if (delta < 0) {
        return "Delta negativo"
    }
    r1 = (-b + delta ** (1 / 2)) / 2 * a
        // console.log(r1)
    r2 = (-b - delta ** (1 / 2)) / 2 * a
        // console.log(r2) 

    r.push(r1)
    r.push(r2)
    return r
}

console.log(ex7(3, -5, 12))
console.log(ex7(1, 3, 2))
console.log(ex7(3, 1, 2))

// function bhaskara(ax2, bx, c) {
//     let resultados = []
//     let delta = (bx ** 2) - (4 * ax2 * c)
//     if (delta < 0) {
//         return "Delta é negativo"
//     }
//     let x1 = (-bx + Math.sqrt(delta)) / 2 * ax2
//     let x2 = (-bx - Math.sqrt(delta)) / 2 * ax2
//     resultados.push(x1)
//     resultados.push(x2)
//     return resultados
// }

// console.log(bhaskara(1, 3, 2))
// console.log(bhaskara(3, 1, 2))