const f = [];

function fact(n) {
    if (n == 0 || n == 1) {
        return 1
    }
    if (f[n] > 0) {
        return f[n]
    }

    return f[n] = fact(n - 1) * n
}

console.log(fact(5))