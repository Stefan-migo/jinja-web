import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const PostCardHomePage = ({ post }) => {
  return (
    <div className="bg-color-3 rounded-lg shadow-lg p-0 mb-8">
      <div className="relative overflow-hidden shadow-md pb-48 mb-12">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="object-top absolute h-48 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
        />
      </div>
      <h3 className="transition duration-300 text-center mb-8 cursor-pointer hover:text-color-1 text-2xl font-semibold">
        <Link to={`/post/${post.slug}`}>{post.title}</Link>
      </h3>
      <p className="text-center text-sm text-color-4 font-normal px-4 lg:px-10 mb-8">
        {post.excerpt}
      </p> 
      <div className="text-center mb-4">
        <Link to={`/post/${post.slug}`}>
          <span className="button items-center justify-center box-border py-5 mt-2 mb-3 mr-5 ml-10 
    text-center rounded-2xl px-7 transition duration-500 ease transform hover:-translate-y-1 inline-flex bg-color-4 text-color-2 hover:text-color-3 cursor-pointer">Leer más...</span>
        </Link>
      </div>
    </div>
  );
};

export default PostCardHomePage;
