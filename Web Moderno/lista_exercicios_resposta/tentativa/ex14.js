// function name(fruta) {
//     switch (fruta) {
//         case 'maca':
//             {

//                 return 'Não vendemos esta fruta aqui'
//                 break
//             }

//         case 'kiwi':
//             {

//                 'Estamos com escassez de kiwis'
//                 break
//             }
//         case 'melancia':
//             {

//                 'Aqui está, são 3 reais o quilo';
//                 break
//             }
//         default:
//             {

//                 'essa fruta nao existe no pais'
//             }

//     }
// }

// console.log(name('maca'))
// console.log(name('kiwi'))
// console.log(name('melancia'))
// console.log(name('banana'))
function venderFruta(fruta) {
    switch (fruta) {
        case 'maçã':
            console.log('Não vendemos esta fruta aqui.')
            break
        case 'kiwi':
            console.log('Estamos com escassez de kiwi.')
            break
        case 'melancia':
            console.log('Aqui está, custa R$ 3,00 o quilo.')
            break
        default:
            console.log('Erro, fruta inválida.')
    }
}

venderFruta('maçã')
venderFruta('kiwi')
venderFruta('melancia')
venderFruta('alcatra')