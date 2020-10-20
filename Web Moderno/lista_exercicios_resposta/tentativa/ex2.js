function ex2(l1, l2, l3) {
    if (l1 == l2 || l1 == l3 || l2 == l3) {
        if (l1 == l2 && l2 == l3) {
            console.log('equilatero')
        } else
            console.log('isoceles')
    } else
        console.log('escaleno')
}
ex2(4, 5, 6)
ex2(5, 5, 5)
ex2(4, 4, 6)
ex2(4, 5, 5)
ex2(4, 5, 6)