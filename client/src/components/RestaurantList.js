import { useEffect } from 'react';
import { useRestaurants } from '../context/RestaurantsContext';
import RestaurantFinderAPI from '../apis/RestaurantFinderAPI';

const RestaurantList = () => {
  const { restaurants, setRestaurants } = useRestaurants();

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await RestaurantFinderAPI.get('/');
        setRestaurants(response.data.data.restaurants);
      } catch (err) {
        // consider adding error states in the future
      }
    };
    fetchRestaurants();
  }, [setRestaurants]);

  const handleDelete = async (id) => {
    try {
      await RestaurantFinderAPI.delete(`/${id}`);
      setRestaurants((prevRestaurants) =>
        prevRestaurants.filter((r) => r.id !== id)
      );
    } catch (err) {
      // consider adding error states in the future
    }
  };

  return (
    <table className='table table-hover table-dark'>
      <thead>
        <tr className='table-secondary'>
          <th scope='col'>Restautant</th>
          <th scope='col'>Location</th>
          <th scope='col'>Price Range</th>
          <th scope='col'>Ratings</th>
          <th scope='col'>Edit</th>
          <th scope='col'>Delete</th>
        </tr>
      </thead>
      <tbody>
        {restaurants.length > 0 &&
          restaurants.map((r) => (
            <tr key={r.id}>
              <td>{r.name}</td>
              <td>{r.location}</td>
              <td>{'$'.repeat(r.price_range)}</td>
              <td>reviews</td>
              <td>
                <button className='btn btn-warning'>Update</button>
              </td>
              <td>
                <button
                  className='btn btn-danger'
                  onClick={() => handleDelete(r.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default RestaurantList;
