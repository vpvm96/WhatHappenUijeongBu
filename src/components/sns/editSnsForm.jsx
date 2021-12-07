import React, { useState } from 'react';

const EditSnsForm = ({ sns, onUpdate, onClose }) => {
  const [text, setText] = useState(sns.text);

  const onSubmit = async (event) => {
    event.preventDefault();
    onUpdate(sns.id, text);
    onClose();
  };

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <form className='edit-tweet-form' onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='Edit your tweet'
        value={text}
        required
        autoFocus
        onChange={onChange}
        className='form-input tweet-input'
      />
      <div className='edit-tweet-form-action'>
        <button type='submit' className='form-btn-update'>
          Update
        </button>
        <button type='button' className='form-btn-cancel' onClick={onClose}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditSnsForm;
