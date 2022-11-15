import {MdWork} from "react-icons/md";

import './Card_works.css'

const Cardworks=()=>{
    return (
        <div className="card">
            <div className="top">
                <MdWork className="icon"/>
                <div className="title-top">
                    <p className="boardname">บอร์ดงานที่ 1</p>
                    <p className="boarddate">26/04/2547</p>
                </div>
            </div>
            <div className="title">
                <p>วันนี้มีงานต้องทำคือ ...............................</p>
            </div>
            <div className="button-feet">
                เข้าเช็คงาน
            </div>
        </div>
    )
}

export default Cardworks