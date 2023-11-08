import React from 'react'
import { AiFillGoogleSquare } from 'react-icons/ai';

function GoogleButton() {
  return (
      <button type='button' className='socialmed-btn google-btn'>
        <AiFillGoogleSquare className='socialmed-btn-logo' /> Login with Google
      </button>
  )
}

export default GoogleButton