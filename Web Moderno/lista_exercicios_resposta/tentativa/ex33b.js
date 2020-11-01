var array1 = ['abc', 'def', 'ghi']
var array2 = ['123', '456', '789']
var array3 = ['a', 'b', 'c']
var array4 = ['A', 'B', 'C']

function arrayIntersect(...args) {

    var arr_join = [],
        arr = args[0].map((res, i) => {
            for (let j = 1; j < args.length - 1; j++) {

                arr_join.push(res);
                if (args[j][i]) {
                    arr_join.push(args[j][i],
                        args[j + 1][i]);
                }
            }


            return arr_join;

        });
    return arr[0];
}
console.log(arrayIntersect(array1, array2, array3, array4))