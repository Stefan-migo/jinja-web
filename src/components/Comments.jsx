import React, { useEffect, useState } from 'react';
import moment from 'moment';
import parse from 'html-react-parser';
import { getComments } from '../services';

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const result = await getComments(slug);
        console.log('Comments from API:', result); // Add this line
        setComments(result || []);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, [slug]);

  return (
    <>
      {comments.length > 0 && (
        <div className="bg-color-2 shadow-lg rounded-lg p-8 pb-12 mb-8">
          <h3 className="text-xl mb-8 font-semibold border-b border-color-4 pb-4">
            {comments.length} Comments
          </h3>
          {comments.map((comment, index) => (
            <div key={index} className="border-b border-color-4 border-opacity-20 mb-4 pb-4">
              <p className="mb-4">
                <span className="font-semibold">{comment.name}</span> on{' '}
                {moment(comment.createdAt).format('MMM DD, YYYY')}
              </p>
              <p className="whitespace-pre-line text-gray-600 w-full">
                {parse(comment.comment)}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Comments;
