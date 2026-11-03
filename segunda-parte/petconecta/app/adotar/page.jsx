import FormAdocao from "@/components/FormAdocao";

export const metadata = { title: "Como adotar" };

// /adotar?animal=Mel chega com o formulário já preenchido
export default async function AdotarPage({ searchParams }) {
  const { animal } = await searchParams;

  return (
    <>
      <section className="secao-titulo">
        <h1>Guia de Adoção Responsável</h1>
        <p>Entenda cada etapa do nosso Guia de Adoção Responsável.</p>
      </section>

      <nav className="etapas-guia" aria-label="Etapas do guia">
        <a href="#pre-requisitos" className="etapa ativo">
          Pré-requisitos
        </a>
        <a href="#regras" className="etapa">
          Regras
        </a>
        <a href="#passo-a-passo" className="etapa">
          Passo a Passo
        </a>
      </nav>

      <section id="pre-requisitos" className="secao-checklist">
        <h2>Checklist de Requisitos</h2>
        <ul className="checklist">
          <li>
            <input type="checkbox" id="req1" defaultChecked disabled />
            <label htmlFor="req1">Telas de proteção obrigatórias — instalação de telas em janelas e sacadas</label>
          </li>
          <li>
            <input type="checkbox" id="req2" defaultChecked disabled />
            <label htmlFor="req2">Acordo familiar — consentimento de todos os moradores da casa</label>
          </li>
          <li>
            <input type="checkbox" id="req3" defaultChecked disabled />
            <label htmlFor="req3">Recursos — condições financeiras para os cuidados do animal</label>
          </li>
        </ul>
        <a className="botao" href="#formulario-adocao">
          Preencher Formulário de Adoção
        </a>
      </section>

      <section id="regras" className="secao-regras">
        <h2>Regras</h2>
        <ul>
          <li>Não é permitida a revenda ou doação do animal a terceiros sem autorização da ONG.</li>
          <li>É obrigatório manter as vacinas e a vermifugação em dia.</li>
          <li>A PetConecta poderá realizar visitas de acompanhamento após a adoção.</li>
          <li>Filhotes adotados antes dos 6 meses devem cumprir o Termo de Compromisso de Castração.</li>
        </ul>
      </section>

      <section id="passo-a-passo" className="secao-passos">
        <h2>Passo a Passo</h2>
        <ol>
          <li>Escolha o animal no catálogo de Cães ou Gatos.</li>
          <li>Preencha o formulário de adoção abaixo.</li>
          <li>Aguarde o contato da nossa equipe para uma entrevista.</li>
          <li>Assine o Termo de Adoção Responsável e leve seu novo amigo para casa.</li>
        </ol>
      </section>

      <section id="formulario-adocao" className="secao-formulario">
        <h2>Preencher Formulário de Adoção</h2>
        <FormAdocao key={animal ?? ""} animalInicial={animal ?? ""} />
      </section>
    </>
  );
}
