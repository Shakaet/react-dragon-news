import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from './firebase.init';


export let AuthContext=createContext()

const Provider = ({children}) => {


    let [user,setUser]= useState(null)




    let createNewUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    let loginUser=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }


    let UserLogOut=()=>{
        return signOut(auth)
          
    }

  useEffect(()=>{
    let unsubscribe= onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
          console.log(currentUser)
        } else {
          // User is signed out
          // ...
        }
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
        UserLogOut
    }
    return (
        <AuthContext.Provider value={value}>

                {children}

            
        </AuthContext.Provider>
    );
};

export default Provider;