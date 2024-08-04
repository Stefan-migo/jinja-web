import React, { useEffect, useState } from 'react';
import BlogPostsGrid from './BlogPostsGrid';
import PostWidget from './PostWidget';
import { getPosts } from '../services';
import Categories from './Categories';

const BlogLayout = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await getPosts();
        setPosts(fetchedPosts);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchPosts();
  }, []);

  if (error) {
    return <div>Error fetching posts: {error}</div>;
  }

  return (
    <div className="mx-auto flex justify-center h-auto py-12 px-4 lg:px-8 ">
      <div className="container">
        <BlogPostsGrid posts={posts} />
        <div className="sidebar">
          <div className='sticky top-24 pb-[0.1rem]'>
            <PostWidget posts={posts} />
            <Categories posts={posts} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogLayout;
