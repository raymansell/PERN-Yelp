const { Pool } = require('pg');

const pool = new Pool({
  // https://node-postgres.com/api/client
  // Being redundant here just for clarity:
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  port: process.env.PGPORT,
});

module.exports = pool;
