import React, {useState, useEffect} from 'react'
import { MdEmail, MdLock } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import FacebookButton from '../components/FacebookButton';
import GoogleButton from '../components/GoogleButton';
import {useAuthContext} from "../context/AuthContext";

function Login() {
  const registrationPage = "/account-registration";
  const mainPage = "/todo";
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {loginWithEmailAndPassword,user} = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await loginWithEmailAndPassword(email, password);     
  }

  useEffect(() => {
    if(user != null){
      navigate(mainPage);
    }
  },[user]);

  
  return (
    <form className='auth_form' onSubmit={handleSubmit}>
      <h2 className='auth_form-title'>WELCOME</h2>

      <div className="auth_form_input">
        <input 
          type="email" 
          placeholder="Email"
          className='auth_form_input-field'
          maxLength={40}
          onChange={(e) => setEmail(e.target.value)}
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
        />
        <MdLock className="auth_form_input-icon" />
      </div>
      
      <div className="auth_form-registration">
        <p>Don't have and account yet? <Link className='link' to={registrationPage}>Register</Link></p>
      </div>
      
      <button type="submit" className='auth_form-btn'>Login</button>

      <div className="auth_form-separator">
        <p>or</p>
      </div>

      <div className="another-login">
        <FacebookButton />
        <GoogleButton />
      </div>
    </form>
  )
}

export default Login