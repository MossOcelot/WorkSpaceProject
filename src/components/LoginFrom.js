import { BsFillPersonFill,BsFillLockFill } from "react-icons/bs";
import React , { useState ,useContext } from "react";
import firebaseConfig from "../config";
import {AuthContext} from './Auth'
import {Navigate } from 'react-router-dom'

const LoginFrom=(props)=>{
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const inputEmail =(event)=>{
        setEmail(event.target.value)
    }

    const inputPassword =(event)=>{
        setPassword(event.target.value)
    }

    const commitInput =(event)=>{
        event.preventDefault()
        try {
            firebaseConfig.auth().signInWithEmailAndPassword(email,password)
            
        } catch(error){
            alert(error)
        }
        
        setEmail("")
        setPassword("")
    }

    const { currentUser } = useContext(AuthContext)
    console.log(currentUser)

    if (currentUser){
        return <Navigate  to="/DashBoard"/>
    }

    return (
        <div>
            <div className="fromLoginPage">
                <h2>เข้าสู่ระบบ</h2>
                <form onSubmit={commitInput}>
                    <div className="box">
                        <BsFillPersonFill className='icon'/>
                        <input type="email" placeholder='ระบุ email ของคุณ' onChange={inputEmail} required/>
                    </div>
                    <div className="box">
                        <BsFillLockFill className='icon'/>
                        <input type="password" placeholder='ระบุ password ของคุณ' onChange={inputPassword} required/>
                            
                    </div>
                    <div className='submit'>
                        <button className='submitbutton' type='submit'>ล็อคอิน</button>
                        <p>ลืมรหัสผ่าน?</p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginFrom