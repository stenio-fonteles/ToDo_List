import { useEffect, useState } from 'react'
import { axiosDelete, axiosPut, get } from "../../axios/axios"
import './index.css'

export function Card(){
const [datas, setInfos] = useState([])

    async function getInfo() {
        const data = await get();
        setInfos(data)
    }

    async function deleteToDoList(e){
        axiosDelete(e)
    }

    async function putToDoList(e){
        axiosPut(e)
        console.log("iai")
    }
    useEffect(() => {
        getInfo()
    },[deleteToDoList])
    return(
    <div>
        {
           datas.map((e) => {
                return(
                    <>
                    {e.old == "New" ?(
                        <div key={e.id} className="card">
                        {e.priority == "Low"?(
                             <p className='status' style={{backgroundColor:"blue"}}>{e.priority}</p>
                        ):e.priority == "Medium"?(
                            <p className='status' style={{backgroundColor:"Orange"}}>{e.priority}</p>
                        ):(
                            <p className='status' style={{backgroundColor:"red"}}>{e.priority}</p>
                        )}
                        <div>
                            <p>{e.data_start}</p>
                            <p>{e.data_finish}</p>
                        </div>
                        <h3>{e.nameTask}</h3>
                        <p>{e.description}</p>
                        <button onClick={() => deleteToDoList(e.id)}className='Delete'>Delete</button>
                        <button onClick={() => putToDoList(e.id)} className='Concluded'>Conclude</button>
                    </div>
                    ):(
                            <div key={e.id} className="card2">
                                {e.priority == "Low"?(
                                    <p className='status' style={{backgroundColor:"blue"}}>{e.priority}</p>
                                ):e.priority == "Medium"?(
                                    <p className='status' style={{backgroundColor:"Orange"}}>{e.priority}</p>
                                ):(
                                    <p className='status' style={{backgroundColor:"red"}}>{e.priority}</p>
                                )}
                                <div>
                                    <p>{e.data_start}</p>
                                    <p>{e.data_finish}</p>
                                </div>
                                <h3>{e.nameTask}</h3>
                                <p>{e.description}</p>
                                <button onClick={() => deleteToDoList(e.id)}className='Delete'>Delete</button>
                                <button onClick={() => putToDoList(e.id)} className='Concluded'>Conclude</button>
                            </div>
                )}
                    </>
            )
        })
        }
    </div>
    )
}