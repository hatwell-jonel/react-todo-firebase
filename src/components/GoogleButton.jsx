import React from 'react'
// import { UserAuth } from '../context/UserAuth'
import { AiFillGoogleSquare } from 'react-icons/ai';

function GoogleButton() {

  // const {loginWithGoogle, user} = UserAuth();

  // const handleGoogleSignIn = async () => {
  //     await loginWithGoogle();
  // }

  return (
      <button type='button' className='socialmed-btn google-btn'>
        <AiFillGoogleSquare className='socialmed-btn-logo' /> Login with Google
        </button>
  )
}

export default GoogleButton