"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import FichaAnimal from "./FichaAnimal";

/** Um modal só, que mostra o animal clicado. Substitui os 20 <dialog>. */
export default function AnimalModal({ animal, onFechar }) {
  const ref = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (animal && !dialog.open) dialog.showModal();
    if (!animal && dialog.open) dialog.close();
  }, [animal]);

  function querAdotar() {
    if (!animal) return;
    ref.current?.close();
    router.push(`/adotar?animal=${encodeURIComponent(animal.nome)}#formulario-adocao`);
  }

  return (
    <dialog
      ref={ref}
      className="modal-animal"
      onClose={onFechar}
      // clicar no fundo escuro fecha o modal
      onClick={(e) => e.target === ref.current && ref.current?.close()}
    >
      {animal && (
        <FichaAnimal animal={animal}>
          <button type="button" className="botao-fechar" aria-label="Fechar" onClick={() => ref.current?.close()}>
            ✕
          </button>
          <button type="button" className="botao" onClick={querAdotar}>
            Quero Adotar
          </button>
        </FichaAnimal>
      )}
    </dialog>
  );
}
