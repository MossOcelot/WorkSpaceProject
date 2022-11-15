import React, { useContext } from 'react'
import { AuthContext  } from '../components/Auth'
import DashBoard from './DashBoard'
import LoginPage from './loginPage'



const HomePage =()=>{
    const { currentUser } = useContext(AuthContext)

    return (
        <div>
            {
                currentUser ? <DashBoard/> : <LoginPage/>
            }
        </div>
    )
}

export default HomePage