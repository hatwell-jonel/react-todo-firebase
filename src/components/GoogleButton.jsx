import React from 'react'
import { useAuthContext } from '../context/AuthContext'
import { AiFillGoogleSquare } from 'react-icons/ai';

function GoogleButton() {

  const {loginWithGoogle} = useAuthContext();

  const handleGoogleSignIn = async () => {
      await loginWithGoogle();
  }

  return (
      <button type='button' className='socialmed-btn google-btn' onClick={handleGoogleSignIn}>
        <AiFillGoogleSquare className='socialmed-btn-logo' /> Login with Google
      </button>
  )
}

export default GoogleButton