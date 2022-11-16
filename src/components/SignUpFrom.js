import { app, db } from '../config'
import { Navigate } from 'react-router-dom'
import { BsFillPersonFill, BsFillLockFill } from "react-icons/bs";
import { useState } from "react";

import { collection, setDoc,doc } from 'firebase/firestore'

const SignUpFrom = (props) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmpassword, setConfirmPassword] = useState("")
    const [currentUser, setCurrentUser] = useState(null)
    const [checkpassword, setCheckPassword] = useState("")

    

    const inputEmail = (event) => {
        setEmail(event.target.value)
    }

    const inputPassword = (event) => {
        setPassword(event.target.value)
    }

    const inputConfirmPassword = (event) => {
        setConfirmPassword(event.target.value)
    }

    const commitInput = (event) => {
        event.preventDefault()
        if (password === confirmpassword) {

            try {
                app.auth().createUserWithEmailAndPassword(email, password).then(data => {
                    const userColllectionRef = collection(db, "users")
                    setDoc(doc(userColllectionRef, data.user.uid), {email: data.user.email })
                })


                setCurrentUser(true)
            } catch (error) {
                alert(error)
            }

            setCheckPassword("")
        } else {
            setCheckPassword("รหัสผ่านไม่ตรงกัน")
        }

        setEmail("")
        setPassword("")
    }

    if (currentUser) {
        return <Navigate to="/Main" />
    }

    return (
        <div>
            <div className="fromLoginPage">
                <h2>เข้าสู่ระบบ</h2>
                <form onSubmit={commitInput}>
                    <div className="box">
                        <BsFillPersonFill className='icon' />
                        <input type="email" placeholder='ระบุ email ของคุณ' onChange={inputEmail} required />
                    </div>
                    <div className="box">
                        <BsFillLockFill className='icon' />
                        <input type="password" placeholder='ระบุ password ของคุณ' onChange={inputPassword} required />

                    </div>
                    <div className="box">
                        <BsFillLockFill className='icon' />
                        <input type="password" placeholder='ระบุ confirmpassword ของคุณ' onChange={inputConfirmPassword} required />

                    </div>
                    <p>{checkpassword}</p>
                    <div className='submit'>
                        <button className='submitbutton' type='submit'>ลงทะเบียน</button>
                        <p>ลืมรหัสผ่าน?</p>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default SignUpFrom