"use client";

import { useEnvioForm } from "@/lib/useEnvioForm";
import MensagemForm from "./MensagemForm";

/** Formulário de adoção. Chega já preenchido com o animal quando vem do modal. */
export default function FormAdocao({ animalInicial = "" }) {
  const { status, mensagem, enviar } = useEnvioForm("/api/adocao");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        enviar(e.currentTarget);
      }}
    >
      <label htmlFor="assunto-adocao">Assunto *</label>
      <input
        type="text"
        id="assunto-adocao"
        name="assunto"
        placeholder="Assunto"
        defaultValue={animalInicial ? `Quero adotar ${animalInicial}` : ""}
        required
      />

      <label htmlFor="animal-desejado">Animal desejado *</label>
      <input
        type="text"
        id="animal-desejado"
        name="animal"
        placeholder="Nome do animal"
        defaultValue={animalInicial}
        required
      />

      <label htmlFor="email-adocao">Seu email *</label>
      <input type="email" id="email-adocao" name="email" placeholder="Endereço de email válido" required />

      <label htmlFor="ambiente-adocao">Exigência de Ambiente</label>
      <input type="text" id="ambiente-adocao" name="ambiente" placeholder="Ex: apartamento com telas" />

      <label htmlFor="mensagem-adocao">Mensagem</label>
      <textarea id="mensagem-adocao" name="mensagem" placeholder="Mensagem"></textarea>

      <button type="submit" className="botao" disabled={status === "enviando"}>
        {status === "enviando" ? "Enviando..." : "Enviar formulário"}
      </button>
      <MensagemForm status={status} mensagem={mensagem} />
    </form>
  );
}
