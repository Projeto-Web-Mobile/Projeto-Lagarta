import animais from "@/data/animais.json";

// Tira acentos e deixa minúsculo: "Siamês" -> "siames"
const normalizar = (t) => t.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

/** GET /api/animais?especie=cao&sexo=femea&porte=medio&idade=filhote&energia=3&raca=srd&ambiente=apartamento */
export async function GET(req) {
  const p = new URL(req.url).searchParams;
  let lista = animais;

  const especie = p.get("especie");
  const sexo = p.get("sexo");
  const idade = p.get("idade");
  const porte = p.get("porte");
  const energia = p.get("energia");
  const raca = p.get("raca");
  const ambiente = p.get("ambiente");

  if (especie) lista = lista.filter((a) => a.especie === especie);
  if (sexo) lista = lista.filter((a) => a.sexo === sexo);
  if (idade) lista = lista.filter((a) => a.faixaEtaria === idade);
  if (porte) lista = lista.filter((a) => a.porte === porte);
  if (energia) lista = lista.filter((a) => a.energia !== undefined && a.energia <= Number(energia));
  if (raca) lista = lista.filter((a) => normalizar(a.raca) === normalizar(raca));
  if (ambiente) lista = lista.filter((a) => a.ambiente?.includes(ambiente));

  return Response.json(lista);
}
