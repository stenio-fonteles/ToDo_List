const express = require('express');
const app = express();
var cors = require('cors')
const {randomUUID} = require('crypto')

app.use(express.json())
app.use(cors())

const ToDo =  []
const arrFilted = []
const Relatorio = []

const AllRelatorio = []

app.get('/', (req,res) =>{
    return res.json(ToDo)
})


app.post('/', (req,res) =>{
    const { name, description, priority,career,tool } = req.body;
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

app.put("/:id",(req,res) =>{
    const {id} = req.params
    const body = req.body
    const index = ToDo.findIndex(element => element.id == id)
    ToDo[index].Age = body.newStatus
    AllRelatorio.push({"id": id, "newStatus": body.newDescription})

})


app.delete("/:id", (req,res) => {
    const {id} = req.params
    const index = ToDo.findIndex(element => element.id == id)
    ToDo.splice(index,1)
    res.status(204).send()
})

// FUNCTION FILTER WITH STATUS
// app.get("/status/:old", (req,res) =>{
//     const  {old}  = req.params;
//     const findStatus = ToDo.filter(element => element.old == old)
//     arrFilted.push(ToDo[findStatus])
//     res.send(findStatus)
// })





app.listen(3000, ()=>{
    console.log("Server on")
})