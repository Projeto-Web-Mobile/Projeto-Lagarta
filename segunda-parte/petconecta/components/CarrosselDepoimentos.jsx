"use client";

import { useState } from "react";

/** Mostra um depoimento por vez, com setas de anterior e próximo. */
export default function CarrosselDepoimentos({ depoimentos }) {
  const [atual, setAtual] = useState(0);
  if (depoimentos.length === 0) return null;

  const total = depoimentos.length;
  const anterior = () => setAtual((i) => (i - 1 + total) % total);
  const proximo = () => setAtual((i) => (i + 1) % total);
  const d = depoimentos[atual];

  return (
    <section className="secao-depoimentos" aria-roledescription="carrossel" aria-label="Depoimentos">
      <h2>Depoimentos</h2>

      <article className="depoimento" key={d.id} aria-live="polite">
        <h3>&ldquo;{d.texto}&rdquo;</h3>
        <p>– {d.autor}</p>
      </article>

      <div className="carrossel-controles">
        <button type="button" onClick={anterior} aria-label="Depoimento anterior">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <span>
          {atual + 1} / {total}
        </span>
        <button type="button" onClick={proximo} aria-label="Próximo depoimento">
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
    </section>
  );
}
