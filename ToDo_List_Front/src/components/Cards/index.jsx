import { useEffect, useState } from 'react'
import { AlertDialogSlide } from '../Dialog'
import './index.css'


export function Card({datasForCreateCard, editTaskWithNewData,getMessengers}){
    const [ showModal,setShowModal] = useState(false)

    async function newTask(){
        setShowModal(!showModal)
       
    }


    function functionGetDataForNewTask(newDatas){
        setShowModal(!showModal)
        editTaskWithNewData(newDatas)
    }

    return(
        <>
        <AlertDialogSlide  seeModalYes={showModal} datas={datasForCreateCard} closeDialog={newTask} getDataForNewTask={functionGetDataForNewTask} messagers={getMessengers}/>
        <div style={{  backgroundImage: `url(${datasForCreateCard.tech})`}} className="Card" onClick={() => newTask()}>
            <div>
                <h3>{datasForCreateCard.name}</h3>
                <div>
                    {datasForCreateCard.priority == "high"?(
                        <p style={{backgroundColor:"red"}}>{datasForCreateCard.priority}</p>
                    ):datasForCreateCard.priority == "Average"?(
                        <p style={{backgroundColor:"Orange"}}>{datasForCreateCard.priority}</p>
                    ):(
                        <p style={{backgroundColor:"blue"}}>{datasForCreateCard.priority}</p>
                    )}
                    <p>{datasForCreateCard.status}</p>
                </div>
            </div>
        </div>
        </>
    )
}