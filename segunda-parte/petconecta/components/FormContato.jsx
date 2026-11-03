"use client";

import { useEnvioForm } from "@/lib/useEnvioForm";
import MensagemForm from "./MensagemForm";

export default function FormContato() {
  const { status, mensagem, enviar } = useEnvioForm("/api/contato");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        enviar(e.currentTarget);
      }}
    >
      <label htmlFor="assunto-contato">Assunto *</label>
      <input type="text" id="assunto-contato" name="assunto" placeholder="Assunto" required />

      <label htmlFor="telefone-contato">Telefone *</label>
      <input type="tel" id="telefone-contato" name="telefone" placeholder="Como podemos ligar de volta?" required />

      <label htmlFor="mensagem-contato">Mensagem</label>
      <textarea id="mensagem-contato" name="mensagem" placeholder="Mensagem" required></textarea>

      <button type="submit" className="botao" disabled={status === "enviando"}>
        {status === "enviando" ? "Enviando..." : "Submeter"}
      </button>
      <MensagemForm status={status} mensagem={mensagem} />
    </form>
  );
}
