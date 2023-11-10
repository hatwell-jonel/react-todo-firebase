import { useContext, createContext, useEffect, useState } from "react";
import {
    signOut, 
    onAuthStateChanged, 
    GoogleAuthProvider, 
    FacebookAuthProvider,
    signInWithRedirect,
    signInWithPopup,
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword,
    deleteUser
} from 'firebase/auth';
import Swal from 'sweetalert2';

import {auth} from "../firebase";

const context = createContext();

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({});

    const createUser = async (email, password, username) => {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        
        // Set the username in the user's profile or store it in the database
        await updateProfile(userCredential.user, { displayName: username });
       
        return userCredential;
    }

    const loginWithemailAndPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logout = () => {
        return signOut(auth);
    }

    const loginWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    }

    const loginWithFacebook = () => {
        const provider = new FacebookAuthProvider();
        signInWithPopup(auth, provider);
    } 

    const deleteUserAccount = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
            'Deleted!',
            'Your account has been deleted.',
            'success'
            ).then(() => {
            deleteUser(user);
            })
        }
        })
    }
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            // console.log(currentUser);
        });

        return () => unsubscribe()
    }, [])


    return (
        <context.Provider value={{user,createUser,loginWithemailAndPassword,logout,loginWithFacebook, loginWithGoogle, deleteUserAccount}}>
            {children}
        </context.Provider>
    )
}

export const useAuthContext = () => {
    return useContext(context);
}