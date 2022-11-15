import './loginPage.css'

import { useState } from 'react';
import LoginFrom from '../components/LoginFrom';
import SignUpFrom from '../components/SignUpFrom';

const LoginPage=(props)=>{
    const [status,setStatus] = useState("Login")

    const changeStatus=()=>{
        (status === "Login") ? setStatus("SignUp") : setStatus("Login")
    }

    return (
        <div className='LoginPage'>
            <div className="container">
                <div className="intro-LoginPage">
                    <h1>ยินดีต้อนรับสู่ <br />WorkSpace</h1>
                    <p>เว็บสำหรับบริหารจัดงานและโปรเจคต่าง ๆ ในองค์กรทุกขนาด</p>
                    <button className='loginPageButton' onClick={changeStatus}>
                    {
                    status === "Login" ? 'สมัครสมาชิก' : 'เข้าสู่ระบบ'
                    }
                    </button>
                </div>
                {
                   status === "Login"  ? <LoginFrom/> : <SignUpFrom />
                }
            </div>
        </div>
    )
}

export default LoginPage