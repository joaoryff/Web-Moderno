let vInt = [1, 2, 3, 4]
let vStr = ['um', 'dois', 'tres', 'quatro']
let vDec = [0.5, 0.7, 0.8, 0.9]

function conc(...args) {
    // txt = []
    txt2 = []
        // txt = args.concat(args)

    for (let i = 0; i < args.length; i++) {
        // for (let j = 0; j < args[i].length; j++) {
        //     txt2 = args[i].concat(args[i][j])

        txt2.push(args[i])

    }





    // for (let i = 0; i < args.length; i++) {
    //     txt2 = a[i].push(b[i])
    // }
    // console.log(txt)
    console.log(txt2)
}


conc(vInt, vStr, vDec)