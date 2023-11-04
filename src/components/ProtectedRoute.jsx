import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'

function ProtectedRoute({children}) {
    const {user} = useAuthContext();
    const loginPage = "/";

    if(!user){
        return <Navigate to={loginPage} />
    }

    return children;
}

export default ProtectedRoute