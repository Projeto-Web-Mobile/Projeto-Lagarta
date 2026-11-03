"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const LINKS = [
  { href: "/", rotulo: "Home" },
  { href: "/sobre", rotulo: "Sobre" },
  { href: "/caes", rotulo: "Cães" },
  { href: "/gatos", rotulo: "Gatos" },
  { href: "/cadastro", rotulo: "Cadastrar animal" },
  { href: "/adotar", rotulo: "Como adotar" },
  { href: "/contato", rotulo: "Contato" },
];

export default function Header() {
  const caminho = usePathname();
  const [aberto, setAberto] = useState(false);

  // Fecha o menu mobile sempre que a página muda
  useEffect(() => setAberto(false), [caminho]);

  return (
    <header className="cabecalho-principal">
      <Link href="/" className="logo-container" aria-label="Página inicial da PetConecta">
        <Image src="/logo.png" alt="Logo da PetConecta" className="logo" width={38} height={38} priority />
        <hgroup className="marca">
          <span className="marca-nome">PetConecta</span>
        </hgroup>
      </Link>

      <button
        type="button"
        className={`menu-toggle${aberto ? " aberto" : ""}`}
        aria-label={aberto ? "Fechar menu" : "Abrir menu"}
        aria-expanded={aberto}
        aria-controls="menu-principal"
        onClick={() => setAberto(!aberto)}
      >
        <span></span>
        <span></span>
      </button>

      <nav aria-label="Menu principal" id="menu-principal" className={aberto ? "aberto" : undefined}>
        {LINKS.map((link) => {
          const ativo = link.href === "/" ? caminho === "/" : caminho.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={ativo ? "ativo" : undefined}
              aria-current={ativo ? "page" : undefined}
            >
              {link.rotulo}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
