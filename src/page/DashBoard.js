import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../components/Auth'
import firebaseConfig from '../config'

import './DashBoard.css'
import { BsPersonCircle } from "react-icons/bs"
import Leftbar from '../components/leftbar'
import Cardworks from '../components/Card_works.js'
import Dashworks from '../components/DashWork'
import Dashmails from '../components/Dashmails'
const DashBoard = () => {
    const { currentUser } = useContext(AuthContext)

    if (!currentUser) {
        return <Navigate to="/loginPage" />
    }

    return (
        <div>

            <div className="nav">
                <h1>WorkSpace</h1>
                <BsPersonCircle className='icon-nav' onClick={() => firebaseConfig.auth().signOut()} />
            </div>

            <div className="main">
                <div className="first">
                    <Leftbar />
                </div>
                <div className="feet">
                    <div className="containerfeet">
                        <div className="createbar">
                            <input type="text" placeholder='สร้างเนื้อหาของคุณ' />
                        </div>
                        <BsPersonCircle className='icon-nav' />

                    </div>
                    <Cardworks />
                    <Cardworks />
                    <Cardworks />
                    <Cardworks />
                    <Cardworks />
                    <Cardworks />
                </div>
                <div className="second">
                    <div className="moniter">
                        <Dashworks />
                        <Dashmails />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashBoard