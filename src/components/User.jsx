
import React, { useState, useEffect } from 'react'
import caretIcon  from "../assets/icon-caretright.svg";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { logout } from '../features/auth/authSlice';


function User() {
    const [showLogout, setShowlogout] = useState(false);
    const navigate = useNavigate();
    const [displayName, setDisplayName] = useState('');
    const {user} = useSelector((store) => store.authentication);

    const handleLogout = () => {
        setShowlogout(!showLogout);
    }

    const sessionLogout =  () => {
        logout();
        navigate('/');
        console.log('pasok');
    }


    return (
        <div className='user'>
            <span className='user__name'>{}</span>

            <div className="user__logout">
                <button className='user__logout-caret' onClick={handleLogout} >
                    <img src={caretIcon} alt="" />
                </button>
                {
                    showLogout &&
                    ( 
                        <div className="btns">
                            <button className='btns-logout' onClick={sessionLogout}>logout</button>
                            <button className='btns-deleteacc'>delete account</button>
                        </div>
                    )
                }
           
            </div>
        </div>
    )
}

export default User