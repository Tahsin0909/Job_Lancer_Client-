/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../../SDK";


const AuthContext = createContext()
const ContextApi = ({ children }) => {
    // emailAndPassword Authentication
    const [AuthUser, setAuthUser] = useState({})
    const [User, setUser] = useState({})
    // console.log(loading)

    // sign up
    const PasswordSignUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //Sign in
    const PasswordSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    // Google Sign In
    const GoogleProvider = new GoogleAuthProvider();

    const GoogleSignUp = () => {
        return signInWithPopup(auth, GoogleProvider)
    }
    // Google Sign In

    // Save user
    useEffect(() => {
        const Unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
            } else {
                // console.log(user)
            }
        });
        return () => Unsubscribe()
    }, [])

    //Sign out
    const LogOut = () => {
        signOut(auth)
            .then(
                setAuthUser({}),
                setUser({})
            )
            .catch(error => console.log(error.message))
    }
    // USer Fetch From Database

    useEffect(() => {
        if (AuthUser.uid) {
            fetch(`http://localhost:5000/user/${AuthUser.uid}`)
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    setUser(data)
                })
        }
    }, [AuthUser.uid])

    const Data = {
        AuthUser,
        User,
        PasswordSignUp,
        PasswordSignIn,
        GoogleSignUp,
        LogOut
    }
    return (
        <AuthContext.Provider value={Data}>
            {children}
        </AuthContext.Provider>
    )
};

export { AuthContext, ContextApi };