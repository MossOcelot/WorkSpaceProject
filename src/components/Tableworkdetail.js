import './Tableworkdetail.css'
import { MdCreate, MdDeleteForever,MdAccountCircle,MdStarRate } from "react-icons/md"

const Tableworkdetail = () => {
    return (
        
            <div className="titletables">
                <div className="tagtables"></div>
                <div className="nametables">
                    <p>ชื่อโต๊ะงาน</p>
                    <MdCreate className='changeNames' />
                </div>
                <div className="responsibletables"><MdAccountCircle/></div>
                <div className="scoretables"><MdStarRate/><MdStarRate/><MdStarRate/></div>
                <div className="statustables">
                    <div className="newstatus"><p>งานใหม่</p></div>
                </div>
                <div className="timetables"><p>1 ก.ย. 65 - 21 ก.ย. 65</p></div>
                <div className="processtables">
                    <div className="processbox"></div>
                    <p>0%</p>
                    
                </div>

            </div>
        
    )
}


export default Tableworkdetail