import { useState } from "react"
import "./index.css"
export function Dialog({dialogData}){
    const [openModal, setOpen] = useState(close)
    return(
        <dialog open={openModal}>
            <p>teste</p>
            <button onClick={() => setOpen(close)}></button>
        </dialog>
    )
}