import postgres from "postgres";

let sqlClient: postgres.Sql | null = null;

function getSqlClient() {
  if (!sqlClient) {
    const databaseUrl = process.env.DATABASE_URL;
    if (!databaseUrl) {
      throw new Error("DATABASE_URL must be set for PostgreSQL connectivity.");
    }

    sqlClient = postgres(databaseUrl, {
      ssl: {
        rejectUnauthorized: false,
      },
    });
  }

  return sqlClient;
}

export async function getDb() {
  const db = getSqlClient();

  await db`
    CREATE TABLE IF NOT EXISTS contact_messages (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      subject TEXT NOT NULL,
      message TEXT NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `;

  return db;
}
