function test1(num) {
    if (num > 7)
        console.log(num)

    console.log('final')// sempre executa
}

 test1(6)
test1(8)

function test2(num) {
    if (num > 7); { //cuidado ';'
        console.log(num)
    }
}

test2(6)
test2(8)