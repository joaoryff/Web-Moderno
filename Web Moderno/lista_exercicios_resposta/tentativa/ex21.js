function plano(idade) {
    let extra
    if (idade < 10) {
        extra = 80
    } else if (idade >= 10 && idade <= 30) {
        extra = 50
    } else if (idade > 30 && idade <= 60) {
        extra = 95
    } else {
        extra = 130
    }
    console.log(100 + extra)
}

plano(1)
plano(10)
plano(30)
plano(50)
plano(60)
plano(90)
    // console.log(10)
    // console.log(11)
    // console.log(30)
    // console.log(35)
    // console.log(60)
    // console.log(61)