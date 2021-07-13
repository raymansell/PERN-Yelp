import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useRestaurants } from '../context/RestaurantsContext';
import RestaurantFinderAPI from '../apis/RestaurantFinderAPI';
import StarRating from './StarRating';

const RestaurantList = () => {
  const { restaurants, setRestaurants } = useRestaurants();

  const history = useHistory();

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

  const handleDelete = async (e, id) => {
    e.stopPropagation();
    try {
      await RestaurantFinderAPI.delete(`/${id}`);
      setRestaurants((prevRestaurants) =>
        prevRestaurants.filter((r) => r.id !== id)
      );
    } catch (err) {
      // consider adding error states in the future
    }
  };

  const handleUpdate = (e, id) => {
    e.stopPropagation();
    history.push(`/restaurants/${id}/update`);
  };

  const handleRestaurantSelect = (id) => {
    history.push(`/restaurants/${id}`);
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
            <tr key={r.id} onClick={() => handleRestaurantSelect(r.id)}>
              <td>{r.name}</td>
              <td>{r.location}</td>
              <td>{'$'.repeat(r.price_range)}</td>
              <td>
                {r.total_reviews > 0 ? (
                  <>
                    <StarRating rating={r.average_rating} />
                    <span className='text-warning ms-1'>
                      ({r.total_reviews})
                    </span>
                  </>
                ) : (
                  <span className='text-warning ms-1'>0 reviews</span>
                )}
              </td>
              <td>
                <button
                  className='btn btn-warning'
                  onClick={(e) => handleUpdate(e, r.id)}
                >
                  Update
                </button>
              </td>
              <td>
                <button
                  className='btn btn-danger'
                  onClick={(e) => handleDelete(e, r.id)}
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
