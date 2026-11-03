import { responderFormulario } from "@/lib/validacao";

export async function POST(req) {
  return responderFormulario(
    req,
    ["assunto", "animal", "email"],
    ["email"],
    (d) =>
      `Obrigado! Recebemos seu interesse em adotar ${d.animal}. Nossa equipe vai entrar em contato pelo email ${d.email}.`,
  );
}
