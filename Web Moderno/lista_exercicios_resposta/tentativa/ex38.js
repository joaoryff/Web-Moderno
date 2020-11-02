function odds(s, e) {
    var max = s < e ? e : s
    var min = s < e ? s : e
    vet = []
    for (min; min <= max; min++) {
        if (min % 2 != 0) {
            vet.push(min);
        }

    }

    console.log(vet)
}

odds(0, 100)
odds(1, 55)
odds(5, 1)