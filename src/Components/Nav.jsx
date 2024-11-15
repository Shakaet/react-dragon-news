import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa'
import { AuthContext } from './Provider';

const Nav = () => {

  let {user,UserLogOut}= useContext(AuthContext)

  let linkage=useNavigate()


  let handleLogOut=()=>{
    UserLogOut()
    .then(()=>{
      alert("signOut Successful")
      linkage("/auth/login")

    })
    .catch((error)=>{
      // console.log(error)
    })
  }

    let link =<>

                <li><Link className="text-[#706F6F] font-bold">Home</Link></li>
                <li><Link className="text-[#706F6F] font-bold">About</Link></li>
                <li><Link className="text-[#706F6F] font-bold">Career</Link></li>

    
    
    
    </>
    return (
        <div>


<div className="md:navbar bg-base-100 mt-10">
  <div className="navbar-start">

    <h2>Email: {user?.email}</h2>
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {link}
      </ul>
    </div>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {link}
    </ul>
  </div>
  <div className="navbar-end">
    {
      user ? <div className='md:flex items-center gap-5'>

    <div className='md:flex md:flex-col justify-center items-center mt-2'>
    <img className='w-12 rounded-full' src={user.photoURL}></img>
    <p className='font-bold text-xs'>{user.displayName}</p>
    </div>
    <Link onClick={handleLogOut} className="btn ms-2 bg-[#403F3F] text-white mt-5">logOut</Link>


      
      
      </div>:

   <div className='flex  items-center'>

      <FaUserCircle className='text-4xl' />
      <Link to="/auth/login" className="btn ms-2 bg-[#403F3F] text-white">login</Link>


   </div>


    }
 
  </div>
</div>
            
        </div>
    );
};

export default Nav;