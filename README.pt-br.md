<!-- ===== HEADER (Badges) ===== -->
<p align="right">
  <a href="./README.md" title="Read the README in english">
    <img
      src="https://img.shields.io/badge/lang-en-red?style=flat-square&labelColor=202024"
      alt="lang-en"
    />
  </a>
  <img
    src="https://img.shields.io/badge/lang-pt--br-gray?style=flat-square&labelColor=202024"
    alt="lang-pt-br"
  />
</p>

<p align="center">
  <a
    href="https://guipmdev-ignite-timer.vercel.app/"
    title="Acessar a aplicação web"
  >
    <img
      src="./src/assets/logo-ignite.svg"
      alt="Logo do Ignite Feed"
      height="60px"
    />
  </a>
</p>

<h1 align="center">Ignite Timer</h1>

<p align="center">
  <img
    src="https://img.shields.io/github/languages/count/guipmdev/ignite-timer?color=%2304D361&labelColor=202024&label=linguagens"
    alt="Contagem de linguagens do repositório"
  />
  <img
    src="https://img.shields.io/github/repo-size/guipmdev/ignite-timer?labelColor=202024&label=tamanho do repo"
    alt="Tamanho do repositório"
  />
  <img
    src="https://img.shields.io/github/commit-activity/m/guipmdev/ignite-timer?color=black&labelColor=202024&label=atividade de commits"
    alt="Atividade de commits"
  />
  <a
    href="https://github.com/guipmdev/ignite-timer/commits/main"
    title="Visualizar commits do repositório"
  >
    <img
      src="https://img.shields.io/github/last-commit/guipmdev/ignite-timer?labelColor=202024&label=último commit"
      alt="Último commit"
    />
  </a>
  <a href="./LICENSE" title="Visualizar licença do projeto">
    <img
      src="https://img.shields.io/badge/license-MIT-brightgreen?labelColor=202024&label=licen%C3%A7a"
      alt="Licença do projeto"
    />
  </a>
  <a href="https://www.rocketseat.com.br/" title="Acessar o site da Rocketseat">
    <img
      src="https://img.shields.io/badge/Layout_por-Rocketseat-8257e5?labelColor=202024"
      alt="Designer do layout"
    />
  </a>
</p>

![Captura de tela da página inicial da aplicação](./src/assets/images/cover.webp)

<p align="center">
  <a href="https://guipmdev-ignite-timer.vercel.app/"
    >Acessar a aplicação web ↗</a
  >
</p>

<details>
  <summary>
    <h2>📒 Índice</h2>
  </summary>

