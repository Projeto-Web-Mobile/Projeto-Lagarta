import ong from "@/data/ong.json";

export async function GET() {
  return Response.json(ong);
}
