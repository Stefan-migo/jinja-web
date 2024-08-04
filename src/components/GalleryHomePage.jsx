import React, { useEffect, useState } from 'react';
import Bg from '../assets/galery/bg.svg';
import Section from './Section';

function GalleryHomePage() {
  const [instagramPosts, setInstagramPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jinja-server.onrender.com/api/instagram-posts');
        const data = await response.json();
        setInstagramPosts(data);
      } catch (error) {
        console.error('Error fetching Instagram posts:', error);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const articles = Array.from(document.querySelectorAll('.post-wrapper'));
    articles.forEach((article, index) => {
      setTimeout(() => {
        article.classList.add('reveal');
      }, index * 250);
    });
  }, [instagramPosts]);

  const renderPosts = (posts) => {
    // Limit posts to 9
    const limitedPosts = posts.slice(0, 9);

    return limitedPosts.map((post) => (
      <div
        key={post.id}
        className={`post-wrapper ${post.size === 'small' ? 'item-small' : post.size === 'medium' ? 'item-medium' : 'item-large'}`}
        onClick={() => setSelectedPost(post)}
      >
        {post.media_type === 'IMAGE' && (
          <img src={post.media_url} alt={post.caption} className="media" />
        )}
        {post.media_type === 'VIDEO' && (
          <video src={post.media_url} className="media" />
        )}
        {post.media_type === 'CAROUSEL_ALBUM' && (
          <img src={post.media_url} alt={post.caption} className="media" />
        )}
      </div>
    ));
  };

  const closeModal = () => {
    setSelectedPost(null);
  };

  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center flex items-center"
      id="gallery"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <Section className="container mx-auto px-4 md:px-10 flex justify-center">
        <div className="grid-container">
          {instagramPosts.length > 0 && renderPosts(instagramPosts)}
        </div>
      </Section>

      {selectedPost && (
        <div className="modal">
          <div className="modal-content bg-color-1">
            <span className="close" onClick={closeModal}>&times;</span>
            {selectedPost.media_type === 'IMAGE' && (
              <img src={selectedPost.media_url} alt={selectedPost.caption} className="media modal-media" />
            )}
            {selectedPost.media_type === 'VIDEO' && (
              <video src={selectedPost.media_url} controls className="media modal-media" />
            )}
            {selectedPost.media_type === 'CAROUSEL_ALBUM' && (
              <img src={selectedPost.media_url} alt={selectedPost.caption} className="media modal-media" />
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default GalleryHomePage;
