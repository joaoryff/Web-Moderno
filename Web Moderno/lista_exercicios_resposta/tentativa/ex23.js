function calcularNotaFinal(codAluno) {
    let notas = []

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    for (let index = 0; index < 3; index++) {
        notas.push(getRandomIntInclusive(0, 10))
    }
    // notas.push(nota2)
    // notas.push(nota3)
    notas.sort((a, b) => a < b ? 1 : -1)

    let mediaFinal = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3) / 10
    console.log(`Código do Aluno: ${codAluno}. Notas: ${notas[0]}, ${notas[1]}, ${notas[2]}. A media final eh ${mediaFinal}. ${mediaFinal < 5 ? 'Reprovado.' : 'Aprovado.'}`)
}

calcularNotaFinal(123)