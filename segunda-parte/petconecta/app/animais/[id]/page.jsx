import Link from "next/link";
import { notFound } from "next/navigation";
import FichaAnimal from "@/components/FichaAnimal";
import { apiGet } from "@/lib/api";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const animal = await apiGet(`/api/animais/${id}`);
  return { title: animal ? `${animal.nome} para adoção` : "Animal não encontrado" };
}

// Página própria de cada animal, ex: /animais/mel (dá para compartilhar o link)
export default async function AnimalPage({ params }) {
  const { id } = await params;
  const animal = await apiGet(`/api/animais/${id}`);
  if (!animal) notFound();

  const voltar = animal.especie === "cao" ? "/caes" : "/gatos";

  return (
    <article className="modal-animal pagina-animal">
      <FichaAnimal animal={animal} titulo="h1">
        <Link href={`/adotar?animal=${encodeURIComponent(animal.nome)}#formulario-adocao`} className="botao">
          Quero Adotar
        </Link>
        <p style={{ textAlign: "center", marginTop: 16 }}>
          <Link href={voltar}>← Voltar para {animal.especie === "cao" ? "Cães" : "Gatos"}</Link>
        </p>
      </FichaAnimal>
    </article>
  );
}
