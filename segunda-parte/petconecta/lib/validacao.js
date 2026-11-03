// Validação usada pelas rotas POST da API.

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validar(dados, obrigatorios, emails = []) {
  const faltando = obrigatorios.filter((campo) => typeof dados[campo] !== "string" || !dados[campo].trim());
  const emailsInvalidos = emails.filter((campo) => typeof dados[campo] === "string" && !EMAIL.test(dados[campo]));
  return { ok: faltando.length === 0 && emailsInvalidos.length === 0, faltando, emailsInvalidos };
}

/** Lê o corpo JSON, valida e responde 201 ou 400. */
export async function responderFormulario(req, obrigatorios, emails, mensagem) {
  let dados;
  try {
    dados = await req.json();
  } catch {
    return Response.json({ erro: "Corpo da requisição inválido." }, { status: 400 });
  }

  const r = validar(dados, obrigatorios, emails);
  if (!r.ok) {
    const partes = [];
    if (r.faltando.length) partes.push(`Preencha: ${r.faltando.join(", ")}.`);
    if (r.emailsInvalidos.length) partes.push("Informe um email válido.");
    return Response.json({ erro: partes.join(" "), campos: [...r.faltando, ...r.emailsInvalidos] }, { status: 400 });
  }

  // Sem banco de dados: na Vercel o disco é somente leitura, então só confirmamos.
  return Response.json(
    { mensagem: mensagem(dados), protocolo: Date.now().toString(36).toUpperCase() },
    { status: 201 },
  );
}
