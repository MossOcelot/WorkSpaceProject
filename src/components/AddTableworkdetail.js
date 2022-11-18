import './AddTableworkdetail.css'
import {MdAdd} from 'react-icons/md'

const AddTableworkdetail = () => {
    return (
        <div className="titletable_add">
            <div className="tagtable_add"></div>
            <div className="addtable">
                <MdAdd className='addicontable'/>
                <p>เพิ่มงาน</p>
            </div>
        </div>
    )
}

export default AddTableworkdetail