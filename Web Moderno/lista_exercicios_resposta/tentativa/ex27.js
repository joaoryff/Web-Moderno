function criancas(h1, tx1, h2, tx2) {
    let cont = 0
    let criancas = [
        [h1, tx1],
        [h2, tx2]
    ]
    criancas[0] < criancas[1] ? (crianca1 = criancas[1], crianca2 = criancas[0]) : (crianca1 = criancas[0], crianca2 = criancas[1])
    criancas.push(crianca1)
    criancas.push(crianca2)

    if (crianca1[1] < crianca2[1]) {

        while (crianca1[0] > crianca2[0]) {
            crianca1[0] = crianca1[0] * (1 + crianca1[1])
            crianca2[0] = crianca2[0] * (1 + crianca2[1])

            cont++
        }
        console.log(` levara ${cont} anos para que a crianca mais baixa ultrapasse a mais alta `)
    } else {
        console.log('A crianca mais baixa  nunca vai ultrapassar a mais alta ')
    }
}

criancas(1, 0.05, 1.2, 0.01)
criancas(1.5, 0.05, 1.2, 0.01)
criancas(1.5, 0, 1.2, 0.1)