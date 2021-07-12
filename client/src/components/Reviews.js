import StarRating from './StarRating';

const Reviews = () => {
  return (
    <div className='row row-cols-1 row-cols-md-3 mb-2'>
      <div className='col'>
        <div className='card text-white bg-primary mb-3 me-3'>
          <div className='card-header d-flex justify-content-between'>
            <span>Joan</span>
            <span>
              <StarRating rating={4} />
            </span>
          </div>
          <div className='card-body'>
            <p className='card-text'>This resturant was awesome</p>
          </div>
        </div>
      </div>
      <div className='col'>
        <div className='card text-white bg-primary mb-3 me-3'>
          <div className='card-header d-flex justify-content-between'>
            <span>Joan</span>
            <span>
              <StarRating rating={4} />
            </span>
          </div>
          <div className='card-body'>
            <p className='card-text'>This resturant was awesome</p>
          </div>
        </div>
      </div>
      <div className='col'>
        <div className='card text-white bg-primary mb-3 me-3'>
          <div className='card-header d-flex justify-content-between'>
            <span>Joan</span>
            <span>
              <StarRating rating={4} />
            </span>
          </div>
          <div className='card-body'>
            <p className='card-text'>This resturant was awesome</p>
          </div>
        </div>
      </div>
      <div className='col'>
        <div className='card text-white bg-primary mb-3 me-3'>
          <div className='card-header d-flex justify-content-between'>
            <span>Joan</span>
            <span>
              <StarRating rating={4} />
            </span>
          </div>
          <div className='card-body'>
            <p className='card-text'>This resturant was awesome</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
