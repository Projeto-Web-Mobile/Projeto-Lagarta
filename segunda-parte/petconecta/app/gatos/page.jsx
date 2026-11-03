import CatalogoAnimais from "@/components/CatalogoAnimais";

export const metadata = { title: "Gatos para adoção" };

export default function GatosPage() {
  return (
    <>
      <section className="secao-titulo">
        <h1>Gatos para Adoção</h1>
      </section>
      <CatalogoAnimais especie="gato" />
    </>
  );
}
