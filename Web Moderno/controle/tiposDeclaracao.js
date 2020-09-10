console.log(soma(3,4)) // leu
// console.log(sub(3,4))  nao leu
//console.log(mult(3,4)) // nao leu

//declaration
function soma(x,y){
    return x + y
}

//expression
const sub = function (x,y){
    return x -y
}
console.log(sub(3,4))
// named expression
const mult = function mult (x,y) {
    return x*y
}

console.log(mult(3,4))