import { useState } from 'react';
import { useParams } from 'react-router-dom';
import RestaurantFinderAPI from '../apis/RestaurantFinderAPI';

const AddReview = ({ refetchRestaurant }) => {
  const [fields, setFields] = useState({
    name: '',
    rating: 'Rating',
    content: '',
  });
  const { id } = useParams();

  const handleChange = (e) => {
    setFields((prevFields) => ({
      ...prevFields,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    await RestaurantFinderAPI.post(`/${id}/addReview`, {
      name: fields.name,
      content: fields.content,
      rating: fields.rating,
    });
    refetchRestaurant(); // refetching bc now we need to take into account this review to update the avg rating from RestaurantDetailScreen
  };

  return (
    <form className='row g-3' onSubmit={handleSubmitReview}>
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
