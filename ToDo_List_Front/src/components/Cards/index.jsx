import { useState } from 'react'
import './index.css'


export function Card({data,onFinish}){

    return(
        <div style={{  backgroundImage: `url(${data.tool})`}} className="Card" onClick={() => onFinish(data.id)}>
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
    )
}