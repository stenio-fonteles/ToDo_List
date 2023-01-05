import { useEffect, useState } from "react"
import Calendar from 'react-calendar';
import './index.css'


export function Register({onSubmit,data}){
    const [inputToDo, setInputToDo] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValueDate] = useState(new Date().toLocaleDateString('pt-br'));
    const [status, setStatus ] = useState()
    const [show, notShow] = useState(false)

    const obj = {
        "nameTask": inputToDo,
        "description": description,
        "data_finish": value,
        "priority":status,
        "old":"New"
    }

    
    return(
        <div className="section">
            <label className="label">Name of Task: </label>
            <input className="input" onChange={(e) => setInputToDo(e.target.value)}></input>
            <label  className="label">Description: </label>
            <input className="input" onChange={(e) => setDescription(e.target.value)}></input>
            <select className="select" onChange={(e) => setStatus(e.target.value)}>
                <option value={"Low"}>Low</option>
                <option value={"Medium"}>Medium</option>
                <option value={"Hight"}>Hight</option>
            </select>
            <button onClick={() => notShow(!show)}>Calender</button>
            <button onClick={() => onSubmit(obj)}>Send</button>
            {
                show ?(
                    <Calendar onChange={setValueDate} value={value} className="calender"/>
                ):(
                    <></>
                )
            }
        </div>
    )
}