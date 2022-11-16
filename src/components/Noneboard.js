import { MdDashboardCustomize } from "react-icons/md"

const Noneboard =()=>{
    return (
        <div className="board">
            <MdDashboardCustomize className='icon-board' />
                <h1>เริ่มต้นสร้าง</h1>
                <h1>บอร์ดงานของคุณ</h1>
                <div className="button-board">
                    <button>สร้างบอร์ด</button>
                    <div className="spacebutton"></div>
                    <button>เข้าร่วม</button>
                </div>
        </div>
    )
}

export default Noneboard