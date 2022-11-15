const express = require('express')
const app = express()
const mysql = require("mysql")
const cors = require("cors")

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: '',
    database: 'educavest'
})

app.get('/', (req, res) => {
    let SQL = "INSERT INTO alunos ( nome, senha, email, fogo, pontos, foto) VALUES ('Gabriela', 'gabi123', 'gabriela@gmail.com', '7', '100', 'https://imgur.com/a/qKMIYUt')"
    
    db.query(SQL, (err, result) =>{
        console.log(err)
    })

})

app.use(cors())
app.use(express.json())

app.post('/cadastro', (req, res) => {
   const {nome} = req.body
   const {email} = req.body
   const {senha} = req.body
   const {fogo} = req.body
   const {pontos} = req.body
   const {foto} = req.body

   let SQL = "INSERT INTO alunos ( nome, senha, email, fogo, pontos, foto) VALUES (?, ?, ?, ?, ?, ?)"

   db.query(SQL, [nome, senha, email, fogo, pontos, foto ], (err, result) =>{
    console.log(err)
})
})

app.get('/getAulas', (req, res)=> {
    let SQL = 'SELECT * from aulas'

    db.query(SQL, (err, result) =>{
        if(err) console.log(err)
        else res.send(result)
    })
})
app.get('/getConteudos', (req, res)=> {
    let SQL = 'SELECT * from conteudos'

    db.query(SQL, (err, result) =>{
        if(err) console.log(err)
        else res.send(result)
    })
})
app.get('/getUsuarios', (req, res)=> {
    let SQL = 'SELECT * from alunos'

    db.query(SQL, (err, result) =>{
        if(err) console.log(err)
        else res.send(result)
    })
    
})

app.post('/cadastroAula', (req, res) => {
   const {assunto} = req.body
   const {materia} = req.body
   const {descricao} = req.body
   const {pontuacao} = req.body
   const {cor} = req.body
   const {cor2} = req.body
   const {icone} = req.body
   const {concluido} = req.body
   

   let SQL = "INSERT INTO aulas ( assunto, materia, descricao, pontuacao, cor, cor2, icone, concluido) VALUES (?, ?, ?, ?, ?, ?, ?, ?)"

   db.query(SQL, [assunto, materia, descricao, pontuacao, cor, cor2, icone, concluido ], (err, result) =>{
    console.log(err)
})
})

app.post('/cadastroConteudo', (req, res) => {
   const {materia} = req.body
   const {assunto} = req.body
   const {nome} = req.body
   const {cor} = req.body
   const {pontuacao} = req.body
   const {icone} = req.body
   const {link} = req.body
   

   let SQL = "INSERT INTO conteudos ( materia, assunto, nome, cor, pontuacao, icone, link) VALUES (?, ?, ?, ?, ?, ?, ?)"

   db.query(SQL, [materia, assunto, nome, cor, pontuacao, icone, link], (err, result) =>{
    console.log(err)
})
})

app.listen(3001, () => {
    console.log('rodando server')
})