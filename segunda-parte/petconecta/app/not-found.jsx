import Link from "next/link";

export default function NaoEncontrado() {
  return (
    <section className="secao-titulo">
      <h1>Página não encontrada</h1>
      <p>Esse endereço não existe ou o animal já foi adotado.</p>
      <Link href="/" className="botao">
        Voltar para a Home
      </Link>
    </section>
  );
}
