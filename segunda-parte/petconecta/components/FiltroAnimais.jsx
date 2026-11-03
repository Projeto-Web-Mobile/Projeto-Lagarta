"use client";

/**
 * Formulário de filtro de cães ou gatos. É "controlado": quem guarda os
 * valores é o CatalogoAnimais, que busca de novo na API a cada mudança.
 */
export default function FiltroAnimais({ especie, filtros, onChange }) {
  const muda = (campo) => (e) => onChange({ ...filtros, [campo]: e.target.value });

  if (especie === "cao") {
    return (
      <aside className="filtro-caes">
        <h2>Filtro Cães</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="porte">Porte</label>
          <select id="porte" name="porte" value={filtros.porte ?? ""} onChange={muda("porte")}>
            <option value="">Todos</option>
            <option value="pequeno">Pequeno</option>
            <option value="medio">Médio</option>
            <option value="grande">Grande</option>
          </select>

          <label htmlFor="idade-cao">Idade</label>
          <select id="idade-cao" name="idade" value={filtros.idade ?? ""} onChange={muda("idade")}>
            <option value="">Todas</option>
            <option value="filhote">Filhote (0 – 1 ano)</option>
            <option value="adulto">Adulto (1 – 7 anos)</option>
            <option value="idoso">Idoso (7+ anos)</option>
          </select>

          <label htmlFor="sexo-cao">Sexo</label>
          <select id="sexo-cao" name="sexo" value={filtros.sexo ?? ""} onChange={muda("sexo")}>
            <option value="">Ambos</option>
            <option value="macho">Macho</option>
            <option value="femea">Fêmea</option>
          </select>

          <label htmlFor="energia">
            Nível de Energia (até) <output htmlFor="energia">{filtros.energia ?? "5"}</output>
          </label>
          <input
            type="range"
            id="energia"
            name="energia"
            min="1"
            max="5"
            value={filtros.energia ?? "5"}
            onChange={muda("energia")}
          />

          <button type="button" onClick={() => onChange({})}>
            Limpar filtros
          </button>
        </form>
      </aside>
    );
  }

  return (
    <aside className="filtro-gatos">
      <h2>Filtro Gatos</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="raca-gato">Raça</label>
        <select id="raca-gato" name="raca" value={filtros.raca ?? ""} onChange={muda("raca")}>
          <option value="">Todas</option>
          <option value="srd">SRD</option>
          <option value="siames">Siamês</option>
          <option value="persa">Persa</option>
        </select>

        <label htmlFor="sexo-gato">Sexo</label>
        <select id="sexo-gato" name="sexo" value={filtros.sexo ?? ""} onChange={muda("sexo")}>
          <option value="">Ambos</option>
          <option value="macho">Macho</option>
          <option value="femea">Fêmea</option>
        </select>

        <label htmlFor="ambiente-gato">Exigência de Ambiente</label>
        <select id="ambiente-gato" name="ambiente" value={filtros.ambiente ?? ""} onChange={muda("ambiente")}>
          <option value="">Nenhuma</option>
          <option value="tela">Telas de proteção obrigatórias</option>
          <option value="apartamento">Apartamento</option>
          <option value="quintal">Casa com quintal</option>
        </select>

        <button type="button" onClick={() => onChange({})}>
          Limpar filtros
        </button>
      </form>
    </aside>
  );
}
