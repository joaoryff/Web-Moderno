function anuidade(t, val) {
    if (t > 0 && t <= 12) {
        console.log((val * (1 + 0.05) ** (t - 1)).toFixed(2))
    } else {
        console.log('Mes invalido')
    }
}

anuidade(1, 100)
anuidade(2, 100)
anuidade(3, 100)
anuidade(4, 100)
anuidade(12, 100)
anuidade(13, 100)
anuidade(0, 100)