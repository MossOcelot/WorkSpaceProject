import { MdDashboardCustomize } from "react-icons/md"
import './Noneboard.css'

import Createboard from '../modal/create_board.js'
import JoinBoards from '../modal/join_board'
import { useState } from "react"

const Noneboard =()=>{
    
    const [showModalcreate, setShowModalcreate] = useState(false)
    const [showModaljoin, setShowModaljoin] = useState(false)

    return (
        <div className="board">
            <MdDashboardCustomize className='iconboard'/>
                <h1>เริ่มต้นสร้าง</h1>
                <h1>บอร์ดงานของคุณ</h1>
                <div className="button-board">
                    <button onClick={() => setShowModalcreate(true)}>สร้างบอร์ด</button>
                    <div className="spacebutton"></div>
                    <button  onClick={() => setShowModaljoin(true)}>เข้าร่วม</button>
                </div>
            {showModalcreate && <Createboard close={setShowModalcreate} />}
            {showModaljoin && <JoinBoards  close={setShowModaljoin}/>}
        </div>
    )
}

export default Noneboard