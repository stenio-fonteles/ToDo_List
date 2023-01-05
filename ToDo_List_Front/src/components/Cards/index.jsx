import './index.css'
import { Dialog } from '../Dialog';

export function Card({data,onDelete,onFinish}){
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
            <button className='delete' onClick={()=> onDelete(data.id) } > Delete </button>
            <button className='conclude'  onClick={() => onFinish(data.id) }> Conclude </button>
            <Dialog dialogData={data}/>
        </div>
    )
}