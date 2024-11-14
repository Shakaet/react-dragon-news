import React, { useContext } from 'react';
import { AuthContext } from './Provider';

const Login = () => {

    let{loginUser}=useContext(AuthContext)


    let handleLogin=(e)=>{

        e.preventDefault()
        let email= e.target.email.value
        let password= e.target.password.value

        // console.log(email,password)
        loginUser(email,password)
        .then(result=>{
            console.log(result.user)
            alert("login Succesful")
        })
        .catch((error)=>{
            alert(error)
        })



    }
    return (
        <div>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Login your account</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email address</label>
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
          <button className="w-full px-4 py-2 mt-4 text-white bg-black rounded-md">Login</button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-500">
          Don’t Have An Account?{' '}
          <a href="/auth/register" className="text-error">Register</a>
        </p>
      </div>
         </div>
        </div>
    );
};

export default Login;