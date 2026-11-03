"use client";

import { useRef, useState } from "react";
import { useEnvioForm } from "@/lib/useEnvioForm";
import MensagemForm from "./MensagemForm";

const ETAPAS = [
  { id: "dados-tutor", rotulo: "1. Dados do Tutor" },
  { id: "dados-animal", rotulo: "2. Dados do Animal" },
  { id: "dados-adocao", rotulo: "3. Dados da Adoção" },
];

/** Escolha de fotos com prévia (as fotos ficam só no navegador). */
function Fotos({ nome }) {
  const input = useRef(null);
  const [previas, setPrevias] = useState([]);

  return (
    <>
      <h2>Fotos</h2>
      <ul className="previa-fotos">
        {previas.map((url) => (
          <li key={url}>
            {/* prévia local (blob:), por isso <img> comum e não next/image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={url} alt="Prévia da foto escolhida" />
          </li>
        ))}
        <li>
          <button type="button" aria-label="Adicionar foto" onClick={() => input.current?.click()}>
            +
          </button>
        </li>
      </ul>
      <input
        ref={input}
        type="file"
        name={nome}
        accept="image/*"
        multiple
        hidden
        onChange={(e) => {
          const arquivos = Array.from(e.target.files ?? []);
          setPrevias((atual) => [...atual, ...arquivos.map((f) => URL.createObjectURL(f))]);
        }}
      />
      <a
        href="#"
        className="botao-remover"
        onClick={(e) => {
          e.preventDefault();
          previas.forEach((url) => URL.revokeObjectURL(url));
          setPrevias([]);
          if (input.current) input.current.value = "";
        }}
      >
        Remover fotos
      </a>
      <br />
    </>
  );
}

/** Cadastro em 3 etapas: uma aparece por vez, com Avançar e Voltar. */
export default function FormCadastro() {
  const [etapa, setEtapa] = useState(0);
  const form = useRef(null);
  const { status, mensagem, enviar } = useEnvioForm("/api/cadastro");

  /** Confere os campos obrigatórios da etapa atual antes de deixar avançar. */
  function etapaValida(indice) {
    const fieldset = form.current?.querySelector(`#${ETAPAS[indice].id}`);
    const campos = Array.from(fieldset?.querySelectorAll("input, select, textarea") ?? []);
    return campos.every((campo) => campo.reportValidity());
  }

  function irPara(destino) {
    // pode voltar livremente, mas só avança se as etapas anteriores estiverem ok
    for (let i = etapa; i < destino; i++) {
      if (!etapaValida(i)) {
        setEtapa(i);
        return;
      }
    }
    setEtapa(destino);
  }

  return (
    <>
      <nav className="etapas-cadastro" aria-label="Etapas do cadastro">
        {ETAPAS.map((e, i) => (
          <button
            key={e.id}
            type="button"
            className={`etapa${i === etapa ? " ativo" : ""}`}
            aria-current={i === etapa ? "step" : undefined}
            onClick={() => irPara(i)}
          >
            {e.rotulo}
          </button>
        ))}
      </nav>

      <form
        ref={form}
        className="formulario-cadastro"
        onSubmit={async (e) => {
          e.preventDefault();
          if (!etapaValida(etapa)) return;
          if (await enviar(e.currentTarget)) setEtapa(0);
        }}
      >
        {/* As 3 etapas ficam no formulário (para enviar tudo junto), mas só uma aparece */}
        <fieldset id="dados-tutor" hidden={etapa !== 0}>
          <legend>Dados do Tutor</legend>
          <Fotos nome="fotos-tutor" />
          <label htmlFor="nome-tutor">Nome completo *</label>
          <input type="text" id="nome-tutor" name="nome-tutor" placeholder="Nome" required />
          <label htmlFor="email-tutor">Email *</label>
          <input type="email" id="email-tutor" name="email-tutor" placeholder="Endereço de email válido" required />
          <label htmlFor="cpf-tutor">CPF *</label>
          <input
            type="text"
            id="cpf-tutor"
            name="cpf-tutor"
            placeholder="000.000.000-00"
            pattern="\d{3}\.?\d{3}\.?\d{3}-?\d{2}"
            title="Formato: 000.000.000-00"
            required
          />
          <label htmlFor="nascimento-tutor">Data de nascimento *</label>
          <input type="date" id="nascimento-tutor" name="nascimento-tutor" required />
        </fieldset>

        <fieldset id="dados-animal" hidden={etapa !== 1}>
          <legend>Dados do Animal</legend>
          <Fotos nome="fotos-animal" />
          <label htmlFor="nome-animal">Nome do animal *</label>
          <input type="text" id="nome-animal" name="nome-animal" required />
          <label htmlFor="especie-animal">Espécie *</label>
          <select id="especie-animal" name="especie-animal" required>
            <option value="cao">Cão</option>
            <option value="gato">Gato</option>
          </select>
          <label htmlFor="idade-animal">Idade aproximada</label>
          <input type="text" id="idade-animal" name="idade-animal" placeholder="Ex: 2 anos" />
          <label htmlFor="temperamento-animal">Temperamento</label>
          <input type="text" id="temperamento-animal" name="temperamento-animal" placeholder="Ex: dócil, brincalhão" />
          <label htmlFor="historico-animal">Histórico do resgate</label>
          <textarea
            id="historico-animal"
            name="historico-animal"
            placeholder="Conte como o animal foi encontrado"
          ></textarea>
        </fieldset>

        <fieldset id="dados-adocao" hidden={etapa !== 2}>
          <legend>Dados da Adoção</legend>
          <label htmlFor="endereco-tutor">Endereço do tutor *</label>
          <input type="text" id="endereco-tutor" name="endereco-tutor" required />
          <label htmlFor="telefone-tutor">Telefone *</label>
          <input type="tel" id="telefone-tutor" name="telefone-tutor" required />
          <label htmlFor="observacoes">Observações</label>
          <textarea id="observacoes" name="observacoes" placeholder="Alguma informação adicional?"></textarea>
        </fieldset>

        <div className="navegacao-etapas">
          {etapa > 0 ? (
            <button type="button" className="botao-secundario" onClick={() => setEtapa(etapa - 1)}>
              Voltar
            </button>
          ) : (
            <span />
          )}
          {etapa < ETAPAS.length - 1 ? (
            <button type="button" className="botao" onClick={() => irPara(etapa + 1)}>
              Avançar
            </button>
          ) : (
            <button type="submit" className="botao" disabled={status === "enviando"}>
              {status === "enviando" ? "Enviando..." : "Enviar cadastro"}
            </button>
          )}
        </div>
        <MensagemForm status={status} mensagem={mensagem} />
      </form>
    </>
  );
}
