import { responderFormulario } from "@/lib/validacao";

export async function POST(req) {
  return responderFormulario(
    req,
    ["assunto", "telefone", "mensagem"],
    [],
    (d) => `Mensagem recebida! Vamos ligar para ${d.telefone} assim que possível.`,
  );
}
