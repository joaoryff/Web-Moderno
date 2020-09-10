const moduloA =require('../../moduloA')
console.log(moduloA.ola)

const saudacao = require('../../../node_modules/loadash/saudacao')
console.log(saudacao.ola)

const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!!!')
    res.end()
}).listen(8081)