-- PostgreSQL Database Setup for Neon
-- Run this in your Neon SQL Editor

-- Users Table
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    date_of_birth DATE NOT NULL,
    phone VARCHAR(20) NOT NULL,
    gender VARCHAR(10) NOT NULL CHECK (gender IN ('male', 'female', 'other')),
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Optional: Insert a test user
-- INSERT INTO users (name, date_of_birth, phone, gender, email, password) VALUES 
-- ('Test User', '2000-01-01', '1234567890', 'other', 'test@example.com', 'password123');
