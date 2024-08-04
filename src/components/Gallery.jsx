// File path: src/components/Gallery.js

import React, { useEffect, useState } from 'react';
import Bg from '../assets/galery/bg.svg';
import Section from './Section';

function Gallery() {
  const [instagramPosts, setInstagramPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/instagram-posts');
        const data = await response.json();
        setInstagramPosts(data);
      } catch (error) {
        console.error('Error fetching Instagram posts:', error);
      }
    };

    fetchPosts();
  }, []);

  const renderPosts = (posts) => {
    return posts.map((post) => (
      <div key={post.id} className="post-wrapper" onClick={() => setSelectedPost(post)}>
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
              <img src={selectedPost.media_url} alt={selectedPost.caption} className="media" />
            )}
            {selectedPost.media_type === 'VIDEO' && (
              <video src={selectedPost.media_url} controls className="media" />
            )}
            {selectedPost.media_type === 'CAROUSEL_ALBUM' && (
              <img src={selectedPost.media_url} alt={selectedPost.caption} className="modal-media" />
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;
