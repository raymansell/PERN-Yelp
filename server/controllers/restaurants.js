const pool = require('../db/db');

// Get all restaurants
const getRestaurants = async (req, res) => {
  try {
    const restaurants = await pool.query('SELECT * FROM restaurant');
    return res.status(200).json({
      success: true,
      results: restaurants.rows.length,
      data: {
        restaurants: restaurants.rows,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Server error',
    });
  }
};

// Get a restaurant by id
const getRestaurantById = async (req, res) => {
  const { id } = req.params;
  try {
    const restaurant = await pool.query(
      'SELECT * FROM restaurant WHERE id = $1',
      [id]
    );
    return res.status(200).json({
      success: true,
      data: {
        restaurant: restaurant.rows[0],
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Server error',
    });
  }
};

// Create a restaurant
const createRestaurant = async (req, res) => {
  const { name, location, price_range } = req.body;
  try {
    const newRestaurant = await pool.query(
      'INSERT INTO restaurant (name, location, price_range) VALUES ($1, $2, $3) RETURNING *',
      [name, location, price_range]
    );
    return res.status(201).json({
      success: true,
      data: {
        restaurant: newRestaurant.rows[0],
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Server error',
    });
  }
};

// Update a restaurant
const updateRestaurant = async (req, res) => {
  const { name, location, price_range } = req.body;
  const { id } = req.params;
  try {
    const updatedRestaurant = await pool.query(
      'UPDATE restaurant SET name = $1, location = $2, price_range = $3 WHERE id = $4 RETURNING *',
      [name, location, price_range, id]
    );
    console.log(updatedRestaurant);
    return res.status(200).json({
      success: true,
      data: {
        restaurant: updatedRestaurant.rows[0],
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Server error',
    });
  }
};

// Delete a restaurant
const deleteRestaurant = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM restaurant WHERE id = $1', [id]);
    return res.status(200).json({
      success: true,
      data: null,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Server error',
    });
  }
};

module.exports = {
  getRestaurants,
  getRestaurantById,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
};
