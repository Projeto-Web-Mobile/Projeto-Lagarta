import { responderFormulario } from "@/lib/validacao";

export async function POST(req) {
  return responderFormulario(
    req,
    [
      "nome-tutor",
      "email-tutor",
      "cpf-tutor",
      "nascimento-tutor",
      "nome-animal",
      "especie-animal",
      "endereco-tutor",
      "telefone-tutor",
    ],
    ["email-tutor"],
    (d) => `Cadastro de ${d["nome-animal"]} recebido! Vamos analisar e falar com você em breve.`,
  );
}
