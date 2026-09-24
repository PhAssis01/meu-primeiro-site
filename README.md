# PH Web Studio — Portfólio

Site da **PH Web Studio** feito com **Vite + React + CSS**, sem dependências extras.

## Como rodar

```bash
npm install
npm run dev      # desenvolvimento (http://localhost:5173)
npm run build    # gera a pasta dist/ para publicar
npm run preview  # testa o build localmente
```

## Páginas

| Rota                   | Página                                            |
| ---------------------- | ------------------------------------------------- |
| `/`                    | Portfólio da PH Web Studio                        |
| `/proyectos/the-king`  | The King Barber Shop (projeto conceitual / demo)  |
| qualquer outra         | Página 404                                        |

## Estrutura

```
src/
├── App.jsx                  # tabela de rotas
├── main.jsx
├── index.css                # reset global
├── router/                  # roteador mínimo (History API)
│   ├── router.js
│   └── Link.jsx
├── lib/hooks.js             # hooks compartilhados (menu, scroll, título)
├── studio/                  # identidade PH Web Studio
│   ├── data.js              # TEXTOS, EMAIL e LISTA DE PROJETOS
│   ├── studio.css
│   ├── StudioHome.jsx
│   ├── NotFound.jsx
│   └── components/
│       └── previews/        # miniaturas dos projetos (feitas em CSS)
└── projects/
    └── the-king/            # identidade própria da barbearia (preto + dourado)
        ├── assets/          # logo e fotos da barbearia
        ├── data.js          # imagens, serviços, conceito e marcadores de contato
        ├── the-king.css
        ├── TheKing.jsx
        └── components/
```

## Edições rápidas

- **Email de contato:** `CONTACT_EMAIL` em `src/studio/data.js`.
- **The King:** serviços, textos do conceito e dados de contato ficam em
  `src/projects/the-king/data.js`. Os campos entre colchetes (`[Dirección del local]`,
  etc.) são marcadores: substituir pelos dados reais quando o negócio os fornecer.
  Não há preços cadastrados.
- **Imagens da The King:** `src/projects/the-king/assets/`. Para melhor nitidez,
  substitua pelas versões originais em alta resolução mantendo o mesmo nome.

## Identidades visuais

| Site              | Cores                          | Fontes                          |
| ----------------- | ------------------------------ | ------------------------------- |
| PH Web Studio     | Preto + azul (`#3B82F6`)       | Space Grotesk + Inter           |
| The King          | Preto + dourado (`#C8A45D`)    | Cormorant Garamond + Manrope    |

## Adicionar um novo projeto ao portfólio

1. Criar a pasta `src/projects/<nome>/` com a página e seu CSS.
2. Registrar a rota em `ROUTES` dentro de `src/App.jsx`.
3. Criar a miniatura em `src/studio/components/previews/` e registrá-la em `previews/index.js`.
4. Adicionar o projeto à lista `PROJECTS` em `src/studio/data.js`
   (já existem exemplos comentados: restaurante, ginásio, hotel, oficina, clínica).

A numeração (01, 02, 03…) é gerada automaticamente pela ordem da lista.

## Publicação

O site usa rotas no navegador (`/proyectos/the-king`). No **Cloudflare Pages**, isso
funciona automaticamente enquanto não houver um `404.html` na raiz do build. Em outros
serviços, configure o fallback de SPA para `index.html`.
