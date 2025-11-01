import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile  } from 'firebase/auth';
import { auth } from "../firebase/firebase.config";
import React from 'react';
import { createContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
export const AuthContext = createContext(null)



const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
 const createUse = (email,password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
 }   
const signIn = (email,password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}
const logOut = () =>{
    return signOut(auth)
}

const updateUser = (updatedData) =>{
    return updateProfile(auth.currentUser,updatedData)
}

useEffect(() =>{
  const unsubscribe =   onAuthStateChanged(auth,(currentUser) =>{
    setUser(currentUser)
    setLoading(false)
  })
    return () =>{
        unsubscribe
    } 
},[])

 const  authData ={
        createUse,
        signIn,
        user,
        setUser,
        logOut,
        loading,
        setLoading,
        updateUser
        

        
    }
    return <AuthContext value = {authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;