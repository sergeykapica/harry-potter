import postgres from 'postgres';
import { professors } from '../lib/placeholder-data';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function seedProfessors() {
  await sql`
    CREATE TABLE IF NOT EXISTS professors (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      subject VARCHAR(255) NOT NULL,
      image_url TEXT NOT NULL
    );
  `;

  const insertedProfessors = await Promise.all(
    professors.map(async (professor) => {
      return sql`
        INSERT INTO users (name, subject, image_url)
        VALUES (${professor.name}, ${professor.subject}, ${professor.image_url})
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );

  return insertedProfessors;
}

export async function GET() {
  try {
    const result = await sql.begin((sql) => [
      seedProfessors(),
    ]);

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
