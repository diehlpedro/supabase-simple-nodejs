import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv';

dotenv.config();
// Load environment variables from .env file
const supabaseUrl = process.env.DB_HOST
const supabaseKey = process.env.API_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

// Insert a new record into the TEST table
try {
    const { data, error } = await supabase
        .from('TEST')
        .insert({test_txt: 'AAAAAAAAAA', test_int: 1234567890, test_float: 1.234567890 }) //'id': 0, 
        .select()
    console.log(data, error)
} catch (error) {
    console.log(error)
}

// Select all records from the TEST table
try {
    const { data, error } = await supabase
        .from('TEST')
        .select()
    console.log(data, error)
} catch (error) {
    console.log(error)
}