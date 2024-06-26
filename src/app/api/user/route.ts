import { sql } from "@vercel/postgres";
const bcrypt = require("bcrypt");

export async function POST(request: Request) {
  const { name, email, password } = await request.json();

  await sql`CREATE TABLE IF NOT EXISTS users (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
    created_at timestamp DEFAULT CURRENT_TIMESTAMP
  )`;

  const { rows } = await sql`SELECT * FROM users WHERE email = ${email}`;

  if (rows.length > 0) {
    return Response.json({
      status: 400,
      body: {
        message: "User already exists",
      },
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await sql`INSERT INTO users (name, email, password) VALUES (${name}, ${email}, ${hashedPassword})`;

  return Response.json({
    status: 200,
    body: {
      message: "User created",
    },
  });
}
