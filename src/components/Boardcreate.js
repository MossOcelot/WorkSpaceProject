import './Boardcreate.css'
import {BsPlusLg} from 'react-icons/bs'
const Boardcreate=(props)=>{
    return (
        <div className='cboard' onClick={props.click}>
            <div className="create-board"><BsPlusLg className='addicon'/></div>
        </div>
    )
}

export default Boardcreate