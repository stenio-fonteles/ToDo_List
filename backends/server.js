const express = require('express');
const app = express();
var cors = require('cors')
const {randomUUID} = require('crypto')

app.use(express.json())
app.use(cors())

const ToDo =  []
const arrFilted = []
const Relatorio = []

app.get('/', (req,res) =>{
    return res.json(ToDo)
})


app.post('/', (req,res) =>{
    const { name, description, priority,old,career,tool } = req.body;
    ToDo.push({
        id:randomUUID(),
        nameTask: name,
        data_start: new Date().toLocaleDateString('pt-br'),
        description: description,
        priority:priority,
        Age:"New",
        career:career,
        tool:tool
    })
    res.send(ToDo)
})



app.get("/status/:old", (req,res) =>{
    const  {old}  = req.params;
    const findStatus = ToDo.filter(element => element.old == old)
    arrFilted.push(ToDo[findStatus])
    res.send(findStatus)
})


app.put("/:id",(req,res) =>{
    const {id} = req.params
    const body = req.body
    const index = ToDo.findIndex(element => element.id == id)
    ToDo[index].Age = body.newStatus
    console.log(body.newStatus)
})























app.delete("/:id", (req,res) => {
    const {id} = req.params
    const index = ToDo.findIndex(element => element.id == id)
    ToDo.splice(index,1)
    res.status(204).send()
})



// rotas para relatório


app.get('/report', (req,res) =>{
    return res.json(Relatorio)
})


app.post('/report',(req,res) =>{
    const {id, content,name} = req.body
    Relatorio.push({
        id:id,
        report:content,
        name:name
    })
    res.send(Relatorio)
})

app.listen(3000, ()=>{
    console.log("Server on")
})