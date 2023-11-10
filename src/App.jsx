import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from "./pages/Login"
import Main from "./pages/Main"
import NotFound from "./pages/NotFound"
import Header from "./components/Header"
import ProtectedRoute from "./components/ProtectedRoute"
import SignUp from "./pages/SignUp"

import { onAuthStateChanged } from 'firebase/auth';
import {auth} from "./firebase";

import {TodoContextProvider} from './context/TodoContext';
import {AuthContextProvider} from './context/AuthContext';
import { useDispatch, useSelector } from 'react-redux';
import { authenticatedUser } from './features/auth/authSlice';

function App() {
  const {user} = useSelector((store) => store.authentication);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(authenticatedUser(user));
      }
    });
    console.log(user);
  }, [dispatch, auth, user]);

  return (
    <BrowserRouter>
      <div className='banner'></div>
      <Header />
        <Routes>
          <Route path="/" element={<Login />} /> 
          <Route path="/account-registration" element={<SignUp />} /> 
            <Route path="/todo" element={<Main />} /> 
            <Route path="*" element={<NotFound />} /> 
        </Routes>
    </BrowserRouter>
  )
}

export default App


{/* <BrowserRouter>
<div className='banner'></div>
<Header />
<AuthContextProvider>
  <Routes>
    <Route path="/" element={<Login />} /> 
    <Route path="/account-registration" element={<SignUp />} /> 
      <Route path="/todo" element={
        <ProtectedRoute>
          <TodoContextProvider>
            <Main />
          </TodoContextProvider>
        </ProtectedRoute>
      } /> 
      <Route path="*" element={<NotFound />} /> 
  </Routes>
</AuthContextProvider>
</BrowserRouter> */}