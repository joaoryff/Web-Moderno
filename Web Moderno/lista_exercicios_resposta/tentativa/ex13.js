function isUtil(dia) {
    switch (dia) {
        case 1:
        case 7:
            {
                return "fim de semana";
            }

            break;
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return "Util"
            break;
        default:
            return "invalid"
            break;
    }
}

console.log(isUtil(1))
console.log(isUtil(2))
console.log(isUtil(3))
console.log(isUtil(4))
console.log(isUtil(5))
console.log(isUtil(6))
console.log(isUtil(7))
console.log(isUtil('a'))
console.log(isUtil(8))