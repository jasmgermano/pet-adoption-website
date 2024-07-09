import { sql } from "@vercel/postgres";
const bcrypt = require("bcrypt");

export async function POST(request: Request) {
  const { email, password } = await request.json();

  await sql`CREATE TABLE IF NOT EXISTS users (
        id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        name varchar(255) NOT NULL,
        email varchar(255) NOT NULL,
        password varchar(255) NOT NULL,
        created_at timestamp DEFAULT CURRENT_TIMESTAMP
    )`;

  const { rows } = await sql`SELECT * FROM users WHERE email = ${email}`;

  if (rows.length === 0) {
    throw new Error("User not found");
  }

  const user = rows[0];

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw new Error("Invalid password or email");
  }

  return Response.json({
    status: 200,
    body: {
      id: user.id,
      email: user.email,
      name: user.name,
    },
  });
}
