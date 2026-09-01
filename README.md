# Projeto-PET

Gabriel Pissoli Padrao  RA:10723368

Luana Medeiros RA:10765540

Mariana Dantas RA:10780967

# 🐾 Esperança Animal - Plataforma de Adoção Responsável

Este repositório contém a documentação técnica e o guia de implementação para as interações em JavaScript (Vanilla/JS puro) da plataforma **Esperança Animal**.

O projeto foi construído focando em **HTML5 totalmente semântico**, sem a utilização de frameworks, CSS inline, scripts inline ou seletores de `id` (priorizando a hierarquia semântica dos elementos e seletores de atributos).

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
