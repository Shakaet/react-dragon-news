import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaStar, FaShareAlt, FaEye } from 'react-icons/fa';
import SpecificCategory from './SpecificCategory';

const CategoryNews = () => {

    let {data}= useLoaderData()
    console.log(data)
    return (
        <div>
            <h2 className='text-3xl font-bold ms-5'>Dragon News Home</h2>

           {
            // eslint-disable-next-line react/jsx-key
            data.map(news=><SpecificCategory news={news}></SpecificCategory>)
           }
           {
            data.length ===0 && <h1 className='text-5xl font-extrabold text-center justify-center items-center md:mt-56'>There are no category </h1>
           }
        </div>
    );
};

export default CategoryNews;