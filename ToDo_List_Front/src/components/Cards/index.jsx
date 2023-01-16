import { useEffect, useState } from 'react'
import './index.css'


export function Card({datasForCreateCard, task_details}){
  

    return(
        <>
        <div style={{  backgroundImage: `url(${datasForCreateCard.tech})`}} className="Card" >
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