import { MdCollectionsBookmark, MdDashboard, MdMail, MdMessage } from 'react-icons/md'
import './leftbar.css'

const Leftbar = (props) => {

    const changepage = (page) => {
        props.updatepage(page)
    }

    return (
        <div className="left-bar">
            <div className="menu" onClick={function (e) {
                changepage("Home");
            }}>
                <MdDashboard className='icons-menu' />
                <p className='p-menu'>Home</p>
            </div>
            <div className="menu" onClick={function (e) {
                changepage("Boards");
            }}>
                <MdCollectionsBookmark className='icons-menu' />
                <p className='p-menu'>Boards</p>
            </div>
            <div className="menu" onClick={function (e) {
                changepage("Mails");
            }}>
                <MdMail className='icons-menu' />
                <p className='p-menu'>Mails</p>
            </div>
            <div className="menu" onClick={function (e) {
                changepage("Message");
            }}>
                <MdMessage className='icons-menu' />
                <p className='p-menu'>Message</p>
            </div>
        </div>
    )
}

export default Leftbar