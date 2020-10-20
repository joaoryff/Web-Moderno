let j = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"

function ex8(j) {
    let pontos = j.split(", ")
    let record = 0
    let piorJogo = 1
    let minP = pontos[0]
    let maxP = pontos[0]

    for (let i = 1; i < pontos.length; i++) {
        if (pontos[i] > maxP) {
            maxP = pontos[i]
            record++
        } else if (pontos[i] < minP) {
            minp = pontos[i]
            piorJogo = i + 1;
        }

    }
    return [record, piorJogo]
}

console.log(ex8(j))