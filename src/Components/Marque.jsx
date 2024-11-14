import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const Marque = () => {
    return (
        <div>
             <Marquee pauseOnHover={true} className='overflow-y-hidden' speed={100} gradient={false}>
           <button className='btn btn-error text-white'>Latest</button><Link to="/news" className='font-extrabold text-[#403F3F] ms-3 bg-base-200 px-5 py-5 rounded-lg'> Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
         </Marquee>


        </div>
    );
};

export default Marque;