const StarRating = ({ rating }) => {
  const stars = [1, 2, 3, 4, 5].map((n) => {
    if (n <= rating) {
      return <i key={n} className='fas fa-star text-warning'></i>; // full star
    } else if (n === Math.ceil(rating) && !Number.isInteger(rating)) {
      return <i key={n} className='fas fa-star-half-alt text-warning'></i>; // half a star
    } else {
      return <i key={n} className='far fa-star text-warning'></i>; // outlined star
    }
  });

  return <>{stars}</>;
};

export default StarRating;
