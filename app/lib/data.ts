import postgres from 'postgres';
import {
  Professors,
} from './definitions';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function fetchProfessors() {
  try {
    const professors = await sql<Professors[]>`
      SELECT * FROM professors
      ORDER BY name ASC
    `;

    return professors;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all professors.');
  }
}