import { useState } from 'react'
import { BrowserRouter, Routes, Route  } from 'react-router-dom';

import Login from "./pages/Login"
import Main from "./pages/Main"
import NotFound from "./pages/NotFound"
import Header from "./components/Header"
import ProtectedRoute from "./components/ProtectedRoute"
import SignUp from "./pages/SignUp"


import {TodoContextProvider} from './context/TodoContext';
import {AuthContextProvider} from './context/AuthContext';

function App() {
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