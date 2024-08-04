import React from 'react';
import BlogLayout from '../components/BlogLayout';
import FeaturedPosts  from '../sections/FeaturedPosts';


const BlogPage = () => {
  return (
    <div className='bg-post-desktop bg-cover'>
     
      <FeaturedPosts />
      <BlogLayout />

    </div>
  );
};

export default BlogPage;
