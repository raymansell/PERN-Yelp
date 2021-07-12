import { useState } from 'react';

const AddReview = () => {
  const [fields, setFields] = useState({ name: '', rating: '', content: '' });
  const handleChange = (e) => {
    setFields((prevFields) => ({
      ...prevFields,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form className='row g-3'>
      <div className='col-8'>
        <label htmlFor='name' className='form-label'>
          Name
        </label>
        <input
          type='text'
          id='name'
          name='name'
          value={fields.name}
          onChange={handleChange}
          className='form-control'
          placeholder='Please enter your name'
        />
      </div>
      <div className='col-4'>
        <label htmlFor='rating' className='form-label'>
          Rating
        </label>
        <select
          id='rating'
          name='rating'
          value={fields.rating}
          onChange={handleChange}
          className='form-select'
        >
          <option disabled>Rating</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
        </select>
      </div>
      <div className='col-12'>
        <label htmlFor='content' className='form-label'>
          Review
        </label>
        <textarea
          id='content'
          name='content'
          value={fields.content}
          onChange={handleChange}
          className='form-control'
        ></textarea>
      </div>
      <div className='col-12'>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddReview;
