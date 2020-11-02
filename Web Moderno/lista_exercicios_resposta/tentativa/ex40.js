function notas(vet) {
    alphaN = []
    vet.forEach(e => {

        if (e >= 0 && e < 5) {
            e = 'D'
        } else if (e >= 5 && e < 7) {
            e = 'C'
        } else if (e >= 7 && e < 9) {
            e = 'B'
        } else { e = 'A' }

        alphaN.push(e)

    });
    console.log(alphaN)
}

notas([7, 9, 5, 2, 6.9, 10, 4.9])