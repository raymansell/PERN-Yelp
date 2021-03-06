CREATE DATABASE yelp;

CREATE TABLE restaurant (
  id BIGSERIAL NOT NULL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  location VARCHAR(50) NOT NULL,
  price_range INT NOT NULL CHECK(price_range >= 1 AND price_range <= 5)
);

CREATE TABLE review (
  id BIGSERIAL NOT NULL PRIMARY KEY,
  restaurant_id BIGINT NOT NULL REFERENCES restaurant (id) ON DELETE CASCADE,
  name VARCHAR(50) NOT NULL,
  content TEXT NOT NULL,
  rating INT NOT NULL CHECK(rating >= 1 AND rating <=5)
);