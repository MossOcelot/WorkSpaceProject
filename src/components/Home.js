import Cardworks from '../components/Card_works.js'
import Dashworks from '../components/DashWork'
import Dashmails from '../components/Dashmails'

import { BsPersonCircle } from "react-icons/bs"

const Home = () => {
    return (
        <>
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
        </>
    )
}

export default Home