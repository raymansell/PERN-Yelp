import { useState } from 'react';
import RestaurantFinderAPI from '../apis/RestaurantFinderAPI';
import { useRestaurants } from '../context/RestaurantsContext';

const AddRestaurant = () => {
  const [fields, setFields] = useState({
    name: '',
    location: '',
    priceRange: 'Select',
  });

  const { setRestaurants } = useRestaurants();

  const handleChange = (e) => {
    setFields((prevFields) => ({
      ...prevFields,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await RestaurantFinderAPI.post('/', {
        name: fields.name,
        location: fields.location,
        price_range: fields.priceRange,
      });
      // appending newly created restaurant to state
      setRestaurants((prevRestaurants) => [
        ...prevRestaurants,
        response.data.data.restaurant,
      ]);
    } catch (err) {
      // consider adding error states in the future
    }
  };

  return (
    <div className='mb-4'>
      <form onSubmit={handleSubmit}>
        <div className='row g-3 justify-content-center'>
          <div className='col-md-4'>
            <label htmlFor='name' className='form-label'>
              Name
            </label>
            <input
              type='text'
              className='form-control'
              id='name'
              name='name'
              value={fields.name}
              onChange={handleChange}
            />
          </div>
          <div className='col-md-4'>
            <label htmlFor='location' className='form-label'>
              Location
            </label>
            <input
              type='text'
              className='form-control'
              id='location'
              name='location'
              value={fields.location}
              onChange={handleChange}
            />
          </div>
          <div className='col-md-2'>
            <label htmlFor='priceRange' className='form-label'>
              Price Range
            </label>
            <select
              id='priceRange'
              name='priceRange'
              className='form-select'
              value={fields.priceRange}
              onChange={handleChange}
            >
              <option disabled>Select</option>
              <option value='1'>$</option>
              <option value='2'>$$</option>
              <option value='3'>$$$</option>
              <option value='4'>$$$$</option>
              <option value='5'>$$$$$</option>
            </select>
          </div>
          <div className='col-md-1 d-flex'>
            <button
              type='submit'
              className='btn btn-primary col-md-12 align-self-end'
            >
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddRestaurant;
