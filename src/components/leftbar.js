import { MdCollectionsBookmark, MdDashboard, MdMail, MdMessage } from 'react-icons/md'
import './leftbar.css'

const Leftbar = () => {
    return (
        <div className="left-bar">
            <div className="menu">
                <MdDashboard className='icons-menu' />
                <p className='p-menu'>Home</p>
            </div>
            <div className="menu" >
                <MdCollectionsBookmark className='icons-menu' />
                <p className='p-menu'>Boards</p>
            </div>
            <div className="menu">
                <MdMail className='icons-menu' />
                <p className='p-menu'>Mails</p>
            </div>
            <div className="menu">
                <MdMessage className='icons-menu' />
                <p className='p-menu'>Message</p>
            </div>
        </div>
    )
}

export default Leftbar