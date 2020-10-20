arr = [9, 11, 12]

function ex10(x) {

    if (x % 3 == 0) {
        r = "true"
    } else {
        r = "false"
    }
    return console.log(r)
}

function result(arr) {
    arr.map(ex10)
}

result(arr)
    // console.log(ex10(9))
    // console.log(ex10(11))