import { sql } from "@vercel/postgres";

export async function GET(
  request: Request,
  { params }: { params: { email: string } }
) {
  await sql`CREATE TABLE IF NOT EXISTS users (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    email varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
    created_at timestamp DEFAULT CURRENT_TIMESTAMP
  )`;

  const email = params.email.trim();

  // Verificando se o email está sendo passado corretamente
  console.log("Email parameter:", email);

  // Usando o método .raw para passar o parâmetro diretamente na consulta
  const { rows } = await sql.raw(`SELECT * FROM users WHERE email = $1`, [
    email,
  ]);

  console.log("rows", rows);

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
