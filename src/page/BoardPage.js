import './BoardPage.css'

import Tableworktie from '../components/Tableworktie.js'
import Tableworkdetail from '../components/Tableworkdetail'
import AddTableworkdetail from '../components/AddTableworkdetail'
import { MdInput, MdPeopleAlt } from 'react-icons/md'

const BoardPage = (props) => {
    return (
        <div className='Boardpage'>
            <div className="navboard">
                <div className="titlnavboard">
                    <div className="picboard"></div>
                    <div className="detailboard">
                        <div className="nameboard">
                            <h1>บอร์ดงานที่ 1</h1>
                        </div>
                        <div className="selectboard">
                            <ul>
                                <li><a href="#">โต๊ะงาน</a></li>
                                <li><a href="#">บอร์ด</a></li>
                                <li><a href="#">โปรเจค</a></li>
                                <li><a href="#">รายงาน</a></li>
                                <li><a href="#">สมาชิก</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="rightnavboard">
                    <div className="memberbox">
                        <MdPeopleAlt className='iconmemberbox' />
                        <p>4</p>
                    </div>
                    <div className="meeting">เปิดการประชุม</div>
                    <MdInput className='exitboard' onClick={props.click} />
                </div>
            </div>
            <div className="mainBoard">
                <div className="topmaintboard">
                    <div className="createtablework">
                        สร้างโต๊ะงานใหม่
                    </div>
                </div>
                <div className="tablework">
                    <Tableworktie/>
                    <Tableworkdetail/>
                    <Tableworkdetail/>
                    <Tableworkdetail/>
                    <Tableworkdetail/>
                    <Tableworkdetail/>
                    <AddTableworkdetail/>

                    <Tableworktie/>
                    <Tableworkdetail/>
                    <Tableworkdetail/>
                    <Tableworkdetail/>
                    <Tableworkdetail/>
                    <Tableworkdetail/>
                    <AddTableworkdetail/>

                    <Tableworktie/>
                    <Tableworkdetail/>
                    <Tableworkdetail/>
                    <Tableworkdetail/>
                    <Tableworkdetail/>
                    <Tableworkdetail/>
                    <AddTableworkdetail/>
                </div>
            </div>
        </div>
    )
}

export default BoardPage