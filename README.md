# 🐾 PetConecta — Projeto Web Mobile (WEBLAB)

Site de adoção responsável de cães e gatos, desenvolvido em duas partes para a disciplina de Web Mobile da Universidade Presbiteriana Mackenzie.

**Grupo**

- Gabriel Pissoli Padrão — RA 10723368
- Luana Medeiros — RA 10765540
- Mariana Dantas — RA 10780967

## Estrutura do repositório

```text
primeira-parte/          Etapa 1: site em HTML e CSS
├── PetConecta/          as 7 páginas (.html), style.css, logo e foto da ONG
├── wireframes/          wireframes das telas (.png)
└── README.md            guia das interações planejadas em JavaScript

segunda-parte/           Etapa 2: o mesmo site em Next.js
├── petconecta/          projeto Next.js completo (app, components, lib, data, public)
└── ESPECIFICACAO.md     especificação da migração: rotas, API, componentes e dados
```

## Primeira parte — HTML e CSS

Abra `primeira-parte/PetConecta/ong.html` no navegador. É a página inicial, e as outras páginas são acessadas pelo menu.

## Segunda parte — Next.js

```bash
cd segunda-parte/petconecta
npm install
npm run dev
```

Abra http://localhost:3000.

Os dados dos animais, dos depoimentos e da ONG ficam em `segunda-parte/petconecta/data/*.json`. As páginas só chegam a eles pela API do próprio Next (`/api/...`), sempre usando `fetch`. Os detalhes estão em [`segunda-parte/ESPECIFICACAO.md`](segunda-parte/ESPECIFICACAO.md) e no [README do projeto](segunda-parte/petconecta/README.md).

| Página | Dado |
| --- | --- |
| `/` | `GET /api/ong` e `GET /api/depoimentos` |
| `/sobre` | `GET /api/ong` |
| `/caes`, `/gatos` | `GET /api/animais?especie=...` |
| `/animais/[id]` | `GET /api/animais/[id]` |
| `/adotar`, `/cadastro`, `/contato` | `POST /api/adocao`, `/api/cadastro`, `/api/contato` |
