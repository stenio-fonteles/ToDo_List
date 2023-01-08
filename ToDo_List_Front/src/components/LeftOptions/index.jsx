import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Input } from '@mui/material';
import "./index.css"
export  function LeftOptions({functionFilterStatus}) {


  return (
    <div className='section'>
        <FormControl component="fieldset">
            <FormGroup aria-label="position"  onChange={(e) => functionFilterStatus(e.target.value)}>
                <FormControlLabel
                value="New"
                control={<Checkbox />}
                label="New"
                labelPlacement="end"
                />
                <FormControlLabel
                value="Concluído"
                control={<Checkbox />}
                label="Concluído"
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
        <Input value={"Buscar"}/>
        <FormControl component="fieldset">
            <FormGroup aria-label="position" >
                <FormControlLabel
                value="React"
                control={<Checkbox />}
                label="React"
                labelPlacement="end"
                />
                <FormControlLabel
                value="Node"
                control={<Checkbox />}
                label="Node"
                labelPlacement="end"
                />
                <FormControlLabel
                value="Banco de dados"
                control={<Checkbox />}
                label="Banco de dados"
                labelPlacement="end"
                />
                <FormControlLabel
                value="Influx db"
                control={<Checkbox />}
                label="Influx db"
                labelPlacement="end"
                />
                <FormControlLabel
                value="Docker"
                control={<Checkbox />}
                label="Docker"
                labelPlacement="end"
                />
            </FormGroup>
        </FormControl>
    </div>
  );
}