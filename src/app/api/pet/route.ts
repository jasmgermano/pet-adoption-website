import { sql } from "@vercel/postgres";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const type = req.nextUrl.searchParams.get("type");
  const age = req.nextUrl.searchParams.get("age");
  const weight = req.nextUrl.searchParams.get("weight");

  await sql`CREATE TABLE IF NOT EXISTS pets (
        id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        name varchar(255) NOT NULL,
        age integer NOT NULL,
        description varchar(255) NOT NULL,
        breed varchar(255) NOT NULL,
        type varchar(255) NOT NULL,
        weight varchar(255) NOT NULL,
        image varchar(255) NOT NULL,
        created_at timestamp DEFAULT CURRENT_TIMESTAMP
        )`;

  let query = sql`SELECT * FROM pets WHERE 1=1`; // Base query

  if (type) {
    query = sql`${String(query)} AND type = ${type}`;
  }
  if (age) {
    query = sql`${String(query)} AND age = ${age}`;
  }
  if (weight) {
    query = sql`${String(query)} AND weight = ${weight}`;
  }

  const { rows } = await query;

  return new Response(
    JSON.stringify({
      status: 200,
      body: rows,
    }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const body = Object.fromEntries(formData);

  const { name, age, description, breed, type, weight } = body;

  const image = body.image as File;

  const formDataUploadImage = new FormData();

  formDataUploadImage.append("source", image);

  const response = await fetch(
    "https://freeimage.host/api/1/upload?key=6d207e02198a847aa98d0a2a901485a5",
    {
      method: "POST",
      body: formDataUploadImage,
    }
  );

  const data = await response.json();

  const imageUrl = data.image.url;

  await sql`CREATE TABLE IF NOT EXISTS pets (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name varchar(255) NOT NULL,
    age integer NOT NULL,
    description varchar(255) NOT NULL,
    breed varchar(255) NOT NULL,
    type varchar(255) NOT NULL,
    weight varchar(255) NOT NULL,
    image varchar(255) NOT NULL,
    created_at timestamp DEFAULT CURRENT_TIMESTAMP
    )`;

  await sql`INSERT INTO pets (name, age, description, breed, type, weight, image) VALUES (${String(
    name
  )}, ${Number(age)}, ${String(description)}, ${String(breed)}, ${String(
    type
  )}, ${String(weight)}, ${String(imageUrl)})`;

  return new Response(
    JSON.stringify({
      status: 200,
      body: {
        message: "Pet created",
      },
    }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
