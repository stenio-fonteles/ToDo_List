import { useEffect, useState } from "react"
import { post } from "../../axios/axios"
import Calendar from 'react-calendar';
import './index.css'


export function Register(){
    const [inputToDo, setInputToDo] = useState()
    const [description, setDescription] = useState()
    const [value, onChange] = useState(new Date(2018));
    const [status, setStatus ] = useState()
    const [show, notShow] = useState(false)

    const obj = {
        "nameTask": inputToDo,
        "description": description,
        "data_finish": value,
        "priority":status,
        "old":"New"
    }

    async function postToDoList(){
        await post(obj)
      } 
    
      useEffect(()=>{
      },[postToDoList])

    return(
        <div className="section">
            <label className="label">Name of Task: </label>
            <input className="input" onChange={(e) => setInputToDo(e.target.value)}></input>
            <label  className="label">Description: </label>
            <input className="input" onChange={(e) => setDescription(e.target.value)}></input>
            <select className="select" onChange={(e) => setStatus(e.target.value)}>
                <option disabled>Priority</option>
                <option value={"Low"}>Low</option>
                <option value={"Medium"}>Medium</option>
                <option value={"Hight"}>Hight</option>
            </select>
            <button onClick={() => notShow(!show)}>Calender</button>
            <button onClick={postToDoList}>Send</button>
            {
                show ?(
                    <Calendar onChange={onChange} value={value} className="calender"/>
                ):(
                    <></>
                )
            }
        </div>
    )
}