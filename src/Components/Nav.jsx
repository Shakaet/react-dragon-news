import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa'

const Nav = () => {

    let link =<>

                <li><Link className="text-[#706F6F] font-bold">Home</Link></li>
                <li><Link className="text-[#706F6F] font-bold">About</Link></li>
                <li><Link className="text-[#706F6F] font-bold">Career</Link></li>

    
    
    
    </>
    return (
        <div>


<div className="navbar bg-base-100 mt-10">
  <div className="navbar-start">
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
  <FaUserCircle className='text-4xl' />
    <a className="btn ms-2 bg-[#403F3F] text-white">login</a>
  </div>
</div>
            
        </div>
    );
};

export default Nav;