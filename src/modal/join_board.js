import './join_board.css'

import { useState, useContext } from 'react'
import { AuthContext } from '../components/Auth'
import { addDoc, collection, getDocs, query, updateDoc, where, doc, arrayUnion } from 'firebase/firestore'
import { db } from '../config'

import { MdClear } from "react-icons/md"
const JoinBoards = (props) => {
    const authdata = useContext(AuthContext)
    const [statuscode, setStatusCode] = useState(false)
    const [codeboard, setCodeBoard] = useState('')
    const [checkmember, setcheckmember] = useState(false)
    const [statusmember, setstatusmember] = useState(false)

    const getcodeboard = (e) => {
        setCodeBoard(e.target.value)
    }

    const  joinBoardnow = async () => {
        const codeBoardRef = collection(db, 'boards')
        getDocs(query(codeBoardRef, where("code", "==", codeboard))).then(status => {
            const fine = status.docs.length
            if (fine === 0) {
                setStatusCode(true)
            } else {
                
                // มีปัญหาเรื่อง async await
                
                for ( let i = 0; i < status.docs[0].data().member.length; i++) {
                    if ( status.docs[0].data().member[i].email === authdata.currentUser.email) {
                        console.log("have");
                        setcheckmember(true)
                        break
                    }
                }

                const myboardCollectionRef = collection(db, "users", authdata.currentUser.uid, 'MyBoards')
                console.log(checkmember);
                if (!checkmember) {
                    addDoc(myboardCollectionRef, {
                        uidBoard: status.docs[0].id,
                        createby: status.docs[0].data().createby,
                        nameBoard: status.docs[0].data().boardname,
                        createDate: status.docs[0].data().createDate,
                        code: status.docs[0].data().code
                    })
                    updateDoc(doc(db, 'boards', status.docs[0].id), {
                        member: arrayUnion({ email: authdata.currentUser.email })
                    })
                } else {
                    setstatusmember(true)
                }
                setStatusCode(false)
            }

        })
    }
    return (
        <div className="modals">
            <div className="exit">
                <MdClear className='clearicon' onClick={() => props.close(false)} />
            </div>
            <div className="modal__containers">

                <div className="jointitle">
                    <h1>เข้าร่วมบอร์ดงาน</h1>
                    <p>ใส่รหัสห้องที่ต้องการจะเข้า</p>
                </div>
                <div className="joincode">
                    <input type="text" className='codeinput' placeholder='รหัสบอร์ดงาน' onChange={getcodeboard} required />
                    <button className='joinbutton' onClick={joinBoardnow}>เข้าร่วม</button>
                </div>
                {statuscode && <p className='alertpjoin'>รหัสห้องไม่ถูกต้อง</p>}
                {statusmember && <p className='alertpjoin'>คุณอยู่ในห้องนี้อยู่แล้ว</p>}
            </div>
        </div>
    )
}

export default JoinBoards