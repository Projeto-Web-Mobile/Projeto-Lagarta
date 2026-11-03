import depoimentos from "@/data/depoimentos.json";

export async function GET() {
  return Response.json(depoimentos);
}
