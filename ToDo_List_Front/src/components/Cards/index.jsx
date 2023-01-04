import { useEffect, useState } from 'react'
import { axiosDelete, axiosPut, get } from "../../axios/axios"
import './index.css'

export function Card({data}){
    async function deleteToDoList(e){
        axiosDelete(e)
    }

    async function putToDoList(e){
        axiosPut(e)
    }
    return(
        <div className='card'>
            {data.priority == "Low"?(
                <p style={{backgroundColor:"blue"}}>{data.priority}</p>
            ): data.priority == "Medium"?(
                <p style={{backgroundColor:"orange"}}>{data.priority}</p>
            ):(
                <p style={{backgroundColor:"red"}}>{data.priority}</p>
            )}
            <div className='date'>
                <p>{data.data_start}</p>
                <p>{data.data_finish}</p>
            </div>
            <p className='title'>{data.nameTask.toUpperCase()}</p>
            <p>{data.description}</p>
            <button className='delete' onClick={()=>deleteToDoList(data.id)}> Delete </button>
            <button className='conclude'  onClick={() => putToDoList(data.id)}> Conclude </button>
        </div>
    )
}