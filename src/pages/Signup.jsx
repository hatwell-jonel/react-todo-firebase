import React, {useEffect, useState} from 'react'
import { MdEmail, MdLock, } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { createUser } from '../features/auth/authSlice';
import { useDispatch } from 'react-redux';



function SignUp() {
  const dispatch = useDispatch();
  const loginPage = "/";
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
    username: '',
  });

  const handleCreateUser = (e) => {
    e.preventDefault();


    try {
      dispatch(createUser(userInfo));

      Swal.fire({
        icon: 'success',
        title: 'Your account has been Created. Please Login.',
        timer: 7000
      }).then(result => {
        navigate(loginPage);
      })
      
    } catch (error) {
      console.error("error: ", error);

      let errorMessage = "An error occurred. Please try again later.";

      if (error.code === 'auth/invalid-email') {
        errorMessage = "Invalid email address.";
      } else if (error.code === 'auth/email-already-in-use') {
        errorMessage = "Email already in use.";
      }
      
      Swal.fire({
        icon: 'error',
        title: 'Account creation failed',
        text: errorMessage
      });
    }
  }
  
  return (
    <form className='auth_form' onSubmit={handleCreateUser}>
      <h2 className='auth_form-title'>REGISTRATION</h2>
      
      <div className="auth_form_input">
        <input 
          type="text" 
          placeholder="Username"
          className='auth_form_input-field'
          maxLength={40}
          value={userInfo.username}
          onChange={(e) => setUserInfo({ ...userInfo, username: e.target.value })}
        />
        <FaUser className="auth_form_input-icon" />
      </div>

      <div className="auth_form_input">
        <input 
          type="email" 
          placeholder="Email"
          className='auth_form_input-field'
          maxLength={40}
          value={userInfo.email}
          onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
        />
        <MdEmail className="auth_form_input-icon" />
      </div>

      <div className="auth_form_input">
        <input 
          type="password" 
          placeholder="Password"
          className='auth_form_input-field'
          maxLength={25}
          value={userInfo.password}
          onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
        />
        <MdLock className="auth_form_input-icon" />
      </div>
      
      <div className="auth_form-registration">
        <p>Already have an account? <Link className='link' to={loginPage}>Login</Link></p>
      </div>
      
      <button type="submit" className='auth_form-btn'>Sign Up</button>
    </form>
  )
}

export default SignUp