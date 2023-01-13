import { useState } from 'react'
import { AlertDialogSlide } from '../Dialog'
import './index.css'


export function Card({data, editTaskWithNewData,getMessengers}){
    const [ showModal,setShowModal] = useState(false)

    function newTask(){
        setShowModal(!showModal)
    }
    function functionGetDataForNewTask(newDatas){
        setShowModal(!showModal)
        editTaskWithNewData(newDatas)
    }

    return(
        <>
        <AlertDialogSlide  seeModalYes={showModal} datas={data} closeDialog={newTask} getDataForNewTask={functionGetDataForNewTask} getALLmessengers={getMessengers}/>
        <div style={{  backgroundImage: `url(${data.tech})`}} className="Card" onClick={() => newTask()}>
            <div>
                <h3>{data.name}</h3>
                <div>
                    {data.priority == "high"?(
                        <p style={{backgroundColor:"red"}}>{data.priority}</p>
                    ):data.priority == "Average"?(
                        <p style={{backgroundColor:"Orange"}}>{data.priority}</p>
                    ):(
                        <p style={{backgroundColor:"blue"}}>{data.priority}</p>
                    )}
                    <p>{data.status}</p>
                </div>
            </div>
        </div>
        </>
    )
}