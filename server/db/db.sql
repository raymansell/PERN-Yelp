CREATE DATABASE yelp;

CREATE TABLE restaurant (
  id BIGSERIAL NOT NULL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  location VARCHAR(50) NOT NULL,
  price_range INT NOT NULL CHECK(price_range >= 1 AND price_range <= 5)
);

INSERT INTO restaurant (name, location, price_range) VALUES ('wendys', 'denver', 3);