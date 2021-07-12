import StarRating from './StarRating';

const Reviews = ({ reviews }) => {
  return (
    <div className='row row-cols-1 row-cols-md-3 mb-2'>
      {reviews.map((review) => (
        <div key={review.id} className='col'>
          <div className='card text-white bg-primary mb-3'>
            <div className='card-header d-flex justify-content-between'>
              <span>{review.name}</span>
              <span>
                <StarRating rating={review.rating} />
              </span>
            </div>
            <div className='card-body'>
              <p className='card-text'>{review.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
