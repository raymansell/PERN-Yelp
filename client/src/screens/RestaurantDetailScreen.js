import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import RestaurantFinderAPI from '../apis/RestaurantFinderAPI';

const RestaurantDetailScreen = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const response = await RestaurantFinderAPI.get(`/${id}`);
        setRestaurant(response.data.data.restaurant);
      } catch (error) {
        // consider adding error states in the future
      }
    };
    fetchRestaurant();
  }, [id]);
  return (
    <div>
      {restaurant && (
        <>
          <h1 className='text-center display-1'>{restaurant.name}</h1>
        </>
      )}
    </div>
  );
};

export default RestaurantDetailScreen;
