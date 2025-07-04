import { useEffect, useRef, useState } from "react"


function Modal({isOpen, onClose, children}){
    if (!isOpen) return null
    return(
        <div id="modal-wrap">
            {children}
        </div>
    )
}

export default Modal