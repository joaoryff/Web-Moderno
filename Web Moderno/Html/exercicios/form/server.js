const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extends: true }))

app.post('/usuarios',(req, resp) =>{
    console.log(req.body)
    resp.send('<h1>Parabens usuario incluido</h>')
})

app.post('/usuarios/:id',(req, resp) =>{
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>Parabens. Usuario Alterado com sucesso</h>')
})

app.listen(3003)