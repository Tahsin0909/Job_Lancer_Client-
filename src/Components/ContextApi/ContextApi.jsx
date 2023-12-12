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
    const [loading, setLoading] = useState(true)
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
            fetch(`https://joblancernewserver.vercel.app/user/${AuthUser.uid}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setUser(data)
                    setLoading(false)
                })

        }
    }, [AuthUser.uid])

    const [theme, setTheme] = useState('green');
    useEffect(() => {
        const handleScroll = () => {
            const threshold = 2700; // Change color after scrolling 300 pixels
            // console.log(window.scrollY);
            if (window.scrollY > threshold && theme === 'green') {
                setTheme('blue');
            } else if (window.scrollY <= threshold && theme === 'blue') {
                setTheme('green');
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [theme]);

console.log(theme);
    const Data = {
        theme,
        AuthUser,
        loading,
        User,
        setUser,
        setLoading,
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