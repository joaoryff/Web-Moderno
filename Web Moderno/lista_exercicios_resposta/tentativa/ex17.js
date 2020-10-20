function newSal(sal, plan) {
    switch (plan) {
        case 'A':
        case 'a':
            return sal * 1.1
        case 'B':
        case 'b':
            return sal * 1.15
        case 'C':
        case 'c':
            return sal * 1.2


        default:
            return 'Plano nao existe'

    }
}
console.log(newSal(1000, 'a'))
console.log(newSal(1000, 'B'))
console.log(newSal(1000, 'c'))
console.log(newSal(1000, 'd'))