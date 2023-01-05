import './index.css'
export function Report({data}){
    return(
        <div className='report'> 
            {data.id}
            <p>{data.report}</p>
        </div>
    )
}