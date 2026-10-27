import Image from "next/image";
import { Fragment } from "react";

const SEXO = { macho: "Macho", femea: "Fêmea" };
const PORTE = { pequeno: "Pequeno", medio: "Médio", grande: "Grande" };

/**
 * Conteúdo da ficha de um animal, igual para cães e gatos.
 * Usado dentro do AnimalModal e na página /animais/[id].
 */
export default function FichaAnimal({ animal, titulo = "h2", children }) {
  const Titulo = titulo;
  const artigo = animal.sexo === "femea" ? "da" : "do";
  const tipo =
    animal.especie === "cao" ? (animal.sexo === "femea" ? "cadela" : "cão") : animal.sexo === "femea" ? "gata" : "gato";

  const linhas = [
    ["Nome", animal.nome],
    ["Sexo", SEXO[animal.sexo]],
    ["Idade", animal.idade],
    ["Raça", animal.raca],
    ["Porte", animal.porte && PORTE[animal.porte]],
    ["Nível de energia", animal.energia ? `${animal.energia} de 5` : undefined],
    ["Temperamento", animal.temperamentoCompleto],
    ["Resgate", animal.resgate],
    ["Histórico", animal.historico],
    ["Estado", animal.estado],
    ["Registro médico", animal.saude],
  ];

  return (
    <>
      <figure>
        <Image src={animal.fotoGrande} alt={`Foto ${artigo} ${tipo} ${animal.nome}`} width={600} height={375} />
      </figure>
      <Titulo>{animal.nome}</Titulo>
      <dl>
        {linhas
          .filter(([, valor]) => valor)
          .map(([rotulo, valor]) => (
            <Fragment key={rotulo}>
              <dt>{rotulo}</dt>
              <dd>{valor}</dd>
            </Fragment>
          ))}
      </dl>
      {animal.aviso && (
        <p className="aviso-ambiente">
          <span className="material-symbols-outlined">shield</span>
          {animal.aviso}
        </p>
      )}
      {children}
    </>
  );
}
