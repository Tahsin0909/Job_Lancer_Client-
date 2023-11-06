/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

import auth from "../SDK/Sdk";


const AuthContext = createContext()
const ContextApi = ({ children }) => {
    // emailAndPassword Authentication
    const [user, setUser] = useState({})
    const [MdbUser, setMdbUser] = useState({})
    const [loading, setLoading] = useState(true)
    // console.log(loading)

    // sign up
    const PasswordSignUp = (email, password) => {
        setLoading(true)
        // console.log(loading)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //Sign in
    const PasswordSignIn = (email, password) => {
        setLoading(true)
        // console.log(loading)
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
                setUser(user)
                // console.log(user)
                if (user.email) {
                    setLoading(false)
                }
                // console.log(loading)



            } else {
                // console.log(user)
            }
        });
        return () => Unsubscribe()
    }, [loading])

    //Sign out
    const SignOut = () => {
        signOut(auth)
            .then(
                setUser({}),
                setLoading(false),
                // console.log(loading)

            )
            .catch(error => console.log(error.message))
    }
    // emailAndPassword Authentication

    // For toast

    // useEffect(() => {
    //     fetch(`https://mern-stack-server-f016uivpb-tahsins-projects-38f8b810.vercel.app/user/${user.id}`)
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    // }, [user])


    const Data = {
        PasswordSignUp,
        PasswordSignIn,
        user,
        SignOut,
        GoogleSignUp,
        loading,
    }
    return (
        <AuthContext.Provider value={Data}>
            {children}
        </AuthContext.Provider>
    )
};

export { AuthContext, ContextApi };