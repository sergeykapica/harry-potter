import postgres from 'postgres';
import { professors } from '../lib/placeholder-data';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function seedProfessors() {
  await sql`
    CREATE TABLE IF NOT EXISTS professors (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      subject VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      image_url TEXT NOT NULL
    );
  `;

  for (const professor of professors) {
    await sql`
      INSERT INTO professors (name, subject, description, image_url)
      VALUES (${professor.name}, ${professor.subject}, ${professor.description}, ${professor.image_url})
      ON CONFLICT (id) DO NOTHING
    `;
  }
}

async function deleteProfessors() {
  await sql`
    DROP TABLE professors;
  `;
}

async function seedRequests() {
  await sql`
    CREATE TABLE IF NOT EXISTS requests (
      id SERIAL PRIMARY KEY,
      first_name VARCHAR(255) NOT NULL,
      last_name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      message TEXT NOT NULL,
      date TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT NOW()
    );
  `;
}

async function deleteRequests() {
  await sql`
    DROP TABLE requests;
  `;
}

export async function GET() {
  try {
    await sql.begin(async (sqlTx) => {
      await seedProfessors();
      await seedRequests();
    });

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
