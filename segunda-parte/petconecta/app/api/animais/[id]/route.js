import animais from "@/data/animais.json";

/** GET /api/animais/mel -> um animal, ou 404 */
export async function GET(_req, { params }) {
  const { id } = await params;
  const animal = animais.find((a) => a.id === id);
  if (!animal) return Response.json({ erro: "Animal não encontrado." }, { status: 404 });
  return Response.json(animal);
}
