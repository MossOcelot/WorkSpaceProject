import React ,{ useState, useEffect } from 'react'
import {app} from "../config";

// ตรวจสอบว่า user ทำการ Auth มารึป่าว
export const AuthContext = React.createContext()

export const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true)
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(()=>{
       
        app.auth().onAuthStateChanged((user)=>{
            console.log(user)
            setCurrentUser(user)
            setLoading(false)
        })
    },[])

    if (loading) {
        return <p>Loading...</p>
    }

    return (
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>
    )
}

