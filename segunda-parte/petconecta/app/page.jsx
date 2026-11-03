import Image from "next/image";
import Link from "next/link";
import CalculadoraDoacao from "@/components/CalculadoraDoacao";
import CarrosselDepoimentos from "@/components/CarrosselDepoimentos";
import CopiarPix from "@/components/CopiarPix";
import { apiGet } from "@/lib/api";

// Home: renderizada no servidor, com dados de /api/ong e /api/depoimentos
export default async function Home() {
  const [ong, depoimentos] = await Promise.all([apiGet("/api/ong"), apiGet("/api/depoimentos")]);

  return (
    <>
      <section className="secao-inicio">
        <article className="conteudo-inicio">
          <h1>
            Adote um amigo,
            <br /> mude uma vida
          </h1>
          <p>Não compre um amigo, encontre o seu. A Petconecta une animais resgatados a famílias cheias de amor.</p>
          <Link className="botao" href="/sobre">
            Conheça nossa ONG
          </Link>
        </article>

        <figure className="imagem-inicio">
          <Image
            src="https://placecats.com/300/400"
            alt="Gata da ONG"
            className="foto-gato"
            width={300}
            height={400}
            priority
          />
          <Image
            src="https://placedog.net/400/300?id=68"
            alt="Cão da ONG"
            className="foto-cao"
            width={400}
            height={300}
            priority
          />
        </figure>
      </section>

      <section className="secao-impacto">
        {ong?.impacto.map((item) => (
          <article className="impacto" key={item.rotulo}>
            <strong className="impacto-valor">{item.valor}</strong>
            <p>{item.rotulo}</p>
          </article>
        ))}
      </section>

      <CarrosselDepoimentos depoimentos={depoimentos ?? []} />

      {ong && (
        <section className="contribuicao">
          <article className="pix">
            <h2 className="pix-titulo">Transforme uma vida hoje.</h2>
            <p>Sua doação paga ração, remédios e cirurgias. Contribua com qualquer valor!</p>
            <CalculadoraDoacao racaoPorDia={ong.doacao.racaoPorDia} vacina={ong.doacao.vacina} />
            <strong className="pix-chave">
              Pix: {ong.pix.tipo}: {ong.pix.chave}
            </strong>
            <CopiarPix chave={ong.pix.chave} />
          </article>
        </section>
      )}
    </>
  );
}
