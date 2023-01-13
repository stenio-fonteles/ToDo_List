const express = require('express');
const app = express();
var cors = require('cors')
const {randomUUID} = require('crypto');
const { connection } = require('./connection');

app.use(express.json())
app.use(cors())

const ToDo =  []
const arrFilted = []
const Relatorio = []

const AllRelatorio = []

app.get('/', async (req,res) =>{
    const tasks = await connection.task.findMany()
    return res.json(tasks)
})


app.post('/', async (req,res) =>{
    const { name, description, priority,career,tool } = req.body;
    await connection.task.create({
        data:{
            name:name,
            description:description,
            tech:tool,
            category:career,
            priority:priority
        }
    })
    res.send(ToDo)
})

app.put("/", async (req, res) =>{
    const body = req.body;
    await connection.history.update({
        where:{
            id:body.id
        },
        data:{
            description2: body.newDescription

        }
    })
    await connection.task.update({data:{status:body.newStatus}, where: {id:body.id}})
})


app.post("/status/", async (req,res) => {
    const  {body}  = req.body;
    const filteredTable = await connection.task.findMany({where:{status:body}})
    res.json(filteredTable)
})

app.get('/:id', async (req, res) =>{
    const id = req.params;
    const filteredTable = await connection.history.findMany({where:{id:id.id}})
    res.json(filteredTable)
})






app.listen(3000, ()=>{
    console.log("Server on")
})