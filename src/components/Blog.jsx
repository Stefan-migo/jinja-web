// components/Blog.js
import React, { useEffect, useState } from 'react';
import Bg from '../assets/blog/bg.svg';
import PostCardHomePage from './PostCardHomePage';
import { getPosts } from '../services';
import Section from './Section';
import { Link } from 'react-router-dom';

function Blog() {
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

  // Limit the posts to the first three
  const limitedPosts = posts.slice(0, 3);

  return (
    <section className="relative w-full min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${Bg})` }}>
      <Section className="flex flex-col items-center justify-center h-full text-center z-10 px-4 md:px-10" id="blog">
        <Link to={`/blog`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-color-4 mb-12">Blog</h2>
        </Link>
        <div className="mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {limitedPosts.map(({ node }) => (
              <PostCardHomePage post={node} key={node.title} />
            ))}
          </div>
        </div>
      </Section>
    </section>
  );
}

export default Blog;
