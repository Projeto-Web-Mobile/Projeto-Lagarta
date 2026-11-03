import Image from "next/image";
import { apiGet } from "@/lib/api";

export const metadata = { title: "Sobre a ONG" };

const CUIDADOS = [
  {
    titulo: "Triagem Clínica e Quarentena",
    texto:
      "Assim que resgatado, o animal passa por uma avaliação veterinária completa. Realizamos exames laboratoriais detalhados (incluindo testes de FIV/FeLV para gatos e hemograma para cães) e o mantemos em um período de observação para tratar eventuais desnutrições, infecções ou doenças preexistentes.",
  },
  {
    titulo: "Controle de Parasitas",
    texto:
      "Antes do convívio com outros animais do abrigo, aplicamos medicações de alta eficácia contra pulgas, carrapatos e sarnas. Além disso, o pet inicia um cronograma de vermifugação de amplo espectro para a eliminação de parasitas internos.",
  },
  {
    titulo: "Vacinação Completa",
    texto:
      "A imunização é o pilar da prevenção. Nossos cães recebem as vacinas polivalentes (V8 ou V10) e a vacina Antirrábica. Já os felinos são imunizados com a vacina polivalente (V4 ou V5) e Antirrábica.",
  },
  {
    titulo: "Castração Obrigatória",
    texto:
      "A castração é uma regra inegociável na Petconecta. Além de prevenir doenças graves (como câncer de mama, útero e próstata) e prolongar a expectativa de vida do animal, é a única forma ética de combater a superpopulação. Nota: Filhotes adotados antes dos 6 meses saem com um Termo de Compromisso de Castração, já com o procedimento garantido e agendado em nossas clínicas parceiras.",
  },
  {
    titulo: "Microchipagem de Identificação",
    texto:
      "Todos os nossos animais recebem um microchip subcutâneo indolor. Esse dispositivo contém um código único que será vinculado aos dados do adotante, garantindo que o pet possa ser rapidamente identificado caso se perca no futuro.",
  },
];

// Sobre: renderizada no servidor; o FAQ vem de /api/ong
export default async function SobrePage() {
  const ong = await apiGet("/api/ong");

  return (
    <>
      <section className="secao-sobre">
        <article className="conteudo-sobre">
          <h1>
            Muito mais que um abrigo. <br />
            Uma ponte para o recomeço.
          </h1>
          <p>
            A Petconecta nasceu do sonho de erradicar o abandono. Trabalhamos todos os dias para resgatar, reabilitar e
            reconectar animais em situação de risco com famílias responsáveis.
          </p>
          <figure className="imagem-sobre">
            <Image src="/ong.jpeg" alt="Foto da ONG" className="foto-ong" width={800} height={600} />
          </figure>
        </article>
      </section>

      <section className="secao-historia">
        <article className="historia">
          <h2>Nossa História</h2>
          <p>
            A Petconecta foi fundada em 2015 por um grupo de protetores independentes com o objetivo de criar uma ponte
            segura e responsável entre animais abandonados e novas famílias. O que começou como uma pequena rede de lares
            temporários rapidamente se profissionalizou, exigindo a formalização da ONG para dar conta da demanda
            crescente. Desde o primeiro dia, nossa missão é estruturar o resgate e a reabilitação de cães e gatos,
            garantindo que eles saiam das ruas e encontrem lares definitivos de forma segura.
          </p>
          <p>
            Atualmente, operamos com um espaço físico de transição e contamos com o apoio de uma rede sólida de
            voluntários e clínicas veterinárias parceiras. Nosso trabalho é fundamentado em processos rigorosos de saúde
            animal: todos os pets resgatados passam obrigatoriamente por triagem clínica, vermifugação, vacinação completa
            e castração antes de serem disponibilizados no site. Esse protocolo técnico garante o bem-estar do animal e
            oferece total segurança para a família adotante.
          </p>
          <p>
            Com mais de 1.200 adoções bem-sucedidas, nosso compromisso diário une a gestão transparente de doações à
            educação da sociedade. Além de atuar no resgate imediato, a Petconecta investe na conscientização sobre posse
            responsável e apoia a castração em massa como solução definitiva para o abandono. Nosso objetivo a longo prazo
            é atuar na causa raiz do problema para que, um dia, a existência de abrigos não seja mais necessária.
          </p>
        </article>
      </section>

      <section className="secao-duvidas">
        <h2>Dúvidas Frequentes</h2>
        {ong?.faq.map((d) => (
          <article className="duvida" key={d.pergunta}>
            <h3>{d.pergunta}</h3>
            <p>{d.resposta}</p>
          </article>
        ))}
      </section>

      <section className="secao-cuidados">
        <h2>Cuidados veterinários</h2>
        <p>
          A saúde e o bem-estar dos animais são a prioridade absoluta da Petconecta. Nenhum cão ou gato é disponibilizado
          para adoção sem antes concluir nosso rigoroso protocolo veterinário. Esse cuidado garante que o animal chegue à
          sua nova família protegido, saudável e pronto para um recomeço seguro.
        </p>
        <p>Etapas obrigatórias:</p>
        {CUIDADOS.map((c) => (
          <article className="cuidados" key={c.titulo}>
            <h3>{c.titulo}</h3>
            <p>{c.texto}</p>
          </article>
        ))}
        <p>
          Todo esse processo exige recursos financeiros significativos, viabilizados pelas doações que recebemos. É esse
          nível de cuidado que garante uma adoção responsável e transparente.
        </p>
      </section>
    </>
  );
}
