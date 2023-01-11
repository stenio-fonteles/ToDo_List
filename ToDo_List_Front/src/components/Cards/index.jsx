import { useState } from 'react'
import { AlertDialogSlide } from '../Dialog'
import './index.css'


export function Card({data, editTaskWithNewData}){
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
        <AlertDialogSlide  seeModalYes={showModal} datas={data} getDataForNewTask={functionGetDataForNewTask}/>
        <div style={{  backgroundImage: `url(${data.tool})`}} className="Card" onClick={() => newTask()}>
            <div>
                <h3>{data.nameTask}</h3>
                <div>
                    {data.priority == "high"?(
                        <p style={{backgroundColor:"red"}}>{data.priority}</p>
                    ):data.priority == "Average"?(
                        <p style={{backgroundColor:"Orange"}}>{data.priority}</p>
                    ):(
                        <p style={{backgroundColor:"blue"}}>{data.priority}</p>
                    )}
                    <p>{data.Age}</p>
                </div>
            </div>
        </div>
        </>
    )
}