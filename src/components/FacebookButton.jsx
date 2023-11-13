import React from 'react'
import { useAuthContext } from '../context/AuthContext'
import { FaFacebookSquare } from 'react-icons/fa';

function FacebookButton() {
  
  const {loginWithFacebook} = useAuthContext();
 
  const handleFacebookLogin = async () => {
    await loginWithFacebook();
  }

  return (
      <button type='button' className='facebook-btn socialmed-btn' onClick={handleFacebookLogin}><FaFacebookSquare className='socialmed-btn-logo'/>Login with Facebook</button>
  )
}

export default FacebookButton