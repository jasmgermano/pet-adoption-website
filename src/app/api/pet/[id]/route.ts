import { sql } from "@vercel/postgres";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  const { rows } = await sql`SELECT * FROM pets WHERE id = ${id}`;

  if (rows.length === 0) {
    return Response.json({
      status: 404,
      body: {
        message: "Pet not found",
      },
    });
  }

  return Response.json({
    status: 200,
    body: rows[0],
  });
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  const formData = await request.formData();
  const body = Object.fromEntries(formData);

  const { name, age, description, breed, type, weight } = body;

  let image;

  if (typeof body.image === "string") {
    image = body.image;
  } else {
    image = body.image;

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

    image = data.image.url;
  }

  await sql`UPDATE
     pets
   SET
     name = ${String(name)},
     age = ${Number(age)},
     description = ${String(description)},
     breed = ${String(breed)},
     type = ${String(type)},
     weight = ${String(weight)},
     image = ${String(image)}
   WHERE
     id = ${id}`;

  return Response.json({
    status: 200,
    body: {
      message: "Pet updated",
    },
  });
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  await sql`DELETE FROM pets WHERE id = ${id}`;

  return Response.json({
    status: 200,
    body: {
      message: "Pet deleted",
    },
  });
}
