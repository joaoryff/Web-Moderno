function compras(t1,t2){
    const comprarSorvete = t1 || t2
    const comprarTv50 = t1 && t2
   // const comprasTv32 = !!(t1 ^ t2) //bitwise xor

    const comprarTv32 = t1 != t2
    const manterSaudavel = !comprarSorvete

   // return {comprarSorvete: comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}

console.log(compras(true,true))
console.log(compras(true,false))
console.log(compras(false,true))
console.log(compras(false,false))