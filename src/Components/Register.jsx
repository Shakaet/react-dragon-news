import React, { useContext, useState } from 'react';
import { AuthContext } from './Provider';
import { useNavigate } from 'react-router-dom';



const Register = () => {
    let {createNewUser}= useContext(AuthContext)

   let lin= useNavigate()

    let handleRegister=(e)=>{
        e.preventDefault()
        let name= e.target.name.value
        let photo= e.target.photo.value
        let email= e.target.email.value
        let password= e.target.password.value

        console.log(name,photo,email,password)
        createNewUser(email,password)
        .then(result=>{
            console.log(result.user)
            lin("/auth/login")
        })
        .catch((error)=>{
            alert(error)
        })


    }
    

    return (
        <div>
             <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Register your account</h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Your Name</label>
            <input
              type="text" name='name'
              placeholder="Enter your name"
              className="w-full px-4 py-2 mt-1 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Photo URL</label>
            <input
              type="text" name='photo'
              placeholder="Enter photo URL"
              className="w-full px-4 py-2 mt-1 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email" name='email'
              placeholder="Enter your email address"
              className="w-full px-4 py-2 mt-1 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password" name='password'
              placeholder="Enter your password"
              className="w-full px-4 py-2 mt-1 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox" name='checkbox'
              className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
            />
            <label className="ml-2 text-sm text-gray-700">
              Accept <span className="font-semibold text-black">Term & Conditions</span>
            </label>
          </div>
          <button className="w-full px-4 py-2 mt-4 text-white bg-black rounded-md">Register</button>
        </form>
      </div>
    </div>
        </div>
    );
};

export default Register;