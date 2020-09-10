const jogos = [10, 20 ,9, 8, 30, 6, 2]
//const melhor_rodada = ?
const melhor_pontuação = jogos.indexOf(Math.max(...jogos))
//const pior_jogo = ?
const pior_pontuação = Math.min(jogos)
 
// console.log (`Melhor jogo da temporada na rodada ${melhor_rodada} com ${melhor_pontuação} pontos`)
// console.log (`Pior jogo da temporada na rodada com ${pior_pontuação} pontos`)
console.log (melhor_pontuação)