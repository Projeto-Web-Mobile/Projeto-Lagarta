"use client";

import { useEffect, useState } from "react";
import { useFavoritos } from "@/lib/useFavoritos";
import AnimalCard from "./AnimalCard";
import AnimalModal from "./AnimalModal";
import FiltroAnimais from "./FiltroAnimais";

/** Catálogo de Cães ou Gatos: filtro + lista + modal, tudo vindo da API. */
export default function CatalogoAnimais({ especie }) {
  const [filtros, setFiltros] = useState({});
  const [animais, setAnimais] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(false);
  const [selecionado, setSelecionado] = useState(null);
  const { favoritos, alternar } = useFavoritos();

  // Toda vez que um filtro muda, busca de novo na API (sem recarregar a página)
  useEffect(() => {
    const params = new URLSearchParams({ especie });
    Object.entries(filtros).forEach(([chave, valor]) => {
      // energia "5" = qualquer nível, então nem manda
      if (valor && !(chave === "energia" && valor === "5")) params.set(chave, valor);
    });

    const controle = new AbortController();
    setCarregando(true);
    fetch(`/api/animais?${params}`, { signal: controle.signal })
      .then((res) => res.json())
      .then((lista) => {
        setAnimais(lista);
        setErro(false);
        setCarregando(false);
      })
      .catch((e) => {
        if (e.name !== "AbortError") {
          setErro(true);
          setCarregando(false);
        }
      });
    return () => controle.abort();
  }, [especie, filtros]);

  const classeLista = especie === "cao" ? "lista-caes" : "lista-gatos";

  return (
    <>
      <section className="secao-catalogo">
        <FiltroAnimais especie={especie} filtros={filtros} onChange={setFiltros} />

        <section className={classeLista} aria-live="polite" aria-busy={carregando}>
          {erro && <p className="lista-vazia">Não foi possível carregar os animais.</p>}
          {!erro && carregando && animais.length === 0 && <p className="carregando">Carregando...</p>}
          {!erro && !carregando && animais.length === 0 && (
            <p className="lista-vazia">Nenhum animal com esses filtros. Tente mudar a busca.</p>
          )}
          {animais.map((animal) => (
            <AnimalCard
              key={animal.id}
              animal={animal}
              favorito={favoritos.includes(animal.id)}
              onFavoritar={() => alternar(animal.id)}
              onDetalhes={() => setSelecionado(animal)}
            />
          ))}
        </section>
      </section>

      <AnimalModal animal={selecionado} onFechar={() => setSelecionado(null)} />
    </>
  );
}
