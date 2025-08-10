import postgres from 'postgres';
import {
  Professors,
} from './definitions';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function fetchProfessors() {
  try {
    const professors = await sql<Professors[]>`
      SELECT id, name, subject, image_url FROM professors_list
      ORDER BY name ASC
    `;

    return professors;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all professors.');
  }
}

export async function fetchProfessorById(id: string) {
  try {
    const professor = await sql<Professors[]>`
      SELECT id, name, subject, description, image_url FROM professors_list WHERE id = ${id}
    `;

    return professor;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all professors.');
  }
}