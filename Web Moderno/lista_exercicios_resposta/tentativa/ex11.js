function isBi(ano) {
    if (ano % 4 == 0) {
        if (ano % 100 == 0 && ano % 400 != 0) { return false } else {
            return true
        }
    } else
        return false
}

// console.log(isBi(1000))
// console.log(isBi(1998))
// console.log(isBi(800))
// console.log(isBi(400))
// console.log(isBi(231))
console.log(isBi(500))