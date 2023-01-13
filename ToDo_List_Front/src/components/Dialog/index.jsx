import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import InputUnstyled from '@mui/base/InputUnstyled';
import { styled } from '@mui/system';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import { useEffect } from 'react';


const blue = {
  100: '#DAECFF',
  200: '#80BFFF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
};

const grey = {
  50: '#F3F6F9',
  100: '#E7EBF0',
  200: '#E0E3E7',
  300: '#CDD2D7',
  400: '#B2BAC2',
  500: '#A0AAB4',
  600: '#6F7E8C',
  700: '#3E5060',
  800: '#2D3843',
  900: '#1A2027',
};

const StyledInputElement = styled('input')(
  ({ theme }) => `
  width: 320px;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 12px;
  border-radius: 12px;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

  &:hover {
    border-color: ${blue[400]};
  }

  &:focus {
    border-color: ${blue[400]};
    outline: 3px solid ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
  }
`,
);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CustomInput = React.forwardRef(function CustomInput(props, ref) {
  return (
    <InputUnstyled slots={{ input: StyledInputElement }} {...props} ref={ref} />
  );
});

export function AlertDialogSlide({getDataForNewTask,datas,seeModalYes,closeDialog,getALLmessengers}) {
  const [filterStates,setFilterStates] = useState('')
  const [newDescription, setNewDescription] = useState('')


  const newDatasStatus ={
    "newStatus": filterStates,
    "newDescription":newDescription,
    "id": datas.id
  }

  function close(){
    getDataForNewTask(newDatasStatus)
    getALLmessengers(datas.id)
  }


  return (
    <div>
      <Dialog
        open={seeModalYes }
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{datas.nameTask}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {datas.description}
          </DialogContentText>
          <div>
            <p>Alterar status:</p>
            <FormControl component="fieldset">
              <FormGroup aria-label="position"  onChange={(e) => setFilterStates(e.target.value)}>
                  <FormControlLabel
                  value="Resolvido"
                  control={<Checkbox />}
                  label="Resolvido"
                  labelPlacement="end"
                  />
                  <FormControlLabel
                  value="Negligenciado"
                  control={<Checkbox />}
                  label="Negligenciado"
                  labelPlacement="end"
                  />
                  <FormControlLabel
                  value="Em andamento"
                  control={<Checkbox />}
                  label="Em andamento"
                  labelPlacement="end"
                  />
              </FormGroup>
            </FormControl>
          </div>
          <CustomInput aria-label="Demo input" placeholder="Type something…"  onChange={(e) => setNewDescription(e.target.value)}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog}>Cancel</Button>
          <Button onClick={close}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}