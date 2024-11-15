import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from './firebase.init';
import { GoogleAuthProvider,GithubAuthProvider } from "firebase/auth";


export let AuthContext=createContext()

const Provider = ({children}) => {

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();



    


    let [user,setUser]= useState(null)

    let [loading,setLoading]=useState(true)


    let githubSignIn=()=>{
        return signInWithPopup(auth, githubProvider)
    }


    let handleGoogleSignIn=()=>{
        return signInWithPopup(auth, googleProvider)
  

    }






    let createNewUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    let loginUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    let UserLogOut=()=>{
        setLoading(true)
        return signOut(auth)
          
    }

  useEffect(()=>{
    let unsubscribe= onAuthStateChanged(auth, (currentUser) => {
        
        //   console.log(currentUser)
          setLoading(false)
          setUser(currentUser)
        
        

        return ()=>{
            unsubscribe()
        }
      });
  },[])

    let value={
        createNewUser,
        loginUser,
        user,
        UserLogOut,
        loading,
        handleGoogleSignIn,
        githubSignIn
    }
    return (
        <AuthContext.Provider value={value}>

                {children}

            
        </AuthContext.Provider>
    );
};

export default Provider;