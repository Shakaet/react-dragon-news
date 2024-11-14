import React, { useEffect, useState } from 'react';


import icon from '../assets/logo.png'
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';
import Marque from './Marque';

const Header = () => {

    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentDateTime(new Date());
        }, 1000); // Update every second
    
        // Clean up the interval when the component unmounts
        return () => clearInterval(intervalId);
      }, []);

       // Define options for formatted date
  const dateOptions = {
    weekday: 'long',   // Full weekday name (e.g., "Sunday")
    year: 'numeric',   // Full year (e.g., "2024")
    month: 'long',     // Full month name (e.g., "November")
    day: 'numeric'     // Day of the month (e.g., "27")
  };

  const formattedDate = currentDateTime.toLocaleDateString(undefined, dateOptions);
    return (
        <div className='flex flex-col justify-between items-center mt-10'>

            <img className='mb-5' src={icon} alt="">
            </img>

            <p className='text-[#706F6F] font-semibold mb-3'>Journalism Without Fear or Favour</p>
            <p className='text-[#706F6F] text-2xl font-bold mb-10'>{formattedDate}</p>
            
            <Marque></Marque>
           
            
        </div>
    );
};

export default Header;