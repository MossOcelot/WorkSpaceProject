import './Mail_card.css'

const Mailcard=()=>{
    return (
        <div className="Mail_card">
            <div className="title">
                <div className="profile">
                    <h1>phuminsathipchan</h1>
                    <p>บอร์ดงานที่ 1</p>
                </div>
                <div className="date">
                    <p>อ. 31 ส.ค. 2564</p>
                </div>
            </div>
            <div className="detail">
                <p>โปรดส่งงานภายในวันนี้ ตอน 14.30 น.</p>
            </div>
        </div>
    )
}

export default Mailcard