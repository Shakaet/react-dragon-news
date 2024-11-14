import React from 'react';
import { FaStar, FaShareAlt, FaEye } from 'react-icons/fa';

const SpecificCategory = ({news}) => {
    return (
        <div className='mt-10'>

<div className="p-4 border rounded-lg shadow-sm  mx-auto flex flex-col justify-center">
            {/* Header Section */}
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <img
                        src={news.thumbnail_url}
                        alt="Author"
                        className="w-10 h-10 rounded-full"
                    />
                    <div className="ml-3">
                        {
                            news.author.name ?<p className="font-semibold text-sm">{news.author.name}</p>:
                            <p className="font-semibold text-sm">{"Does Not Contain Name"}</p>
                        }
                        
                        <p className="text-xs text-gray-500">{news.author.published_date}</p>
                    </div>
                </div>
                <FaShareAlt className="text-gray-500 cursor-pointer" />
            </div>

            {/* Title Section */}
            <h2 className="mt-4 font-bold text-lg leading-tight">
                {news.author.title}
            </h2>

            {/* Image Section */}
            <img
                src={news.image_url}
                alt="News"
                className="w-full h-52 object-cover mt-3 rounded-md"
            />

            {/* Description Section */}
            <p className="text-gray-500 text-sm mt-3">
                {news.details}
            </p>

            {/* Footer Section */}
            <div className="flex items-center justify-between mt-4">
                <div className="flex items-center text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                    ))}
                    <span className="text-gray-700 ml-2 text-sm">{news.rating.number}</span>
                </div>
                <div className="flex items-center text-gray-500">
                    <FaEye />
                    <span className="ml-1 text-sm">{news.total_view}</span>
                </div>
            </div>
        </div>
            
        </div>
    );
};

export default SpecificCategory;