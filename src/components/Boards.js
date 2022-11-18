import './Boards.css'
import Noneboard from './Noneboard'
import Haveboards from './Haveboards'
import { collection, getDocs, query } from 'firebase/firestore'
import { db } from '../config'
import { AuthContext } from './Auth'
import { useContext, useEffect, useState } from 'react'
const Boards = () => {

    const authdata = useContext(AuthContext)
    const mycollectionRef = collection(db, 'users', authdata.currentUser.uid, 'MyBoards')

    const [myboards, setMyboards] = useState(false)

    const checkBoards = () => {
        getDocs(mycollectionRef).then(response => {
            console.log(response.docs.length);
            if (response.docs.length !== 0){
                setMyboards(true)
            } else {
                setMyboards(false)
            }
            
        }).catch(error => console.log(error))
    }

    useEffect(()=>{
        checkBoards()
    },[])

    return (
        <>
            {
                myboards ? <Haveboards/> : <Noneboard/>
            }
            
        </>
    )
}

export default Boards