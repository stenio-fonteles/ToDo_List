const express = require('express');
const app = express();
var cors = require('cors')
const {randomUUID} = require('crypto')

app.use(express.json())
app.use(cors())

const ToDo =  []

app.get('/', (req,res) =>{
    return res.json(ToDo)
})

app.post('/', (req,res) =>{
    const { name, description,data_finish, priority,old } = req.body;
    ToDo.push({
        id:randomUUID(),
        data_finish:data_finish,
        nameTask: name,
        data_start: new Date().toLocaleDateString('pt-br'),
        description: description,
        priority:priority,
        old:old
    })
    res.send(ToDo)
})

app.delete("/:id", (req,res) => {
    const {id} = req.params
    const index = ToDo.findIndex(element => element.id == id)
    ToDo.splice(index,1)
    res.status(204).send()
})

app.put("/:id",(req,res) =>{
    const {id} = req.params
    const index = ToDo.findIndex(element => element.id == id)
    ToDo[index].old = "Concluído"
})

app.listen(3000, ()=>{
    console.log("Server on")
})