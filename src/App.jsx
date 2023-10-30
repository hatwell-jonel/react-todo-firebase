import { useState } from 'react'
import { BrowserRouter, Routes, Route  } from 'react-router-dom';

import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Main from "./pages/Main"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <BrowserRouter>
      <div className='banner'>banner</div>
      <Routes>
        <Route path="/" element={<Main />} /> 
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App
