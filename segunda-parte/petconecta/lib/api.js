import { headers } from "next/headers";

/**
 * Busca na nossa própria API a partir de um Server Component.
 * No servidor o fetch precisa de URL absoluta, e `no-store` evita que o
 * `next build` tente chamar a API antes de o servidor existir.
 */
export async function apiGet(caminho) {
  const h = await headers();
  const host = h.get("host") ?? "localhost:3000";
  const protocolo = h.get("x-forwarded-proto") ?? "http";
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? `${protocolo}://${host}`;

  const res = await fetch(`${base}${caminho}`, { cache: "no-store" });
  if (!res.ok) return null;
  return await res.json();
}
