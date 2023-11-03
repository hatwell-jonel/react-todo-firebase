import React from 'react'
// import { UserAuth } from '../context/UserAuth'
import { FaFacebookSquare } from 'react-icons/fa';

function FacebookButton() {
  
//   const {loginWithFacebook} = UserAuth();
 
//   const handleFacebookLogin = async () => {
//     await loginWithFacebook();
//   }

  return (
      <button type='button' className='facebook-btn socialmed-btn'><FaFacebookSquare className='socialmed-btn-logo'/>Login with Facebook</button>
  )
}

export default FacebookButton