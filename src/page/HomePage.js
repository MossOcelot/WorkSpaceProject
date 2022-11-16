import React, { useContext } from 'react'
import { AuthContext  } from '../components/Auth'
import Main from './main'
import LoginPage from './loginPage'



const HomePage =()=>{
    const { currentUser } = useContext(AuthContext)

    return (
        <div>
            {
                currentUser ? <Main/> : <LoginPage/>
            }
        </div>
    )
}

export default HomePage