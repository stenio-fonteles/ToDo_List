import { useEffect, useState } from "react"
import './index.css'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


export function Regssssister({onSubmit,AlertModal,getAllTechnology}){
    const [inputToDo, setInputToDo] = useState('Nome da Task')
    const [description, setDescription] = useState('Descrição')
    const [status, setStatus ] = useState('')
    const [career, setCareer] = useState()
    const [tool, setTool] = useState()

    const [allTech,setAllTech] = useState([])
    const [category,setCtegory] = useState([])

  
    const obj = {
        "nameTask": inputToDo,
        "description": description,
        "priority":status,
        "career":career,
        "tool":tool,
    }

    async function start(){
        const responseAllTechs = await  getAllTechnology()
        setAllTech(responseAllTechs)
        const arr = [];
        responseAllTechs.map((tech)=>{
            arr.push(tech.category)
        })
        const filtered = arr.filter((item, index) => arr.indexOf(item) === index);
        setCtegory(filtered)
    }
    
    useEffect(() =>{
        start()
    },[])
    
    return(
        <div className="formRegister">
            <Stack sx={{ width: '100%' }} spacing={2} className="modalRegister">
                {AlertModal == "Error"?(
                    <Alert variant="outlined" severity="error">
                        Preencha todos os campos!
                    </Alert>
                ):AlertModal == "Success"?(
                    <Alert variant="outlined" severity="success">
                        Task criada com sucesso!
                    </Alert>
                ):(<></>)}
            </Stack>
            <div className="TextField">
                <TextField id="outlined-basic" label="Name Task" variant="outlined" onChange={(e) => setInputToDo(e.target.value)}/>
                <TextField id="outlined-basic" label="Descrição" variant="outlined"  onChange={(e) => setDescription(e.target.value)} />
            </div>
            
            <FormControl sx={{ m: 1, minWidth: 120 }} size="medium">
                <InputLabel id="demo-select-small">Severidade</InputLabel>
                <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={status}
                    label="Severidade"
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <MenuItem value="Severidade">
                    </MenuItem>
                    <MenuItem value={'high'}>high</MenuItem>
                    <MenuItem value={'Average'}>Average</MenuItem>
                    <MenuItem value={'Low'}>Low</MenuItem>
                </Select>
            </FormControl>

            <FormControl sx={{ m: 1, minWidth: 120 }} size="medium">
                <InputLabel id="demo-select-small">Categoria</InputLabel>
                <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={career}
                    label="Assunto"
                    onChange={(e) => setCareer(e.target.value)}
                    defaultValue={'' }
                >
                    {category.map((tech) => {
                        return(
                            <MenuItem key={Math.random()} value={tech}>{tech}</MenuItem>
                        )
                    })}

                </Select>
            </FormControl>

            <FormControl sx={{ m: 1, minWidth: 120 }} size="medium">
                <InputLabel id="demo-select-small">Tech</InputLabel>
                <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={tool}
                    label="Assunto"
                    onChange={(e) => setTool(e.target.value)}
                    defaultValue={''}
                >
                    {allTech.map((tech) => {
                        return(
                            <MenuItem key={tech.id} value={tech.img}>{tech.tech}</MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
            <div  className="button">
                <Button  onClick={() => onSubmit(obj)} variant="outlined">Send</Button>
            </div>
        </div>
    )
}