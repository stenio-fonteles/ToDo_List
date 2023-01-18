import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({informationOfTask,showModal,notShowModal, getMessengers,allTasks,editTaskWithNewData}) {
  const [fileredTask,setFilteredForDialog ] = useState()
  const [filteredMessage, setFilteredMessage] = useState([])

  const [newStatus, setStatus] = useState('')
  const [newDescription, setNewMessage] = useState('') 

  function senNewDatas(){
    const obj = {
      "newStatus":newStatus,
      "newDescription": newDescription,
      "id": informationOfTask
    }
    editTaskWithNewData(obj)

  }


  async function getParamsForDetailsTask(){
    const filterTask = await allTasks
    const taskFilted =  filterTask.filter(element => element.id == informationOfTask)
    const FilterMessage = await getMessengers.filter(element => element.id_task == informationOfTask)
    console.log(getMessengers)
    setFilteredMessage(FilterMessage)
    setFilteredForDialog(taskFilted[0])
  }

  function closeModal(){
    notShowModal(!showModal)
  }


  useEffect(() =>{
    getParamsForDetailsTask()
  },[showModal])


  return (
    <div>
      <Dialog
        fullScreen
        open={showModal}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="close"
            >
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {fileredTask == undefined ? (
                <></>
              ): (
                <p>
                    {fileredTask.name}
                </p>
              )}
            </Typography>
            <Button autoFocus color="inherit" onClick={closeModal}>
              Close
            </Button>
          </Toolbar>
        </AppBar>
        {fileredTask == undefined? (
          <> </>
        ):
          (
            <div style={{display:"flex", justifyContent:"space-around"}}>
              <h3>{fileredTask.description}</h3>
              <p>{fileredTask.category}</p>
              <p>{fileredTask.priority}</p>
              <p>{fileredTask.status}</p>
            </div>

          )

        }
          <TextField id="outlined-basic" label="Adicionar mensagem" variant="outlined" onChange={(e) => setNewMessage(e.target.value)}/>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="medium">
                  <InputLabel id="demo-select-small">Status</InputLabel>
                  <Select
                      labelId="demo-select-small"
                      id="demo-select-small"
                      value={newStatus}
                      label="Status"
                      onChange={(e) => setStatus(e.target.value)}
                  >
                      <MenuItem value="Status">
                      </MenuItem>
                      <MenuItem value={'Concluído'}>Concluído</MenuItem>
                      <MenuItem value={'Negligenciado'}>Negligenciado</MenuItem>
                      <MenuItem value={'Em andamento'}>Em andamento</MenuItem>
                  </Select>
              </FormControl>
          <Button variant="outlined" onClick={senNewDatas}>Send</Button>
          {filteredMessage.map((message) =>{
            return(
              <p key={message.id}>{message.message}</p>
            )
          })}

      </Dialog>
    </div>
  );
}