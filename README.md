# Design System do E-Coleta

Catálogo em Storybook dos componentes do E-Coleta e do E-Coleta Profissional. Projeto do Grupo 4 da disciplina de Interação Humano-Computador, UFSCar, São Carlos, 2026.

**Site publicado:** https://silvestrechiarinettoufscar.github.io/e-coleta-storybook/

## Conteúdo

- **Fundamentos:** visão geral, princípios de design e tokens (cores, tipografia, espaçamento e foco).
- **Componentes:** botões, campos de formulário, cartões, feedback, seleção e estados.
- **Padrões:** acessibilidade e fluxos do projeto (resultados de descarte e registro de triagem).

Os dados dos exemplos são fictícios.

## Rodar localmente

Use Node.js 24 e npm 11.

```bash
npm ci
npm run storybook        # abre em http://localhost:6006
npm run build-storybook  # gera a versão estática em dist/
```

## Publicação

A cada envio para a branch `main`, o GitHub Actions gera o Storybook e publica no GitHub Pages (`.github/workflows/deploy.yml`). Em **Settings → Pages**, a opção "Source" deve estar em **GitHub Actions**.
