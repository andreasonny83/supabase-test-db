import { Client } from 'pg';
import 'dotenv/config';

async function testConnection() {
  try {
    console.log('Attempting to connect to the database at:', process.env.DB_HOST, 'on port:', process.env.DB_PORT);
    const client = new Client({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DBUSER,
      password: process.env.DBPASSWORD,
    });

    await client.connect();
    console.log('Database connection established successfully.');
  } catch (err) {
    console.error('Unexpected error:', err.message);
  }
}

testConnection();
