const AddRestaurant = () => {
  return (
    <div className='mb-4'>
      <form>
        <div className='row g-3 justify-content-center'>
          <div className='col-md-4'>
            <label htmlFor='name' className='form-label'>
              Name
            </label>
            <input type='text' className='form-control' id='name' />
          </div>
          <div className='col-md-4'>
            <label htmlFor='location' className='form-label'>
              Location
            </label>
            <input type='text' className='form-control' id='location' />
          </div>
          <div className='col-md-2'>
            <label htmlFor='priceRange' className='form-label'>
              Price Range
            </label>
            <select id='priceRange' className='form-select'>
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
