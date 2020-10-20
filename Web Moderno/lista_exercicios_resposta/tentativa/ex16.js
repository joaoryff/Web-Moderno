function cal(x, y, op) {
    switch (op) {
        case '+':
            return x + y
        case '-':
            return x - y
        case '*':
            return x * y
        case '/':
            return x / y
            break;

        default:
            return 'Op invalido'
            break;
    }
}

console.log(cal(5, 6, '+'))
console.log(cal(5, 6, '-'))
console.log(cal(5, 6, '*'))
console.log(cal(5, 6, '/'))
console.log(cal(5, 6, '%'))