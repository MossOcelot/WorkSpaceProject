import './Boardcreate.css'
import {MdDashboardCustomize} from 'react-icons/md'

const Boardjoin=(props)=>{
    return (
        <div className='cboard' onClick={props.click}>
            <div className="create-board"><MdDashboardCustomize className='addicon'/></div>
        </div>
    )
}

export default Boardjoin