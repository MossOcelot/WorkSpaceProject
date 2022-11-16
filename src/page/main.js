import React, { useContext, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../components/Auth'
import {app} from '../config'

import './main.css'
import { BsPersonCircle } from "react-icons/bs"
import Leftbar from '../components/leftbar'
import Home from '../components/Home'
import Boards from '../components/Boards'

const Main = () => {
    const { currentUser } = useContext(AuthContext)
    const [page,setpage] = useState("Home")

    if (!currentUser) {
        return <Navigate to="/loginPage" />
    }
    
    const nextpage = (value) => {
        setpage(value)
        
    }

    const Switch_Page =(page)=> {
        
        switch (page) {
            case "Home":
                return <Home/>
               
            case "Boards":
                return <Boards/>
                
            default:
                return <Home/>
        }
    }

    return (
        <div>

            <div className="nav">
                <h1>WorkSpace</h1>
                <BsPersonCircle className='icon-nav' onClick={() => app.auth().signOut()} />
            </div>

            <div className="main">
                <div className="first">
                    <Leftbar updatepage={nextpage}/>
                </div>
                {
                    Switch_Page(page)
                }
            </div>
        </div>
    )
}

export default Main