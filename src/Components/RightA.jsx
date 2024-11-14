import React from 'react';
import { IoLogoGoogle } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const RightA = () => {
    return (
        <div>
            <h2 className='font-bold  text-3xl'>login with</h2>

            <div className='mt-8'>
           
               <button className='btn btn-outline w-full h-auto border-2 border-[blue]'><span className='text-2xl'><IoLogoGoogle /></span>Login with Google</button>
             
                <button  className=' btn btn-outline mt-5 w-full h-auto border-2 border-[red]'><span className='text-2xl'><IoLogoGithub />
                </span>
                Login with Github</button>
            </div>

            <h2 className='font-bold  text-3xl mt-10 mb-10'>Find Us</h2>

            
            <div className='join flex join-vertical'>
           
               <button className='btn btn-outline w-full h-auto bg-base-100 join-item justify-start'><span className='text-2xl'><FaFacebook /></span>FaceBook</button>
             
                <button  className=' btn btn-outline mt-5 w-full bg-base-100 h-auto join-item justify-start'><span className='text-2xl'><FaTwitter />
                </span>
                Twitter</button>
                <button  className=' btn btn-outline mt-5 w-full h-auto bg-base-100 join-item justify-start'><span className='text-2xl'><FaInstagram />
                </span>
                Instagram</button>
            </div>


        </div>
    );
};

export default RightA;