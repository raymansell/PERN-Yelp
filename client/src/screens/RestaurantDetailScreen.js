import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router';
import RestaurantFinderAPI from '../apis/RestaurantFinderAPI';
import StarRating from '../components/StarRating';
import Reviews from '../components/Reviews';
import AddReview from '../components/AddReview';

const RestaurantDetailScreen = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [reviews, setReviews] = useState([]);

  const fetchRestaurant = useCallback(async () => {
    try {
      const response = await RestaurantFinderAPI.get(`/${id}`);
      setRestaurant(response.data.data.restaurant);
      setReviews(response.data.data.reviews);
    } catch (error) {
      // consider adding error states in the future
    }
  }, [id]);

  useEffect(() => {
    fetchRestaurant();
  }, [fetchRestaurant]);

  return (
    <div>
      {restaurant && (
        <>
          <h1 className='text-center display-1'>{restaurant.name}</h1>
          <div className='text-center'>
            <StarRating rating={restaurant.average_rating} />
            <span className='text-warning ms-1'>
              {restaurant.total_reviews > 0
                ? `(${restaurant.total_reviews})`
                : '(0)'}
            </span>
          </div>
          <div className='mt-3'>
            <Reviews reviews={reviews} />
          </div>
          <AddReview refetchRestaurant={fetchRestaurant} />
        </>
      )}
    </div>
  );
};

export default RestaurantDetailScreen;
