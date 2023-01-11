import { useEffect, useState } from "react"
import { Input } from '@mui/material';
import './index.css'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


export function Register({onSubmit,AlertModal}){
    const [inputToDo, setInputToDo] = useState('Nome da Task')
    const [description, setDescription] = useState('Descrição')
    const [status, setStatus ] = useState('')
    const [career, setCareer] = useState()
    const [tool, setTool] = useState()
  
    const obj = {
        "nameTask": inputToDo,
        "description": description,
        "priority":status,
        "career":career,
        "tool":tool,
    }
    
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
            <TextField id="outlined-basic" label="Name Task" variant="outlined" onChange={(e) => setInputToDo(e.target.value)}/>
            <TextField id="outlined-basic" label="Descrição" variant="outlined"  onChange={(e) => setDescription(e.target.value)} />
            
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
                <InputLabel id="demo-select-small">Assunto</InputLabel>
                <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={career}
                    label="Assunto"
                    onChange={(e) => setCareer(e.target.value)}
                    defaultValue={"FrontEnd"}
                >
                    <MenuItem value={'FrontEnd'}>FrontEnd</MenuItem>
                    <MenuItem value={'BackEnd'}>BackEnd</MenuItem>
                </Select>
            </FormControl>

            <FormControl sx={{ m: 1, minWidth: 120 }} size="medium">
                <InputLabel id="demo-select-small">ORM</InputLabel>
                <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={tool}
                    label="Assunto"
                    onChange={(e) => setTool(e.target.value)}
                    defaultValue={"https://pbs.twimg.com/card_img/1607686726608211970/fTGdzsp1?format=png&name=medium"}
                >
                    <MenuItem value={'https://pbs.twimg.com/card_img/1607686726608211970/fTGdzsp1?format=png&name=medium'}>React</MenuItem>
                    <MenuItem value={'https://www.itnetwork.cz/images/10733/nodejs/nodejs_logo.png'}>Node</MenuItem>
                    <MenuItem value={"https://st2.depositphotos.com/4845131/7223/v/600/depositphotos_72231263-stock-illustration-data-hdd-icon.jpg"}>Banco de dados</MenuItem>
                </Select>
            </FormControl>
            <Button onClick={() => onSubmit(obj)} variant="outlined">Send</Button>
        </div>
    )
}