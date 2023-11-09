
import React, { useState, useEffect } from 'react'
import caretIcon  from "../assets/icon-caretright.svg";
import { useNavigate } from 'react-router-dom';

function User() {
    const [showLogout, setShowlogout] = useState(false);
    const navigate = useNavigate();
    const [displayName, setDisplayName] = useState('');

 
    return (
        <div className='user'>
            <span className='user__name'>{displayName}</span>

            <div className="user__logout">
                <button className='user__logout-caret' >
                    <img src={caretIcon} alt="" />
                </button>
                {
                    showLogout &&
                    ( 
                        <div className="btns">
                            <button className='btns-logout'>logout</button>
                            <button className='btns-deleteacc'>delete account</button>
                        </div>
                    )
                }
           
            </div>
        </div>
    )
}

export default User