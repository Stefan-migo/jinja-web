import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCategories, getCategoryPost } from '../../services';
import PostCard from '../../components/PostCard';
import Categories from '../../components/Categories';
import Loader from '../../components/Loader';

const CategoryPost = () => {
  const { slug } = useParams(); // Get the slug from the URL
  const [posts, setPosts] = useState(null); // Initialize posts as null
  const [loading, setLoading] = useState(true); // Initialize loading state

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getCategoryPost(slug);
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [slug]);

  if (loading) {
    return <Loader />;
  }

  if (!posts || posts.length === 0) {
    return <p>No posts found.</p>;
  }

  return (
    <div className='bg-cover bg-post-desktop'>
      <div className="container pt-36 mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="col-span-1 lg:col-span-8">
            {posts.map((post, index) => (
              <PostCard key={index} post={post.node} />
            ))}
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky top-24">
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default CategoryPost;
