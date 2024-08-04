import React, { useState, useEffect } from 'react';
import { submitComment } from '../services';

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', comment: '', storeData: false });

  useEffect(() => {
    setLocalStorage(window.localStorage);
    const initialFormData = {
      name: window.localStorage.getItem('name') || '',
      email: window.localStorage.getItem('email') || '',
      storeData: !!(window.localStorage.getItem('name') || window.localStorage.getItem('email')),
    };
    setFormData(initialFormData);
  }, []);

  const onInputChange = (e) => {
    const { target } = e;
    if (target.type === 'checkbox') {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.checked,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.value,
      }));
    }
  };

  const handlePostSubmission = async () => {
    setError(false);
    const { name, email, comment, storeData } = formData;
    if (!name || !email || !comment) {
      setError(true);
      return;
    }
    const commentObj = {
      name,
      email,
      comment,
      slug,
    };
  
    if (storeData) {
      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
    } else {
      localStorage.removeItem('name');
      localStorage.removeItem('email');
    }
  
    try {
      const res = await submitComment(commentObj);
      if (res.createComment) {
        if (!storeData) {
          setFormData({ ...formData, name: '', email: '', comment: '' });
        } else {
          setFormData((prevState) => ({
            ...prevState,
            comment: '',
          }));
        }
        setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 3000);
      }
    } catch (error) {
      console.error('Failed to submit comment:', error);
    }
  };
  

  return (
    <div className="bg-color-2 shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b border-color-4 border-opacity-50 pb-4">Leave a Comment</h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea
          value={formData.comment}
          onChange={onInputChange}
          className="p-4 outline-none w-full rounded-lg h-40 focus:ring-2 focus:ring-color-4 bg-color-1 text-color-4"
          name="comment"
          placeholder="Comment"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          value={formData.name}
          onChange={onInputChange}
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-color-4 bg-color-1 text-color-4"
          placeholder="Name"
          name="name"
        />
        <input
          type="email"
          value={formData.email}
          onChange={onInputChange}
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-color-4 bg-color-1 text-color-4"
          placeholder="Email"
          name="email"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <input
            checked={formData.storeData}
            onChange={onInputChange}
            type="checkbox"
            id="storeData"
            name="storeData"
            value="true"
          />
          <label className="text-color-4 cursor-pointer ml-2" htmlFor="storeData">
            Save my name and email for the next time I comment.
          </label>
        </div>
      </div>
      {error && <p className="text-xs text-red-500">All fields are required.</p>}
      <div className="mt-8">
        <button
          type="button"
          onClick={handlePostSubmission}
          className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-color-4 text-lg font-medium rounded-full text-color-1 px-8 py-3 cursor-pointer"
        >
          Post Comment
        </button>
        {showSuccessMessage && (
          <span className="text-xl float-right font-semibold mt-3 text-color-3">
            Comment submitted for review.
          </span>
        )}
      </div>
    </div>
  );
};

export default CommentsForm;
