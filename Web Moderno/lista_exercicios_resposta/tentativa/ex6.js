function f1(ci, tx, t) {
    r = ci + ci * tx * t
    console.log(r)
}

function f2(ci, tx, t) {
    r = ci * (1 + tx) ** t
    console.log(r)
}



f1(1000, 0.1, 5)
f2(1000, 0.1, 5)