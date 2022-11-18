import './Tableworktie.css'
import { MdCreate, MdDeleteForever } from "react-icons/md"

const Tableworktie = () => {
    return (
        
            <div className="titletable">
                <div className="tagtable"></div>
                <div className="nametable">
                    <p>ชื่อโต๊ะงาน</p>
                    <MdCreate className='changeName' />
                </div>
                <div className="responsibletable"><p>ผู้รับผิดชอบ</p></div>
                <div className="scoretable"><p>คะแนน</p></div>
                <div className="statustable"><p>สถานะ</p></div>
                <div className="timetable"><p>ระยะเวลา</p></div>
                <div className="processtable"><div className="none"></div>
                    <p>กระบวนการ</p>
                    <MdDeleteForever className='deletebin' />
                </div>

            </div>
        
    )
}


export default Tableworktie