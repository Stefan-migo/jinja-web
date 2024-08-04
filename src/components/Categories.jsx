import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getCategories } from '../services';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="bg-color-2 shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b border-color-4 pb-4">Categories</h3>
      {categories.map((category, index) => (
        <Link to={`/category/${category.slug}`} key={index} >
        <span className={`cursor-pointer block ${(index === categories.length - 1) ? 'border-b-0' : 'border-b'} pb-3 mb-3 border-color-4`}>{category.name}</span>
      </Link>
      ))}
    </div>
  );
};

export default Categories;