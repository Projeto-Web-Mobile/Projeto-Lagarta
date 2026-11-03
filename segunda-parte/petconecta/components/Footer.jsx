import Image from "next/image";
import Link from "next/link";

const LINKS_RAPIDOS = [
  { href: "/sobre", rotulo: "Sobre" },
  { href: "/caes", rotulo: "Cães" },
  { href: "/gatos", rotulo: "Gatos" },
  { href: "/cadastro", rotulo: "Cadastrar animal" },
  { href: "/adotar", rotulo: "Como adotar" },
  { href: "/contato", rotulo: "Contato" },
];

export default function Footer() {
  return (
    <footer className="rodape-principal">
      <section className="rodape-cta">
        <div>
          <h2>Pronto para mudar uma vida?</h2>
          <p>
            Conheça os animais disponíveis para adoção e comece hoje mesmo o processo responsável com a nossa equipe.
          </p>
        </div>
        <Link href="/adotar" className="botao">
          Quero adotar
        </Link>
      </section>

      <div className="rodape-colunas">
        <section className="coluna-redes">
          <Image src="/logo.png" alt="PetConecta" className="logo-rodape" width={56} height={56} />
          <strong>PetConecta</strong>
          <p>
            Adote um amigo,
            <br />
            mude uma vida.
          </p>
          <nav className="icones-redes" aria-label="Redes sociais">
            <a href="#" aria-label="Instagram">
              <span className="material-symbols-outlined">photo_camera</span>
            </a>
            <a href="#" aria-label="Facebook">
              <span className="material-symbols-outlined">thumb_up</span>
            </a>
            <a href="#" aria-label="Youtube">
              <span className="material-symbols-outlined">play_circle</span>
            </a>
          </nav>
        </section>

        <section className="coluna-links">
          <h3>Links rápidos</h3>
          <nav aria-label="Links do rodapé">
            {LINKS_RAPIDOS.map((l) => (
              <Link key={l.href} href={l.href}>
                {l.rotulo}
              </Link>
            ))}
          </nav>
        </section>

        <section className="coluna-endereco">
          <article className="unidade">
            <h3>Abrigo PetConecta</h3>
            <span className="unidade-subtitulo">Visitas aos sábados, mediante agendamento</span>
            <address className="detalhes-marca">
              <span className="material-symbols-outlined">location_on</span>Av. Paulista, 1000 — São Paulo, SP
              <br />
              <span className="material-symbols-outlined">call</span>(11) 99999-9999
              <br />
              <a href="mailto:contato@petconecta.com.br">
                <span className="material-symbols-outlined">mail</span>contato@petconecta.com.br
              </a>
            </address>
          </article>
        </section>
      </div>

      <section className="coluna-direitos">
        <p>&copy; 2026 PetConecta. Todos os direitos reservados.</p>
      </section>
    </footer>
  );
}
