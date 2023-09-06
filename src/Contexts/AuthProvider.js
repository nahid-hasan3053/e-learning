import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app);
export const AuthContext = createContext();


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logInWithEmail = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    const logOut = () =>{
        setLoading(true)
        return signOut(auth);
    }

    const signInwithGoogle = (provider) =>{
        setLoading(true)
        return signInWithPopup(auth, provider);
    }

    const verifyEmail = () =>{
        return sendEmailVerification(auth.currentUser)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setLoading(false)
            if(currentUser === null || currentUser.emailVerified){
                setUser(currentUser);
            }
        })
        return ()=>{
            return unsubscribe();
        }
    },[])

    const authInfo ={createUser, verifyEmail, logInWithEmail, user, logOut, signInwithGoogle, setLoading, loading}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;