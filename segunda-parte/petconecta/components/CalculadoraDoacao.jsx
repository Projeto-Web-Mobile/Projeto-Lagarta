"use client";

import { useState } from "react";

/** Enquanto a pessoa digita um valor, mostra o que ele paga em ração e vacinas. */
export default function CalculadoraDoacao({ racaoPorDia, vacina }) {
  const [valor, setValor] = useState("");
  const numero = Number(valor.replace(",", "."));

  let resultado = "Digite um valor para ver o impacto da sua doação.";
  if (numero > 0) {
    const dias = Math.floor(numero / racaoPorDia);
    const vacinas = Math.floor(numero / vacina);
    resultado = `R$ ${numero.toFixed(2).replace(".", ",")} garante ${dias} ${dias === 1 ? "dia" : "dias"} de ração`;
    resultado +=
      vacinas > 0
        ? ` ou ${vacinas} ${vacinas === 1 ? "vacina" : "vacinas"}.`
        : ` (a partir de R$ ${vacina} paga uma vacina).`;
  }

  return (
    <div className="calculadora-doacao">
      <label htmlFor="valor-doacao">Quanto você quer doar? (R$)</label>
      <input
        id="valor-doacao"
        type="number"
        min="0"
        step="1"
        inputMode="decimal"
        placeholder="Ex: 50"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />
      <p className="resultado-doacao" aria-live="polite">
        {resultado}
      </p>
    </div>
  );
}
