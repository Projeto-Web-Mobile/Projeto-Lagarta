# PetConecta — Fase 2 (Next.js)

Versão em Next.js (JavaScript) do site da PetConecta, com componentes React e uma API própria que lê os arquivos JSON.

## Como rodar

```bash
npm install
npm run dev
```

Abra http://localhost:3000

## Estrutura

```text
app/          páginas (page.jsx) e api/ (route.js)
components/   Header, Footer, AnimalCard, AnimalModal, FiltroAnimais...
data/         animais.json, depoimentos.json, ong.json (só a API lê)
lib/          funções e hooks de apoio (api, validação, favoritos, envio)
public/       logo.png, ong.jpeg
```

## Componentes

| Componente | O que faz |
| --- | --- |
| `Header` | Menu com link ativo automático e menu mobile com estado do React |
| `Footer` | Rodapé único para todas as páginas |
| `CatalogoAnimais` | Junta filtro, lista e modal; busca em `/api/animais` a cada mudança |
| `FiltroAnimais` | Filtros de cães (porte, idade, sexo, energia) e gatos (raça, sexo, ambiente) |
| `AnimalCard` | Card de um animal, com favorito salvo no navegador |
| `AnimalModal` | Um `<dialog>` só, que mostra o animal clicado e leva para a adoção |
| `FichaAnimal` | Conteúdo da ficha, igual para cães e gatos (usado no modal e em `/animais/[id]`) |
| `CarrosselDepoimentos` | Depoimentos com setas anterior/próximo |
| `CopiarPix` | Copia a chave Pix e mostra "Copiado!" |
| `CalculadoraDoacao` | Mostra quantos dias de ração ou vacinas o valor paga |
| `FormAdocao`, `FormContato`, `FormCadastro` | Enviam para a API e mostram a resposta na tela |
| `MensagemForm` | Caixa de sucesso/erro dos formulários |

## API

| Método | Rota | Para quê |
| --- | --- | --- |
| GET | `/api/animais` | Lista, com filtros: `especie`, `sexo`, `idade`, `porte`, `energia`, `raca`, `ambiente` |
| GET | `/api/animais/[id]` | Um animal, ou 404 |
| GET | `/api/depoimentos` | Depoimentos da Home |
| GET | `/api/ong` | Impacto, Pix, contato e FAQ |
| POST | `/api/adocao`, `/api/contato`, `/api/cadastro` | Valida e responde 201 ou 400 (não grava nada) |

## Deploy na Vercel

Importe o repositório na Vercel, em **Root Directory** escolha `segunda-parte/petconecta` e crie a variável `NEXT_PUBLIC_SITE_URL` com o endereço público do site
(ex: `https://petconecta.vercel.app`). Ela é usada quando uma página do servidor chama a própria API.
