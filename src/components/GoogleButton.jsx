import React from 'react'
import { AiFillGoogleSquare } from 'react-icons/ai';
import { loginWithGoogle } from '../features/auth/authSlice';

function GoogleButton() {

  const handleGooogleSignIn = () => {
    loginWithGoogle();
  }

  return (
      <button type='button' className='socialmed-btn google-btn' onClick={handleGooogleSignIn}>
        <AiFillGoogleSquare className='socialmed-btn-logo' /> Login with Google
      </button>
  )
}

export default GoogleButton