import { createClient } from '@supabase/supabase-js';
import 'dotenv/config';

async function testConnection() {
  try {
    console.log('Attempting to connect to the database at:', process.env.DB_URL);
    const supabase = createClient(process.env.DB_URL, `${process.env.DBUSER}:${process.env.DBPASSWORD}`);
    // Test a simple query on auth.users (always exists)
    const { data, error } = await supabase.auth.getUser(); // server-side: use service key
    if (error) {
      console.error('Connection failed:', error.message);
      return;
    }

    console.log('Connection successful!', data);
  } catch (err) {
    console.error('Unexpected error:', err.message);
  }
}

testConnection();
