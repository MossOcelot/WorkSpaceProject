import { useState } from 'react'
import './create_board.css'

const Create_board=(props)=>{
    
    return (
        <div className="modal">
            <div className="modal__container">
                <div className="modal__title">Title</div>
                <div className="modal__content">Content</div>
                <div className='modal__footer'>
                    <button className='btn' onClick={()=>props.close(false)}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default Create_board