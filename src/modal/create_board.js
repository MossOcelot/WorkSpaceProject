import './create_board.css'

import { db } from '../config'

import { MdClear } from "react-icons/md"
import { useState, useContext } from 'react'
import { AuthContext } from '../components/Auth'
import { collection, addDoc,doc } from 'firebase/firestore'
const Createboard = (props) => {
    
    const authdata = useContext(AuthContext)
    const [boardname,setBoardName] = useState('')

    const putBoardName = (e) => {
        setBoardName(e.target.value)
        console.log(boardname);
    }

    const [putmember,setPutMember] = useState([
        {email: ''}
    ])

    const addFields = () => {
        let newfield = {email:''}
        setPutMember([...putmember, newfield])
    }

    const handleFormChange = (index, event) => {
        let data = [...putmember];
        data[index]['email'] = event.target.value
        setPutMember(data)
        console.log(putmember)
    }

    
    const generate_board =()=> {
        const boardsColllectionRef = collection(db, "boards")
        addDoc(boardsColllectionRef,{
            boardname: boardname,
            createby: authdata.currentUser.uid,
            member: putmember,
            createDate: new Date()
        }).then(data=>{
            console.log(data.id)
            const myboardCollectionRef = collection(db, "users", authdata.currentUser.uid, 'MyBoards')
            addDoc(myboardCollectionRef,{
                uidBoard: data.id,
                createby: authdata.currentUser.uid,
                nameBoard: boardname,
                createDate: new Date()
            })
        })
        props.close(false)
        
        
    }



    return (
        <div className="modal">
            <div className="modal__container">
                <div className="modal__title">
                    <div className="toptitle">
                        <h1>สร้างบอร์ดงาน</h1>
                        <p>เริ่มต้นสร้างบอร์ดงานกันเถอะ</p>
                    </div>
                    <div><MdClear className='clearicon' onClick={() => props.close(false)} /></div>
                </div>
                <div className="modal__content">
                    <div className="createnameboard">
                        <p>ชื่อบอร์ดงาน:</p>
                        <input className='inputnameboard' type="text" onChange={putBoardName}/>
                    </div>
                    <div className="createaddmember">
                        <p>สมาชิก</p>
                        {
                            putmember.map((input, index)=>{
                                
                                return (
                                    <div key={index}>
                                         <input className='inputmember' type="text" value={input.email} onChange={event => handleFormChange(index, event)}/>
                                    </div>
                                )
                            })
                        }
                        <button className='addmember' onClick={addFields}>เพิ่มสมาชิก</button>
                    </div>

                </div>
                <div className='modal__footer'>
                    <button className='btn' onClick={generate_board}>สร้าง</button>
                </div>
            </div>
        </div>
    )
}

export default Createboard