const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req,res) =>{
    res.json(
        {
            name: "stenio"
        }
    )
})

app.listen(3000, ()=>{
    console.log("deu bom")
})