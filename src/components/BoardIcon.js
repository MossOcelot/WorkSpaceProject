import './BoardIcon.css'

const Boardicons=(props)=>{

    
    return (
        <div className='iboard' onClick={props.click}>
            <div className="icon-board" ></div>
            <p>{(props.title === "") ? "บอร์ดงานไม่มีชื่อ":props.title}</p>
        </div>
    )
}

export default Boardicons