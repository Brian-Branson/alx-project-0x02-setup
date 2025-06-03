import React, { useState, FormEvent } from 'react';
import { PostModalProps } from '@/interfaces';


const PostModal: React.FC<Omit<PostModalProps, 'trigger'> & { trigger?: React.ReactElement }> = ({ onSubmit, trigger }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit({ title, content });
    setTitle('');
    setContent('');
    setOpen(false);
  };

  const handleClick = () => {
    setOpen(true);

  };

  return (
    <>
      {trigger ? (
        React.cloneElement(trigger as React.ReactElement, { onClick: handleClick, })
      ) : (
        <button onClick={handleClick}>Post</button>
      )}
      {open && (
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="post-title">Title:</label>
              <input
                id="post-title"
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="post-content">Content:</label>
              <textarea
                id="post-content"
                value={content}
                onChange={e => setContent(e.target.value)}
                required
              />
            </div>
            <button type="submit" onClick={() => setOpen(false)}>Submit</button>
            <button type="button" onClick={() => setOpen(false)}>Cancel</button>
          </form>
        </div>
      )}
    </>
  );
};

export default PostModal;
