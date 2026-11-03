"use client";

import { useState } from "react";

/** Envia um formulário em JSON para a API e guarda a resposta para mostrar na tela. */
export function useEnvioForm(url) {
  const [status, setStatus] = useState("parado");
  const [mensagem, setMensagem] = useState("");

  async function enviar(form) {
    const dados = {};
    new FormData(form).forEach((valor, chave) => {
      if (typeof valor === "string") dados[chave] = valor;
    });

    setStatus("enviando");
    setMensagem("");
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados),
      });
      const corpo = await res.json();
      if (res.ok) {
        setStatus("sucesso");
        setMensagem(`${corpo.mensagem} Protocolo: ${corpo.protocolo}.`);
        form.reset();
        return true;
      }
      setStatus("erro");
      setMensagem(corpo.erro ?? "Não foi possível enviar.");
    } catch {
      setStatus("erro");
      setMensagem("Sem conexão com o servidor. Tente de novo.");
    }
    return false;
  }

  return { status, mensagem, enviar };
}
