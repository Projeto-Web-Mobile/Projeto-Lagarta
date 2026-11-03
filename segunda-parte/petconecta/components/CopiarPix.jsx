"use client";

import { useState } from "react";

/** Botão que copia a chave Pix e mostra "Copiado!" por alguns segundos. */
export default function CopiarPix({ chave }) {
  const [copiado, setCopiado] = useState(false);

  async function copiar() {
    try {
      await navigator.clipboard.writeText(chave);
    } catch {
      // navegadores antigos ou página sem HTTPS: plano B
      const campo = document.createElement("textarea");
      campo.value = chave;
      document.body.appendChild(campo);
      campo.select();
      document.execCommand("copy");
      campo.remove();
    }
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  }

  return (
    <button type="button" onClick={copiar} className={copiado ? "copiado" : undefined} aria-live="polite">
      {copiado ? "Copiado!" : "Copie a chave pix!"}
    </button>
  );
}
