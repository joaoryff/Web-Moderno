var array1 = ['abc', 'def', 'ghi', 'jkl', 'joao']
var array2 = ['123', '456', '789', '101112', 'wall']
var array3 = ['a', 'b', 'c', 'd', 'ju']
var array4 = ['A', 'B', 'C', 'D', 'Je']
var array5 = ['111', '222', '333', '444', '555'];


function arrayIntersect(...args) {
    let arr = []
    let loop = gLength(args);
    for (let i = 0; i < loop; i++) {
        args.forEach((m) => {
            arr.push(m[i]);
        });
    }

    function gLength(args) {
        let max = 0;
        args.forEach(m => {
            max = max < m.length ? m.length : max;
        });

        return max;
    }
    console.log(arr)
}

arrayIntersect(array1, array2, array3, array4, array5)