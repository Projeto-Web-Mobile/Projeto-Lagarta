import FormContato from "@/components/FormContato";
import { apiGet } from "@/lib/api";

export const metadata = { title: "Contato" };

// Os dados de contato vêm de /api/ong; o formulário envia para /api/contato
export default async function ContatoPage() {
  const ong = await apiGet("/api/ong");
  const c = ong?.contato;

  return (
    <>
      <section className="secao-titulo">
        <h1>Contato</h1>
      </section>

      <section className="secao-localizacao">
        <figure className="mapa">
          <svg viewBox="0 0 400 300" role="img" aria-label="Mapa ilustrativo da localização da PetConecta">
            <rect width="400" height="300" fill="#eaf3ee"></rect>
            <rect x="0" y="0" width="400" height="300" fill="#dcece3"></rect>
            <g stroke="#c3d9cd" strokeWidth="10">
              <line x1="0" y1="70" x2="400" y2="70"></line>
              <line x1="0" y1="190" x2="400" y2="190"></line>
              <line x1="90" y1="0" x2="90" y2="300"></line>
              <line x1="250" y1="0" x2="250" y2="300"></line>
            </g>
            <g stroke="#ffffff" strokeWidth="2" strokeDasharray="8 6">
              <line x1="0" y1="70" x2="400" y2="70"></line>
              <line x1="0" y1="190" x2="400" y2="190"></line>
              <line x1="90" y1="0" x2="90" y2="300"></line>
              <line x1="250" y1="0" x2="250" y2="300"></line>
            </g>
            <rect x="115" y="95" width="55" height="40" rx="4" fill="#cfe4d9"></rect>
            <rect x="270" y="95" width="70" height="40" rx="4" fill="#cfe4d9"></rect>
            <rect x="115" y="205" width="90" height="45" rx="4" fill="#cfe4d9"></rect>
            <rect x="270" y="205" width="55" height="45" rx="4" fill="#cfe4d9"></rect>
            <path d="M188 108 C188 88, 220 88, 220 108 C220 128, 204 148, 204 148 C204 148, 188 128, 188 108 Z" fill="#167a53"></path>
            <circle cx="204" cy="107" r="9" fill="#ffffff"></circle>
            <text x="204" y="172" textAnchor="middle" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="13" fontWeight="700" fill="#12241c">
              PetConecta
            </text>
            <text x="204" y="188" textAnchor="middle" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="10" fill="#66716a">
              Av. Paulista, 1000
            </text>
          </svg>
        </figure>
        {c && (
          <address>
            <strong>Endereço do abrigo</strong>
            <br />
            <span className="material-symbols-outlined">location_on</span>
            {c.endereco}
            <br />
            <span className="material-symbols-outlined">mail</span>
            <a href={`mailto:${c.email}`}>{c.email}</a>
            <br />
            <span className="material-symbols-outlined">call</span>
            {c.telefone}
            <br />
            <span className="material-symbols-outlined">photo_camera</span>
            {c.instagram}
          </address>
        )}
      </section>

      <section className="secao-formulario-contato">
        <FormContato />
      </section>
    </>
  );
}
