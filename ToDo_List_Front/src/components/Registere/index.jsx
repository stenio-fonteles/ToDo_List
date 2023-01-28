import * as React from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import AddTaskIcon from '@mui/icons-material/AddTask';
import { FormControl, InputLabel, Select, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import CustomizedHook from '../SelectManyOptions';

export default function Register({onSubmit,AlertModal,getAllTechnology}) {
  const [anchorEl, setAnchorEl] = useState(false);

  function handleClick(){
    setAnchorEl(true)
  }

  const [inputToDo, setInputToDo] = useState('Nome da Task')
  const [description, setDescription] = useState('Descrição')
  const [status, setStatus ] = useState('')
  const [career, setCareer] = useState()
  const [tool, setTool] = useState()
  const [ departament, setDepartament] = useState('')

  const [allTech,setAllTech] = useState([])
  const [category,setCtegory] = useState([])


  const obj = {
      "nameTask": inputToDo,
      "description": description,
      "priority":status,
      "career":career,
      "tool":tool,
      "departament":departament
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

  React.useEffect(() =>{
    start()
},[])
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        {/* <Typography sx={{ minWidth: 100 }}>Contact</Typography>
        <Typography sx={{ minWidth: 100 }}>Profile</Typography> */}
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <AddTaskIcon sx={{ width: 32, height: 32 }}></AddTaskIcon>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        id="account-menu"
        open={anchorEl}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
            <TextField id="outlined-basic" label="Name Task" variant="outlined" onChange={(e) => setInputToDo(e.target.value)}/>
            <TextField id="outlined-basic" label="Descrição" variant="outlined"  onChange={(e) => setDescription(e.target.value)} />
        </MenuItem>
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

            <CustomizedHook Title={"Tecnologia"} Options={allTech}/>
            <CustomizedHook Title={"Categoria"} Options={category}/>


            <FormControl sx={{ m: 1, minWidth: 120 }} size="medium">
                <InputLabel id="demo-select-small">Departamt</InputLabel>
                <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={status}
                    label="Severidade"
                    onChange={(e) => setDepartament(e.target.value)}
                >
                    <MenuItem value="Departamt">
                    </MenuItem>
                    <MenuItem value={'Pessoal'}>Pessoal</MenuItem>
                    <MenuItem value={'Selletiva'}>Selletiva</MenuItem>
                    <MenuItem value={'Plataforma'}>Plataforma</MenuItem>
                </Select>
            </FormControl>
        <Divider />
        <div style={{display:"flex",justifyContent:"space-around", cursor:"pointer"}}>
            <SendIcon fontSize="small" onClick={() => onSubmit(obj)}/>
            <CloseIcon onClick={() => setAnchorEl(false)}/>
        </div>
         
        
      </Menu>
    </React.Fragment>
  );
}