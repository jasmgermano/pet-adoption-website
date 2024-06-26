import { sql } from "@vercel/postgres";

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
