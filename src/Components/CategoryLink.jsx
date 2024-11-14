/* eslint-disable react/prop-types */
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const CategoryLink = ({category}) => {
    return (
        <div>

<div role="tablist" className="tabs tabs-lifted mt-3">


  <NavLink to={`/category/${category.category_id}`} className='text-2xl btn h-auto' role="tab">{category.category_name}</NavLink>
</div>
            
        </div>
    );
};

export default CategoryLink;