function ex5(x) {

    r = `R$ ${x.toFixed(2).toString().replace(".",",")} `
    console.log(r)
}

ex5(0.300000000000000000000000000000000000004)