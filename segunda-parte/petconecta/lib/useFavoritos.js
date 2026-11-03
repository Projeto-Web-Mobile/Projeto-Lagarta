"use client";

import { useEffect, useState } from "react";

const CHAVE = "petconecta:favoritos";

/** Lista de ids favoritados, salva no localStorage do navegador. */
export function useFavoritos() {
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    try {
      const salvo = localStorage.getItem(CHAVE);
      if (salvo) setFavoritos(JSON.parse(salvo));
    } catch {
      // navegador sem localStorage: segue sem favoritos salvos
    }
  }, []);

  function alternar(id) {
    setFavoritos((atual) => {
      const nova = atual.includes(id) ? atual.filter((f) => f !== id) : [...atual, id];
      try {
        localStorage.setItem(CHAVE, JSON.stringify(nova));
      } catch {}
      return nova;
    });
  }

  return { favoritos, alternar };
}