- [📍 Visão geral](#-visão-geral)
- [✨ Funcionalidades](#-funcionalidades)
- [🤖 Demo](#-demo)
- [🎨 Layout](#-layout)
- [🛠 Tecnologias](#-tecnologias)
  - [Website](#website)
  - [Úteis](#úteis)
- [🚀 Primeiros passos](#-primeiros-passos)
  - [✔️ Pré-requisitos](#️-pré-requisitos)
  - [📦 Instalação](#-instalação)
  - [⚙️ Utilização](#️-utilização)
- [📄 Licença](#-licença)
- [👏 Reconhecimentos](#-reconhecimentos)
</details>

<!-- ===== PROJECT INFOS ===== -->

## 📍 Visão geral

Esse projeto é uma aplicação web desenvolvida em _React_ e _TypeScript_ servindo como cronômetro para gerenciar ciclos, permitindo que os usuários criem tarefas com durações específicas e as interrompam e/ou marquem como concluídas.

A aplicação oferece recursos como cronômetros de contagem regressiva, histórico e uma interface fácil de usar, melhorando a produtividade e as habilidades de gestão de tempo.

## ✨ Funcionalidades

⏱ Defina **o que deseja trabalhar**, e por quanto **tempo**

🎯 **Mude de aba** e continue vendo o tempo passar

🔄 Atualizar a página **não perde o progresso**

📃 Veja as tarefas em andamento, já concluídas e/ou interrompidas em formato de **histórico**

## 🤖 Demo

https://github.com/guipmdev/ignite-timer/assets/136738335/cad338b5-518c-4ffc-84d5-c7e78d0df639

## 🎨 Layout

O layout da aplicação foi projetado pela **Rocketseat** e está disponível no [Figma](<https://www.figma.com/file/djb7QGcTHA3Qtunn77t7pB/Ignite-Timer-(Community)>).

<p align="center">
  <img
    src="./src/assets/images/layout-cover.webp"
    alt="Imagem de capa do layout da aplicação web"
    width="50%"
  />
</p>

## 🛠 Tecnologias

As seguintes ferramentas foram usadas para desenvolver esse projeto:

### Website

<p>
  <a href="https://vitejs.dev/">
    <img
      src="https://img.shields.io/badge/Vite-1e1e20?style=for-the-badge&logo=Vite"
      alt="Vite"
    />
  </a>
  <a href="https://react.dev/">
    <img
      src="https://img.shields.io/badge/React-23272f?style=for-the-badge&logo=React"
      alt="React"
    />
  </a>
  <a href="https://www.typescriptlang.org/">
    <img
      src="https://img.shields.io/badge/TypeScript-white?style=for-the-badge&logo=TypeScript"
      alt="TypeScript"
    />
  </a>
  <a href="https://eslint.org/">
    <img
      src="https://img.shields.io/badge/ESLint-101828?style=for-the-badge&logo=ESLint"
      alt="ESLint"
    />
  </a>
  <a href="https://github.com/rocketseat/eslint-config-rocketseat">
    <img
      src="https://img.shields.io/badge/Rocketseat_ESLint_config-gray?style=for-the-badge"
      alt="Rocketseat ESLint config"
    />
  </a>
</p>

<p>
  <a href="https://reactrouter.com/">
    <img
      src="https://img.shields.io/badge/React_Router-121212?style=for-the-badge&logo=react-router"
      alt="React Router"
    />
  </a>
  <a href="https://react-hook-form.com/">
    <img
      src="https://img.shields.io/badge/React_Hook_Form-060e21?style=for-the-badge&logo=react-hook-form"
      alt="React Hook Form"
    />
  </a>
  <a href="https://github.com/colinhacks/zod">
    <img
      src="https://img.shields.io/badge/Zod-3068b7?style=for-the-badge&logo=zod"
      alt="Zod"
    />
  </a>
  <a href="https://date-fns.org/">
    <img
      src="https://img.shields.io/badge/date--fns-fffbf5?style=for-the-badge&logo=data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjMycHgiIGhlaWdodD0iMjZweCIgdmlld0JveD0iMCAwIDMyIDI2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjcuMSAoMjgyMTUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPlNsaWNlIDE8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iZGF0ZS1mbnMtbWluaS1sb2dvIiBmaWxsPSIjNzcwQzU2Ij4KICAgICAgICAgICAgPGcgaWQ9IlBhZ2UtMSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0ibG9nbyI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IlBhZ2UtMSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJTb2xpZC1sb2dvIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJXaGl0ZS1sb2dvIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMC4wNzczMzc3OTUxLDEyLjk2MTc2NDcgQzAuMDc3MzM3Nzk1MSwxMC40NjU3NTIyIDAuNTQxMzU5OTI2LDguMTEyMDExMDYgMS40Njk0MTgxMSw1LjkwMDQ3MDU5IEMyLjM5NzQ3NjI5LDMuNjg4OTMwMTMgMy43MzM4NjAwMywxLjcyOTc3MzI0IDUuNDc4NjA5NDEsMC4wMjI5NDExNzY0IEw4Ljk4NjY1MTc5LDAuMDIyOTQxMTc2NCBDNS4zNDg2NjM3MiwzLjU4MzQyOTU2IDMuNTI5Njk2OTcsNy44OTYzMjc2MSAzLjUyOTY5Njk3LDEyLjk2MTc2NDcgQzMuNTI5Njk2OTcsMTguMDI3MjAxOCA1LjM0ODY2MzcyLDIyLjM0MDA5OTkgOC45ODY2NTE3OSwyNS45MDA1ODgzIEw1LjQ3ODYwOTQxLDI1LjkwMDU4ODMgQzMuNzMzODYwMDMsMjQuMTkzNzU2MSAyLjM5NzQ3NjI5LDIyLjIzNDU5OTMgMS40Njk0MTgxMSwyMC4wMjMwNTg4IEMwLjU0MTM1OTkyNiwxNy44MTE1MTg0IDAuMDc3MzM3Nzk1MSwxNS40NTc3NzcyIDAuMDc3MzM3Nzk1MSwxMi45NjE3NjQ3IEwwLjA3NzMzNzc5NTEsMTIuOTYxNzY0NyBMMC4wNzczMzc3OTUxLDEyLjk2MTc2NDcgTDAuMDc3MzM3Nzk1MSwxMi45NjE3NjQ3IFogTTMxLjQzNzgxMzcsMTIuOTYxNzY0NyBDMzEuNDM3ODEzNywxNS40NTc3NzcyIDMwLjk3Mzc5MTYsMTcuODExNTE4NCAzMC4wNDU3MzM0LDIwLjAyMzA1ODggQzI5LjExNzY3NTIsMjIuMjM0NTk5MyAyNy43ODEyOTE1LDI0LjE5Mzc1NjEgMjYuMDM2NTQyMSwyNS45MDA1ODgzIEwyMi41Mjg0OTk4LDI1LjkwMDU4ODMgQzI2LjE2NjQ4NzgsMjIuMzQwMDk5OSAyNy45ODU0NTQ1LDE4LjAyNzIwMTggMjcuOTg1NDU0NSwxMi45NjE3NjQ3IEMyNy45ODU0NTQ1LDcuODk2MzI3NjEgMjYuMTY2NDg3OCwzLjU4MzQyOTU2IDIyLjUyODQ5OTgsMC4wMjI5NDExNzY0IEwyNi4wMzY1NDIxLDAuMDIyOTQxMTc2NCBDMjcuNzgxMjkxNSwxLjcyOTc3MzI0IDI5LjExNzY3NTIsMy42ODg5MzAxMyAzMC4wNDU3MzM0LDUuOTAwNDcwNTkgQzMwLjk3Mzc5MTYsOC4xMTIwMTEwNiAzMS40Mzc4MTM3LDEwLjQ2NTc1MjIgMzEuNDM3ODEzNywxMi45NjE3NjQ3IEwzMS40Mzc4MTM3LDEyLjk2MTc2NDcgTDMxLjQzNzgxMzcsMTIuOTYxNzY0NyBMMzEuNDM3ODEzNywxMi45NjE3NjQ3IFoiIGlkPSJQYXJhbnMiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iSGFuZHMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyLjk1NDA4MSwgMS43MjA1ODgpIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IkhhbmQiIHg9IjAiIHk9IjAiIHdpZHRoPSIyLjMyMDEzMzg2IiBoZWlnaHQ9IjEzLjE5MTE3NjQiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IkhhbmQiIHBvaW50cz0iMi4zMTg5NTUxIDEzLjE0OTkzNDIgMC44MTUwODc5MTYgMTEuNjYyOTMwMiAxMC4yNDg0MzY2IDIuMzM1MzU5OSAxMS43NTIzMDM4IDMuODIyMzYzODggMi4zMTg5NTUxIDEzLjE0OTkzNDIiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="
      alt="date-fns"
    />
  </a>
  <a href="https://immerjs.github.io/immer/">
    <img
      src="https://img.shields.io/badge/Immer-black?style=for-the-badge&logo=immer"
      alt="Immer"
    />
  </a>
</p>

<p>
  <a href="https://styled-components.com/">
    <img
      src="https://img.shields.io/badge/styled--components-0c0d0f?style=for-the-badge&logo=styled-components"
      alt="styled-components"
    />
  </a>
  <a href="https://phosphoricons.com/">
    <img
      src="https://img.shields.io/badge/Phosphor_Icons-eeeae3?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMiIGhlaWdodD0iNDQiIHZpZXdCb3g9IjAgMCAzMyA0NCIgZmlsbD0ibm9uZSIKICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoIGQ9Ik0xNy4xMDI2IDAuMDUwMjU3NUgxLjQ5NDM0QzEuMTk0NDYgMC4wNTAyNTc1IDAuOTA2ODU5IDAuMTY5MzggMC42OTQ4MTUgMC4zODE0MjVDMC40ODI3NyAwLjU5MzQ3IDAuMzYzNjQ3IDAuODgxMDU2IDAuMzYzNjQ3IDEuMTgwOTNWMjguOTE4OUMwLjM2NzQ2NCAzMi44OTQ4IDEuOTQ3OTMgMzYuNzA3IDQuNzU4NDUgMzkuNTE5M0M3LjU2ODk3IDQyLjMzMTYgMTEuMzgwMSA0My45MTQ1IDE1LjM1NjEgNDMuOTIwOUMxNS41MDQ1IDQzLjkyMDkgMTUuNjUxNiA0My44OTE3IDE1Ljc4ODcgNDMuODM0OEMxNS45MjU5IDQzLjc3OCAxNi4wNTA2IDQzLjY5NDcgMTYuMTU1NiA0My41ODk3QzE2LjI2MDYgNDMuNDg0NyAxNi4zNDM4IDQzLjM2MDEgMTYuNDAwNyA0My4yMjI5QzE2LjQ1NzUgNDMuMDg1NyAxNi40ODY3IDQyLjkzODcgMTYuNDg2NyA0Mi43OTAyVjMwLjA0OTVIMTcuMDkzQzE5LjA4NTQgMzAuMDg1MiAyMS4wNjQ5IDI5LjcyMzYgMjIuOTE2IDI4Ljk4NThDMjQuNzY3MSAyOC4yNDgxIDI2LjQ1MjYgMjcuMTQ4OSAyNy44NzQyIDI1Ljc1MjVDMjkuMjk1OSAyNC4zNTYxIDMwLjQyNSAyMi42OTA1IDMxLjE5NTkgMjAuODUyOUMzMS45NjY3IDE5LjAxNTMgMzIuMzYzNyAxNy4wNDI2IDMyLjM2MzcgMTUuMDQ5OUMzMi4zNjM3IDEzLjA1NzIgMzEuOTY2NyAxMS4wODQ1IDMxLjE5NTkgOS4yNDY4N0MzMC40MjUgNy40MDkyOCAyOS4yOTU5IDUuNzQzNjYgMjcuODc0MiA0LjM0NzI4QzI2LjQ1MjYgMi45NTA4OSAyNC43NjcxIDEuODUxNzMgMjIuOTE2IDEuMTEzOTVDMjEuMDY0OSAwLjM3NjE2OCAxOS4wODU0IDAuMDE0NTcyMyAxNy4wOTMgMC4wNTAyNTc1SDE3LjEwMjZaTTE0LjIxNTcgNDEuNjExNEMxMS4yNDQzIDQxLjM0MTIgOC40NjE1OSA0MC4wMzc4IDYuMzUxNzggMzcuOTI4QzQuMjQxOTcgMzUuODE4MSAyLjkzODU2IDMzLjAzNTQgMi42NjgzMiAzMC4wNjRIMTQuMjE1N1Y0MS42MTE0Wk0xNC4yMTU3IDI0LjEzMTVMMy4zMjc0OSAyLjMxMTYxSDE0LjIzNUwxNC4yMTU3IDI0LjEzMTVaTTE3LjEwMjYgMjcuNzg4MkgxNi40OTY0VjIuMzExNjFIMTcuMTAyNkMxOC43OTYyIDIuMjc4NjkgMjAuNDc5NCAyLjU4Mzg2IDIyLjA1MzcgMy4yMDkyM0MyMy42MjggMy44MzQ2IDI1LjA2MTggNC43Njc2MyAyNi4yNzEyIDUuOTUzNzVDMjcuNDgwNiA3LjEzOTg3IDI4LjQ0MTMgOC41NTUyNyAyOS4wOTcyIDEwLjExNzFDMjkuNzUzIDExLjY3OSAzMC4wOTA4IDEzLjM1NTkgMzAuMDkwOCAxNS4wNDk5QzMwLjA5MDggMTYuNzQzOSAyOS43NTMgMTguNDIwOCAyOS4wOTcyIDE5Ljk4MjdDMjguNDQxMyAyMS41NDQ1IDI3LjQ4MDYgMjIuOTU5OSAyNi4yNzEyIDI0LjE0NkMyNS4wNjE4IDI1LjMzMjEgMjMuNjI4IDI2LjI2NTIgMjIuMDUzNyAyNi44OTA2QzIwLjQ3OTQgMjcuNTE1OSAxOC43OTYyIDI3LjgyMTEgMTcuMTAyNiAyNy43ODgyWiIgZmlsbD0iY3VycmVudENvbG9yIi8+Cjwvc3ZnPgo="
      alt="Phosphor Icons"
    />
  </a>
</p>

_\* Confira o arquivo [<kbd>package.json</kbd>](./package.json)_

### Úteis

<p>
  <a href="https://git-scm.com/">
    <img
      src="https://img.shields.io/badge/Git-f1f1e9?style=for-the-badge&logo=git"
      alt="Git"
    />
  </a>
  <a href="https://nodejs.org/">
    <img
      src="https://img.shields.io/badge/Node.js-233056?style=for-the-badge&logo=node.js"
      alt="Node.js"
    />
  </a>
  <a href="https://figma.com/">
    <img
      src="https://img.shields.io/badge/Figma-white?style=for-the-badge&logo=figma"
      alt="Figma"
    />
  </a>
  <a href="https://fonts.google.com/">
    <img
      src="https://img.shields.io/badge/Google_Fonts-white?style=for-the-badge&logo=google-fonts"
      alt="Google Fonts"
    />
  </a>
  <a href="https://code.visualstudio.com/">
    <img
      src="https://img.shields.io/badge/VSCode-005293?style=for-the-badge&logo=visual-studio-code"
      alt="VSCode"
    />
  </a>
</p>

## 🚀 Primeiros passos

### ✔️ Pré-requisitos

Antes de você começar, certifique-se que você tem as seguintes ferramentas instaladas na sua máquina: [Git](https://git-scm.com/downloads), [Node.js](https://nodejs.org/en/download). Também é bom ter um editor para trabalhar com o código, como o [VSCode](https://code.visualstudio.com/Download).

### 📦 Instalação

1. Clone o repositório:

```sh
git clone https://github.com/guipmdev/ignite-timer/
```

2. Mude para o diretório do projeto:

```sh
cd ignite-timer
```

3. Instale as dependências:

```sh
npm install
```

### ⚙️ Utilização

1. inicie a aplicação web:

```sh
npm run dev
```

2. Acesse https://localhost:5173/ para visualizar a aplicação

## 📄 Licença

Este projeto está licenciado de acordo com os termos da licença `MIT`. Consulte o arquivo [LICENSE](./LICENSE) para mais informações.

## 👏 Reconhecimentos

> - Muito obrigado à [Rocketseat](https://www.rocketseat.com.br/) pelo layout e pelas dicas de como montar este projeto

<!-- ===== FOOTER ===== -->

---

<p align="center">
  Feito com 💙 por
  <a href="https://www.guipm.dev/"> @guipm.dev </a>
  - Fique à vontade para
  <a href="mailto:guipm.dev@gmail.com">entrar em contato comigo</a>!
</p>

<br />

<p align="center">
  <a href="#top">
    <b>↑&nbsp;&nbsp; Voltar ao topo &nbsp;&nbsp;↑</b>
  </a>
</p>
