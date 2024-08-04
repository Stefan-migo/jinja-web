import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
  return (
    <div className="bg-color-3 rounded-lg shadow-lg p-0 lg:p-8 pb=12 mb-8">
      <div className="relative overflow-hidden shadow-md pb-80 mb-6">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
        />
      </div>
      <h3 className="transition duration-300 text-center mb-8 cursor-pointer hover:text-color-1 text-3xl font-semibold">
        <Link to={`/post/${post.slug}`}>{post.title}</Link>
      </h3>
      <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
        <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
          <img
            alt={post.author.name}
            height="30px"
            width="30px"
            className="align-middle rounded-full"
            src={post.author.photo.url}
          />
          <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">{post.author.name}</p>
        </div>
        <div className="font-medium text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-color-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="align-middle">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
        </div>
      </div>
      <p className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8">
        {post.excerpt}
      </p>
      <div className="text-center mb-4">
        <Link to={`/post/${post.slug}`}>
        <span className="button items-center justify-center box-border py-5 mt-2 mb-3 mr-5 ml-10 
    text-center rounded-2xl px-7 transition duration-500 ease transform hover:-translate-y-1 inline-flex bg-color-4 text-color-2 hover:text-color-3 cursor-pointer">Continuar Leyendo</span>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
