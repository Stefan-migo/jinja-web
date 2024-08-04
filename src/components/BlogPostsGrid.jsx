import React from 'react';
import PostCard from './PostCard';

const BlogPostsGrid = ({ posts }) => {
  return (
    <div className="w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 ">
      {posts.map(({ node }) => (
        <PostCard post={node} key={node.title} />
      ))}
    </div>
  );
};

export default BlogPostsGrid;
