import {MdAllInbox ,MdCreate} from "react-icons/md";
import './Dashmails.css'
import Mailcard from "./Mail_card";
const Dashmails=()=>{
    
    return (
        <div className="dashmails">
            <div className="topdash">
                <MdAllInbox className="icons"/>
                <MdCreate className="icons"/>
            </div>
            <div className="maindash">
                
                <Mailcard/>
                <Mailcard/>
                <Mailcard/>
            </div>
        </div>
    )
}

export default Dashmails