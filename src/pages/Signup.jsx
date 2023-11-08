import React, {useEffect, useState} from 'react'
import { MdEmail, MdLock, } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function SignUp() {
  const loginPage = "/";
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  
  return (
    <form className='auth_form'>
      <h2 className='auth_form-title'>REGISTRATION</h2>
      
      <div className="auth_form_input">
        <input 
          type="text" 
          placeholder="Username"
          className='auth_form_input-field'
          maxLength={40}
          onChange={(e) => setUsername(e.target.value)} 
          value={username}
        />
        <FaUser className="auth_form_input-icon" />
      </div>

      <div className="auth_form_input">
        <input 
          type="email" 
          placeholder="Email"
          className='auth_form_input-field'
          maxLength={40}
          onChange={(e) => setEmail(e.target.value)} 
          value={email}
        />
        <MdEmail className="auth_form_input-icon" />
      </div>

      <div className="auth_form_input">
        <input 
          type="password" 
          placeholder="Password"
          className='auth_form_input-field'
          maxLength={25}
          onChange={(e) => setPassword(e.target.value)} 
          value={password}
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