const router = require('express').Router();
const {
  getRestaurants,
  getRestaurantById,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
  addReview,
} = require('../controllers/restaurants');

router.route('/').get(getRestaurants).post(createRestaurant);
router
  .route('/:id')
  .get(getRestaurantById)
  .put(updateRestaurant)
  .delete(deleteRestaurant);
router.route('/:id/addReview').post(addReview);
module.exports = router;
