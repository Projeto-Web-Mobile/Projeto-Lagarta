"use client";

import Image from "next/image";

/** Um card do catálogo. Substitui os 20 cards escritos à mão. */
export default function AnimalCard({ animal, favorito, onFavoritar, onDetalhes }) {
  const sexo = animal.sexo === "femea" ? "Fêmea" : "Macho";
  const artigo = animal.sexo === "femea" ? "da" : "do";
  const tipo =
    animal.especie === "cao" ? (animal.sexo === "femea" ? "cadela" : "cão") : animal.sexo === "femea" ? "gata" : "gato";

  return (
    <article className="card-animal">
      <figure>
        <Image src={animal.foto} alt={`Foto ${artigo} ${tipo} ${animal.nome}`} width={400} height={300} />
        <button
          type="button"
          className={`botao-favorito${favorito ? " ativo" : ""}`}
          aria-label={favorito ? `Remover ${animal.nome} dos favoritos` : `Favoritar ${animal.nome}`}
          aria-pressed={favorito}
          onClick={onFavoritar}
        >
          <span className="material-symbols-outlined">favorite</span>
        </button>
      </figure>
      <h3>{animal.nome}</h3>
      <p>
        {sexo} &middot; {animal.idade}
      </p>
      <p>{animal.especie === "cao" ? `Temperamento: ${animal.temperamento}` : `Raça: ${animal.raca}`}</p>
      <button type="button" className="botao-detalhes" onClick={onDetalhes}>
        Ver detalhes
      </button>
    </article>
  );
}
