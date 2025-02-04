'use client'
import React, { useState, useEffect } from 'react';

const CommentBox = () => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<string[]>([]);

  // Load comments from localStorage on initial render
  useEffect(() => {
    const storedComments = localStorage.getItem('comments');
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  // Function to add a new comment
  const addComments = () => {
    if (comment.trim() !== '') {
      const updatedComments = [...comments, comment];
      setComments(updatedComments);
      setComment('');
      localStorage.setItem('comments', JSON.stringify(updatedComments)); // Save to localStorage
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mt-6 text-primary">Comment</h1>
      
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write your comment here.."
        className="border border-primary mt-3 w-80 p-2"
      />
      
      <button
        className="bg-primary text-white p-2 m-4 w-36 mt-3"
        onClick={addComments}
      >
        Add Comment
      </button>
      <div className="mt-2">
        <h2 className='text-primary font-bold text-xl'>Reviews:</h2>
        {comments.length === 0 ? (
          <p>No comments yet. Add your comment!</p>
        ) : (
          <ul>
            {comments.map((data, index) => (
              <li key={index} className='border border-b-2 p-4 text-slate-800 dark:text-white'>{data}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CommentBox;
