import React, { useState } from 'react'
import caretIcon  from "../assets/icon-caretright.svg";

function User() {

    const [showLogout, setShowlogout] = useState(false);

    const handleLogout = () => {
        setShowlogout(!showLogout);
    }

    return (
        <div className='user'>
            <span className='user__name'>user</span>

            <div className="user__logout">
                <button className='user__logout-caret' onClick={handleLogout} >
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