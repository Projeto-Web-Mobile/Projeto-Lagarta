import FormCadastro from "@/components/FormCadastro";

export const metadata = { title: "Cadastrar animal" };

export default function CadastroPage() {
  return (
    <>
      <section className="secao-titulo">
        <h1>Cadastrar Animal para Doação</h1>
      </section>
      <FormCadastro />
    </>
  );
}
