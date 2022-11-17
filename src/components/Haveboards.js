import './Haveboards.css'

import Boardicons from './BoardIcon'
import Boardcreate from './Boardcreate'

import { collection, getDocs, limit, orderBy, query, where } from 'firebase/firestore'
import { db } from '../config'
import React, { useState, useEffect, useContext } from 'react'
import { AuthContext } from './Auth'
import Createboard from '../modal/create_board.js'
import JoinBoards from '../modal/join_board'
import Boardjoin from './Boardjoin'

const Haveboards = () => {

    const authdata = useContext(AuthContext)
    const [myboards, setMyboards] = useState([])
    const [myjoinboards, setMyjoinboards] = useState([])
    const [showModalcreate, setShowModalcreate] = useState(false)
    const [showModaljoin, setShowModaljoin] = useState(false)

    const mycollectionRef = collection(db, 'users', authdata.currentUser.uid, 'MyBoards')

    const getmyproject = () => {

        getDocs(query(mycollectionRef, where("createby", '==', authdata.currentUser.uid), orderBy('uidBoard', 'asc'), limit(10))).then(response => {
            const boards = response.docs.map(doc => ({
                data: doc.data(),
                id: doc.id
            }))
            setMyboards(boards)
        }).catch(error => console.log(error))

    }

    const getmyjoinproject = () => {
        getDocs(query(mycollectionRef, where("createby", '!=', authdata.currentUser.uid), limit(10))).then(response => {
            const joinboards = response.docs.map(doc => ({
                data: doc.data(),
                id: doc.id
            }))
            setMyjoinboards(joinboards)
        }).catch(error => console.log(error))
    }

    useEffect(() => {
        getmyproject()
        getmyjoinproject()
    }, [])

    return (
        <div className="Hboard">
            <div className="contain">
                <div className="titlemyboards">
                    <h3>บอร์ดของคุณ</h3>
                </div>
                <div className="homeboard">
                    {
                        myboards.map(boards => (
                            <React.Fragment key={boards.data.uidBoard}>
                                <Boardicons title={boards.data.nameBoard} />
                            </React.Fragment>
                        ))
                    }
                    <Boardcreate click={() => setShowModalcreate(true)} />
                    {showModalcreate && <Createboard close={setShowModalcreate} />}
                </div>
            </div>
            <div className="contain">
                <div className="titlemyjoinboards">
                    <h3>บอร์ดที่คุณเข้าร่วม</h3>
                </div>
                <div className="homeboard">
                    {
                        myjoinboards.map(boards => (
                            <React.Fragment key={boards.data.uidBoard}>
                                <Boardicons title={boards.data.nameBoard} />
                            </React.Fragment>
                        ))
                    }
                    <Boardjoin click={() => setShowModaljoin(true)} />
                    {showModaljoin && <JoinBoards  close={setShowModaljoin}/>}
                </div>
            </div>
        </div>
    )
}

export default Haveboards