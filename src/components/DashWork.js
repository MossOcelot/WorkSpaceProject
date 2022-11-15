import "./Dashwork.css"

const Dashworks=()=>{
    return (
        <div className="dashworks">
            <div className="topdashworks">
                <h1>งานของคุณ</h1>
                <div className="boarddash"><p>บอร์ดงานที่ 1</p></div>
            </div>
            <div className="maindashworks">
                <div className="outmain"></div>
                <div className="inmain">
                    <p>บอร์ดงานที่ 1</p>
                </div>
            </div>
            <div className="footdashworks">
                <div className="footcard">
                    <div className="numworks" style={{background: '#2F80ED'}}>
                        <p>10</p>
                    </div>
                    <p className="p">งานใหม่</p>
                </div>
                <div className="footcard">
                    <div className="numworks"  style={{background: '#EB5757'}}>
                        <p>10</p>
                    </div>
                    <p className="p">งานใหม่</p>
                </div>
                <div className="footcard">
                    <div className="numworks" style={{background: '#F2C94C'}}>
                        <p>10</p>
                    </div>
                    <p className="p">งานใหม่</p>
                </div>
                <div className="footcard">
                    <div className="numworks" style={{background: '#27AE60'}}>
                        <p>10</p>
                    </div>
                    <p className="p">งานใหม่</p>
                </div>
            </div>
        </div>
    )
}

export default Dashworks