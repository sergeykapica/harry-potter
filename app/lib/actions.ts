'use server';

import { z } from 'zod';
import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, {
    ssl: 'require',
});

const FormSchema = z.object({
    id: z.string(),
    first_name: z.string(),
    last_name: z.string(),
    email: z.string(),
    message: z.string(),
    date: z.string(),
});

const CreateRequest = FormSchema.omit({
    id: true,
    date: true,
});

export async function createRequest(formData: FormData) {

    const {
        first_name,
        last_name,
        email,
        message
    } = CreateRequest.parse({
        first_name: formData.get('first_name'),
        last_name: formData.get('last_name'),
        email: formData.get('email'),
        message: formData.get('message'),
    });

    const date = new Date().toISOString();
    
    try {
        await sql`
            INSERT INTO requests (first_name, last_name, email, message, date)
            VALUES (${first_name}, ${last_name}, ${email}, ${message}, ${date})
        `;  
    } catch (error) {
        // We'll log the error to the console for now
        console.error(error);
    }
}