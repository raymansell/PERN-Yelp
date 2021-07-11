import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import RestaurantFinderAPI from '../apis/RestaurantFinderAPI';

const UpdateRestaurant = () => {
  const { id } = useParams();
  const history = useHistory();

  const [fields, setFields] = useState({
    name: '',
    location: '',
    priceRange: 'Select',
  });

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const response = await RestaurantFinderAPI.get(`/${id}`);
        const {
          data: {
            data: {
              restaurant: { name, location, price_range },
            },
          },
        } = response;
        setFields({ name, location, priceRange: price_range });
      } catch (err) {
        // consider adding error states in the future
      }
    };
    fetchRestaurant();
  }, [id]);

  const handleChange = (e) => {
    setFields((prevFields) => ({
      ...prevFields,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await RestaurantFinderAPI.put(`/${id}`, {
        name: fields.name,
        location: fields.location,
        price_range: fields.priceRange,
      });
      history.push('/');
    } catch (err) {
      // consider adding error states in the future
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='mb-3'>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          id='name'
          className='form-control'
          name='name'
          value={fields.name}
          onChange={handleChange}
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='location'>Location</label>
        <input
          type='text'
          id='location'
          className='form-control'
          name='location'
          value={fields.location}
          onChange={handleChange}
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='priceRange' className='form-label'>
          Price Range
        </label>
        <select
          id='priceRange'
          className='form-select'
          name='priceRange'
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
      <button type='submit' className='btn btn-primary'>
        Submit
      </button>
    </form>
  );
};

export default UpdateRestaurant;
