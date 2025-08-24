# 📌 Projeto - API + Frontend

Este projeto consiste em um backend desenvolvido em **Node.js (Fastify)** integrado a um banco de dados, e um frontend utilizando **ReactJS + TypeScript**.  
O objetivo é gerenciar clientes através de rotas de API e interface web.

---

## 🚀 Backend
Tecnologias: **Node.js, Fastify, Banco de Dados**

### Funcionalidades concluídas:
- ✅ Criar API REST com Fastify  
- ✅ Comunicar com banco de dados  
- ✅ Cadastrar novo cliente com **nome, email e status**  
- ✅ Listar todos clientes cadastrados  
- ✅ Deletar um cliente com base em um **ID**

---

## 💻 Frontend
Tecnologias: **ReactJS, TypeScript**

### Funcionalidades pendentes:
- [ ] Consumir API REST  
- [ ] Listar todos clientes cadastrados  
- [ ] Cadastrar novo cliente com **nome e email**  
- [ ] Deletar um cliente  

---

## 📂 Estrutura do Projeto
```bash
/
├── backend/     # API em Node.js + Fastify
└── frontend/    # Aplicação em ReactJS + TypeScript

# React + TypeScript + Vite

<div class="container" style="display: flex; flex-wrap: wrap;">
  <h2>Demostração do Projetos</h2>
  <img src="/public/Tarefas da Aplicação.png" alt="Tarefas da Aplicação"/>
  <img src="/public/Tela de Clientes.png" alt="Tela de Clientes"/>
  <img src="/public/Listas de Clientes.png" alt="Listas de Clientes"/>
  <img src="/public/Tabela no Prismas Studio.png" alt="Tabela Prisma Studio"/>
  <img src="/public/Banco no MongoDB.png" alt="Bamco de Dados"/>
</div>

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
