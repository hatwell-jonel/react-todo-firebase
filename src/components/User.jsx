import React, { useState, useEffect } from 'react'
import caretIcon  from "../assets/icon-caretright.svg";
import {useAuthContext} from "../context/AuthContext";
import { useNavigate } from 'react-router-dom';

function User() {

    const {logout, user,deleteUserAccount} = useAuthContext();
    const [showLogout, setShowlogout] = useState(false);
    const navigate = useNavigate();
    const [displayName, setDisplayName] = useState('');

    const handleLogout = () => {
        setShowlogout(!showLogout);
    }

    const sessionLogout = async () => {
        await logout();
        navigate('/');
    }


    // DELETE THE ACCOUNT OF CURRENT USER
    const deleteAccount = () => {
        deleteUserAccount();
    }
     
    useEffect(() => {
        setDisplayName(user.displayName);
    }, [user])
 
    return (
        <div className='user'>
            <span className='user__name'>{displayName}</span>

            <div className="user__logout">
                <button className='user__logout-caret' onClick={handleLogout} >
                    <img src={caretIcon} alt="" />
                </button>
                {
                    showLogout &&
                    ( 
                        <div className="btns">
                            <button className='btns-logout' onClick={sessionLogout}>logout</button>
                            <button className='btns-deleteacc' onClick={deleteAccount}>delete account</button>
                        </div>
                    )
                }
           
            </div>
        </div>
    )
}

export default User