const RestaurantList = () => {
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
        <tr>
          <td>mcdonalds</td>
          <td>New York</td>
          <td>$$</td>
          <td>Rating</td>
          <td>
            <button className='btn btn-warning'>Update</button>
          </td>
          <td>
            <button className='btn btn-danger'>Delete</button>
          </td>
        </tr>
        <tr>
          <td>mcdonalds</td>
          <td>New York</td>
          <td>$$</td>
          <td>Rating</td>
          <td>
            <button className='btn btn-warning'>Update</button>
          </td>
          <td>
            <button className='btn btn-danger'>Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default RestaurantList;
