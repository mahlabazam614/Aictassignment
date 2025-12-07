'use server';

import { sql } from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function registerUser(formData: FormData) {
    const name = formData.get('name') as string;
    const date_of_birth = formData.get('date_of_birth') as string;
    const phone = formData.get('phone') as string;
    const gender = formData.get('gender') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (!name || !email || !password) {
        // Simple validation
        throw new Error('Missing required fields');
    }

    try {
        // PostgreSQL uses $1, $2, $3... for parameterized queries
        await sql`
            INSERT INTO users (name, date_of_birth, phone, gender, email, password)
            VALUES (${name}, ${date_of_birth}, ${phone}, ${gender}, ${email}, ${password})
        `;

        // Revalidate the data page so the new user shows up
        revalidatePath('/data');

    } catch (error) {
        console.error('Registration error:', error);
        // Log more details for debugging
        if (error instanceof Error) {
            console.error('Error message:', error.message);
            console.error('Error stack:', error.stack);
        }
        throw new Error('Failed to register user: ' + (error instanceof Error ? error.message : 'Unknown error'));
    }

    // Redirect to the data page on success
    redirect('/data');
}
