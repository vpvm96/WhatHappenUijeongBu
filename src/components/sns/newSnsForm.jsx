import React, { useState } from 'react';

const NewSnsForm = ({ snsService, onError }) => {
  const [sns, setSns] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    snsService
      .postSns(sns)
      .then((created) => {
        setSns('');
      })
      .catch(onError);
  };

  const onChange = (event) => {
    setSns(event.target.value);
  };

  return (
    <form className='sns-form' onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='Edit your sns'
        value={sns}
        required
        autoFocus
        onChange={onChange}
        className='form-input sns-input'
      />
      <button type='submit' className='form-btn'>
        Post
      </button>
    </form>
  );
};

export default NewSnsForm;
