import CatalogoAnimais from "@/components/CatalogoAnimais";

export const metadata = { title: "Cães para adoção" };

export default function CaesPage() {
  return (
    <>
      <section className="secao-titulo">
        <h1>Cães para Adoção</h1>
      </section>
      <CatalogoAnimais especie="cao" />
    </>
  );
}
