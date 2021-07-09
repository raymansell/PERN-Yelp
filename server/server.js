require('dotenv').config();
const express = require('express');
const restaurantsRoutes = require('./routes/restaurants');

const app = express();

// middleware
app.use(express.json());

// routes
app.use('/api/v1/restaurants', restaurantsRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
