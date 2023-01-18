import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Button } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import "./index.css"
import { useState } from 'react';

export  function LeftOptions({functionFilter}) {
    const [filterStatus, setFilterStatus] = useState()
    function sendNewStatus(){
        functionFilter(filterStatus)
    }

  return (
    <div className='section'>
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        onChange={(event) => setFilterStatus(event.target.value)}
      >
        <FormControlLabel value="All" control={<Radio />} label="All" />
        <FormControlLabel value="New" control={<Radio />} label="New" />
        <FormControlLabel value="Concluído" control={<Radio />} label="Concluído" />
        <FormControlLabel value="Em atendimento" control={<Radio />} label="Em atendimento" />
        <FormControlLabel value="Negrigenciado" control={<Radio />} label="Negligenciado" />
      </RadioGroup>
    </FormControl>
  
        <div>
           <Button variant="outlined" onClick={sendNewStatus}>query</Button>
        </div>
    </div>
  );
}