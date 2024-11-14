import React, { useEffect, useState } from 'react';
import icon from '../assets/logo.png'

import RightA from './RightA';

import { useLoaderData } from 'react-router-dom';

const SpecificNews = () => {

    

    
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


  const newsData = useLoaderData();
  const newsItem = newsData?.data?.[0];
  
  useEffect(() => {
    console.log(newsItem._id);
}, [newsItem]);

    return (
        <div>
                 <div className='flex flex-col justify-between items-center mt-10'>

 <img className='mb-5' src={icon} alt="">
</img>

<p className='text-[#706F6F] font-semibold mb-3'>Journalism Without Fear or Favour</p>
<p className='text-[#706F6F] text-2xl font-bold mb-10'>{formattedDate}</p>



<main className='container mx-auto mt-10 '>

<div className='md:flex gap-5'>


  <section className='w-8/12'>

  <div className=" mx-auto bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
            <img
                src={newsItem.image_url}
                alt="News Thumbnail"
                className="w-full rounded-lg  object-cover"
            />
            <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">
                   {newsItem.title}
                </h2>
                
                <p className="text-gray-700 mb-6">
                   {newsItem.details}
                   </p>
                <button className="btn btn-error">
                    ← All news in this category
                </button>
            </div>
        </div>

  </section>

  <aside className='w-4/12'>

     <RightA></RightA>

  </aside>
</div>

</main>





</div>
            
        </div>
    );
};

export default SpecificNews;