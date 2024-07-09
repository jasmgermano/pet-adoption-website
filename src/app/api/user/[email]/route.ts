import { sql } from "@vercel/postgres";

export async function GET(
  request: Request,
  { params }: { params: { email: string } }
) {
  await sql`CREATE TABLE IF NOT EXISTS users (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
    created_at timestamp DEFAULT CURRENT_TIMESTAMP
  )`;

  const email = params.email.trim();

  const { rows } = await sql`
    SELECT id, email FROM users WHERE email = ${email}
  `;

  if (rows.length === 0) {
    return new Response(
      JSON.stringify({
        status: 404,
        body: {
          message: "User not found",
        },
      }),
      { status: 404 }
    );
  }

  return new Response(
    JSON.stringify({
      status: 200,
      body: rows[0],
    }),
    { status: 200 }
  );
}
