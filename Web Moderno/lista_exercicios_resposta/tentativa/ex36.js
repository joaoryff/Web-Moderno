var a = [2, 3, 4]
var b = 5
var c = 6

function cal(a, b) {
    vet = []
    a.forEach((m) => {
        vet.push(m = m * b);
    });
    return vet
}

function cal2(a, b) {
    vet = []
    if (b > 5) {

        a.forEach((m) => {
            m = m * b
            vet.push(m);
        });
    } else { vet = "Mult pequeno" }

    return vet
}


console.log(cal(a, b));
console.log(cal2(a, b));
console.log(cal2(a, c));