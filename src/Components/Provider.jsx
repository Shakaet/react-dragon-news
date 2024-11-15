import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from './firebase.init';


export let AuthContext=createContext()

const Provider = ({children}) => {


    let [user,setUser]= useState(null)

    let [loading,setLoading]=useState(true)






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
        loading
    }
    return (
        <AuthContext.Provider value={value}>

                {children}

            
        </AuthContext.Provider>
    );
};

export default Provider;