/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';
import CategoryLink from './CategoryLink';

const LeftA = () => {


    let [categoryData,setCategoryData]=useState([])


    useEffect(()=>{
        fetch("https://openapi.programming-hero.com/api/news/categories")
        .then(res=>res.json())
        .then(data=>setCategoryData(data.data.news_category))
    },[])
    return (
        <div className='ms-5'>
            <h2 className='font-bold text-3xl'>All Caterogy ({categoryData.length})</h2>


           <div className='mt-10'>
           {
                categoryData.map(item=><CategoryLink category={item}></CategoryLink>)
            }
           </div>


        </div>
    );
};

export default LeftA;