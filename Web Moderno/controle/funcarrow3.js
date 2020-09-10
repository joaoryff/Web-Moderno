let comparaThis = function (param) {
  console.log(this === param)
}

comparaThis(global)

const obj ={}
comparaThis = comparaThis.bind(obj)
comparaThis(global)
comparaThis(obj)

comparaThis = param => console.log(this === param)
comparaThis(global)
comparaThis(module.exports)
//comparaThis(this)