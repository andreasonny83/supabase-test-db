import { Pool } from 'pg';
import 'dotenv/config';

function getPool() {
  try {
    console.log('Attempting to connect to the database at:', process.env.DB_HOST, 'on port:', process.env.DB_PORT);
    const client = new Pool({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DBUSER,
      password: process.env.DBPASSWORD,
    });

    return client;
  } catch (err) {
    console.error('Unexpected error:', err.message);
  }
}

async function listRestaurants() {
  const pool = getPool();
  const res = await pool.query('select id, name from restaurants order by name');
  console.log(res.rows);
}

listRestaurants();
