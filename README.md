# Projeto-PET

Gabriel Pissoli Padrao  RA:10723368

Luana Medeiros RA:10765540

Mariana Dantas RA:10780967

# 🐾 Esperança Animal - Plataforma de Adoção Responsável

Este repositório contém a documentação técnica e o guia de implementação para as interações em JavaScript (Vanilla/JS puro) da plataforma **Esperança Animal**.

O projeto foi construído focando em **HTML5 totalmente semântico**, sem a utilização de frameworks, CSS inline, scripts inline ou seletores de `id` (priorizando a hierarquia semântica dos elementos e seletores de atributos).

# 🐾 Esperança Animal — Guia Técnico de Implementação

> **Arquitetura e Diretrizes Frontend** para a plataforma web da ONG **Esperança Animal**, focada em acessibilidade, semântica nativa e performance sem dependências de frameworks.

---

## 🛠️ Tecnologias & Diretrizes Técnicas

* **HTML5 Semântico:** Estruturação através de tags nativas (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, `<dialog>`, `<details>`, `<summary>`).
* **JavaScript Vanilla (ES6+):** Manipulação dinâmica de DOM e eventos sem bibliotecas ou frameworks externos.
* **Arquitetura de Seletores:** Uso exclusivo de seletores por tag semântica, hierarquia de elementos e seletores de atributos (ex: `[data-porte]`, `[type="submit"]`), sem uso de `id`s ou `class`es.

---

## 🚀 Guia Técnico de Implementação por Página

### 1. Home (`index.html` ➔ `js/home.js`)

* **Carrossel de Depoimentos**
  * **Objetivo:** Alternar entre os artigos de depoimento (`<article>`) através das setas de navegação.
  * **Implementação:** Selecionar os artigos via `document.querySelectorAll("main section:last-of-type article")`, alternar a exibição (`display: none` / `display: block`) e escutar os eventos de clique nas setas.

* **Contadores Animados de Impacto**
  * **Objetivo:** Incrementar os valores numéricos gradualmente quando a seção ficar visível no scroll.
  * **Implementação:** Utilizar a API `IntersectionObserver` para monitorar a `<section>` dos contadores e acionar um `setInterval` que incrementa o texto dos elementos `<strong>` até atingir a meta (ex: `+1.200`).

* **Botão Quick-Copy (PIX)**
  * **Objetivo:** Copiar a chave PIX e dar feedback visual imediato ao usuário.
  * **Implementação:** Utilizar `navigator.clipboard.writeText("chave-pix")` no evento de clique do botão e alterar temporariamente o texto para `"Copiado!"` usando `setTimeout`.

---

### 2. Sobre a ONG (`sobre.html` ➔ `js/sobre.js`)

* **Abas Interativas (Tabs)**
  * **Objetivo:** Alternar entre *História*, *Transparência Financeira* e *Cuidados Veterinários* sem recarregar a página.
  * **Implementação:** Capturar os botões em `document.querySelectorAll("menu button")` e exibir apenas o bloco `<article>` correspondente ao índice do botão clicado.

* **Accordion (Sanfona nas FAQs)**
  * **Objetivo:** Expandir e recolher perguntas e respostas.
  * **Nota Semântica:** Como a estrutura utiliza `<details>` e `<summary>`, a expansão e o recolhimento **já ocorrem de forma nativa no HTML**. Caso deseje fechar os outros detalhes ao abrir um novo, escute o evento `toggle` de cada tag `<details>`.

---

### 3. Cães e Gatos para Adoção (`caes.html` e `gatos.html` ➔ `js/caes.js` / `js/gatos.js`)

* **Filtro em Tempo Real**
  * **Objetivo:** Ocultar/exibir os cards de animais sem recarregar a página.
  * **Implementação:** Escutar os eventos `change` do formulário no `<aside>`, ler os valores selecionados (`<select>`, `<input type="radio">`) e ocultar/exibir os `<article>` da listagem comparando com seus atributos/conteúdos.

