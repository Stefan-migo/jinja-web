import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPostDetails } from '../../services';
import AdjacentPosts from '../../sections/AdjacentPosts';
import PostDetail from '../../components/PostDetail';
import Categories from '../../components/Categories';
import PostWidget from '../../components/PostWidget';
import Author from '../../components/Author';
import Comments from '../../components/Comments';
import CommentsForm from '../../components/CommentsForm';
import Loader from '../../components/Loader';

const PostDetails = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await getPostDetails(slug);
        setPost(data);
      } catch (error) {
        console.error('Failed to fetch post details', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return <Loader />;
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className='bg-cover bg-post-desktop'>
      <div className="container pt-36 mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="col-span-1 lg:col-span-8">
            <PostDetail post={post} />
            <Author author={post.author} />
            <AdjacentPosts slug={post.slug} createdAt={post.createdAt} />
            <CommentsForm slug={post.slug} />
            <Comments slug={post.slug} /> {/* Ensure this is included */}
          </div>
          <div className="col-span-1 lg:col-span-4 pb-8">
            <div className="relative lg:sticky top-24">
              <PostWidget slug={post.slug} categories={post.category.map((category) => category.slug)} />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
