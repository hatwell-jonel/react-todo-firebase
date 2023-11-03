import { useState } from 'react'
import { BrowserRouter, Routes, Route  } from 'react-router-dom';

import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Main from "./pages/Main"
import NotFound from "./pages/NotFound"
import Header from "./components/Header"

import {TodoContextProvider} from './context/TodoContext';

function App() {
  return (
    <BrowserRouter>
      <div className='banner'></div>
      <TodoContextProvider>
      <Header />

      <Routes>
        <Route path="/" element={<Login />} /> 
        {/* <Route path="/" element={<Main />} />  */}
        <Route path="*" element={<NotFound />} /> 
      </Routes>
      </TodoContextProvider>
    </BrowserRouter>
  )
}

export default App