* **Modal de Detalhes (`<dialog>`)**
  * **Objetivo:** Exibir a ficha médica e histórico completo do pet.
  * **Implementação:** Capturar o modal via `document.querySelector("dialog")`. Acionar `modalElement.showModal()` ao clicar no card e `modalElement.close()` no botão de fechar.

---

### 4. Cadastrar Animal (`cadastrar-animal.html` ➔ `js/cadastrar-animal.js`)

* **Upload e Preview Dinâmico de Fotos**
  * **Objetivo:** Exibir miniaturas das fotos selecionadas pelo tutor antes do envio.
  * **Implementação:** Escutar o evento `change` no `<input type="file">`, ler os arquivos via `FileReader()` ou `URL.createObjectURL()` e criar tags `<figure>` com `<img>` dentro do `<fieldset>` de fotos.

* **Formulário Multi-etapas (Step-by-Step)**
  * **Objetivo:** Alternar a visibilidade dos `<fieldset>` conforme o avanço nas etapas (`<ol>`).
  * **Implementação:** Controlar a exibição através de uma variável de estado (`passoAtual`), alterando a visibilidade dos `<fieldset>` e destacando o item ativo na lista `<ol>`.

* **Validação e Feedback Instantâneo**
  * **Objetivo:** Enviar o cadastro sem redirecionar a página.
  * **Implementação:** Tratar o evento `submit` com `e.preventDefault()`, validar os campos obrigatórios (`required`) e exibir a confirmação diretamente na interface.

---

### 5. Como Adotar (`como-adotar.html` ➔ `js/como-adotar.js`)

* **Checklist Interativo de Requisitos**
  * **Objetivo:** Liberar o formulário de adoção apenas após o preenchimento de todos os pré-requisitos.
  * **Implementação:** Escutar o evento `change` em todos os `<input type="checkbox">` e alterar a propriedade `disabled` do botão do formulário até que todas as caixas estejam marcadas (`:checked`).

---

### 6. Apoie a ONG (`apoie.html` ➔ `js/apoie.js`)

* **Calculadora de Impacto de Doação**
  * **Objetivo:** Calcular em tempo real o retorno em mantimentos com base no valor digitado.
  * **Implementação:** Escutar o evento `input` no `<input type="number">` da doação, calcular a proporção dos suprimentos e atualizar dinamicamente o elemento `<output>`.

* **Gerador e Cópia de PIX**
  * **Objetivo:** Copiar a chave PIX e atualizar o feedback no botão.
  * **Implementação:** Utilizar `navigator.clipboard.writeText()` para salvar a chave e acionar feedback ao doador.

---

### 7. Contato (`contato.html` ➔ `js/contato.js`)

* **Validação em Tempo Real e Feedback de Envio**
  * **Objetivo:** Validar os dados de contato enquanto o usuário digita e confirmar a mensagem.
  * **Implementação:** Validar formatos no evento `blur`/`input` dos campos. Tratar o evento `submit` com `e.preventDefault()` e injetar um bloco de confirmação `<article>` diretamente na tela.

---

## 📁 Estrutura de Arquivos Recomendada

Para manter a organização semântica do projeto, sugere-se a seguinte estrutura para a pasta de scripts:

```text
/js
 ├── home.js               # Carrossel, contadores e botão PIX
 ├── sobre.js              # Abas interativas e controle de FAQ
 ├── caes.js               # Filtros dinâmicos e controle do modal de cães
 ├── gatos.js              # Filtros dinâmicos e controle do modal de gatos
 ├── cadastrar-animal.js   # Preview de fotos, formulário multi-etapas e validação
 ├── como-adotar.js        # Checklist interativo e validação do formulário
 ├── apoie.js              # Calculadora de impacto e cópia de PIX
 └── contato.js            # Validação em tempo real e feedback de envio
