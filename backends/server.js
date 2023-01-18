const express = require('express');
const app = express();
var cors = require('cors')
const { connection } = require('./connection');

app.use(express.json())
app.use(cors())

const ToDo =  []


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
    const {id,newDescription,newStatus} = req.body;
    const retry_message= await connection.history.create({
        data:{
            id_task: id,
            message: newDescription
        }
    })
    await connection.task.update({data:{status:newStatus}, where: {id:id}})
    res.send(retry_message)
})


app.post("/status/", async (req,res) => {
    const  {body}  = req.body;
    const filteredTable = await connection.task.findMany({where:{status:body}})
    res.json(filteredTable)
})

app.get(`/tasks/:id`, async (req, res) =>{
    const {id} = req.params;
    const filteredTable = await connection.history.findMany({where:{id_task:id.id}})
    res.json(filteredTable)
})


app.post('/tech-category', async(req, res) =>{
    const {newCategory,newTech,image} = req.body;
    await connection.technology.create({data:{tech:newTech, img:image,category:newCategory}})
})

app.get('/tech-category', async (req,res) => {
    const allTechsFilted = await connection.technology.findMany()
    return res.json(allTechsFilted)
})


app.listen(3000, ()=>{
    console.log("Server on")
})