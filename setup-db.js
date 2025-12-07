require('dotenv').config({ path: '.env.local' });
const { sql } = require('@vercel/postgres');

async function setupDatabase() {
    try {
        // Check if table exists
        const checkTable = await sql`
            SELECT table_name 
            FROM information_schema.tables 
            WHERE table_schema = 'public' AND table_name = 'users'
        `;

        if (checkTable.rows.length === 0) {
            console.log('Creating users table...');

            // Create the table
            await sql`
                CREATE TABLE users (
                    id SERIAL PRIMARY KEY,
                    name VARCHAR(255) NOT NULL,
                    date_of_birth DATE NOT NULL,
                    phone VARCHAR(20) NOT NULL,
                    gender VARCHAR(10) NOT NULL CHECK (gender IN ('male', 'female', 'other')),
                    email VARCHAR(255) NOT NULL UNIQUE,
                    password VARCHAR(255) NOT NULL,
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                )
            `;

            console.log('✓ Users table created successfully!');
        } else {
            console.log('✓ Users table already exists!');
        }

        // Show table info
        const tableInfo = await sql`
            SELECT column_name, data_type 
            FROM information_schema.columns 
            WHERE table_name = 'users'
            ORDER BY ordinal_position
        `;

        console.log('\nTable structure:');
        tableInfo.rows.forEach(col => {
            console.log(`  - ${col.column_name}: ${col.data_type}`);
        });

        process.exit(0);
    } catch (error) {
        console.error('Error:', error.message);
        process.exit(1);
    }
}

setupDatabase();
