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
| `/proyectos/barberia`  | Demo genérica para barbearias (template)          |
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
├── i18n/                    # idiomas: ES (padrão), EN e PT-BR
│   ├── languages.js         # lista de idiomas e preferência salva (localStorage "ph-lang")
│   ├── LanguageProvider.jsx # idioma ativo, <html lang> e og:locale
│   ├── context.js           # useLang() e useCopy()
│   └── LangSwitch.jsx       # seletor ES · EN · PT-BR (e variante compacta LangMenu)
├── studio/                  # identidade PH Web Studio
│   ├── data.js              # EMAIL, SERVIÇOS e LISTA DE PROJETOS (sem textos)
│   ├── copy.js              # TEXTOS do estúdio nos 3 idiomas
│   ├── studio.css
│   ├── StudioHome.jsx
│   ├── NotFound.jsx
│   └── components/
│       └── previews/        # miniaturas dos projetos (feitas em CSS)
│   └── services/copy/       # textos de cada página de serviço nos 3 idiomas
└── projects/
    └── barberia/            # demo genérica para barbearias (preto + dourado de exemplo)
        ├── data.js          # dados sem idioma (seções, paleta)
        ├── copy.js          # textos da demo nos 3 idiomas
        ├── barberia.css
        ├── Barberia.jsx
        └── components/      # inclui Placeholder.jsx (espaços para logo e fotos do cliente)
```

## Edições rápidas

- **Email de contato:** `CONTACT_EMAIL` em `src/studio/data.js`.
- **Textos:** cada arquivo `copy.js` tem três blocos (`es`, `en`, `pt-BR`) com as
  mesmas chaves. Ao mudar um texto, mude-o nos três idiomas.
- **Demo de barbearia:** serviços, textos do conceito e dados de contato ficam em
  `src/projects/barberia/copy.js`. É um template: os espaços de logo e fotos mostram
  "Nombre de tu barbería" (`brand`) e os campos entre colchetes
  (`[Dirección del local]`, etc.) são marcadores. Não há preços cadastrados.

## Idiomas

- Espanhol é o idioma padrão. A escolha do visitante fica salva no navegador
  (`localStorage`, chave `ph-lang`) e vale para todas as páginas e recargas.
- As URLs são as mesmas nos três idiomas. O HTML inicial de cada rota
  (`scripts/prerender-routes.mjs`) continua em espanhol; ao trocar de idioma, título,
  descrição, `<html lang>` e `og:locale` são atualizados no navegador.

## Identidades visuais

| Site              | Cores                          | Fontes                          |
| ----------------- | ------------------------------ | ------------------------------- |
| PH Web Studio     | Preto + azul (`#3B82F6`)       | Space Grotesk + Inter           |
| Demo barbearia    | Preto + dourado (`#C8A45D`)    | Cormorant Garamond + Manrope    |

## Adicionar um novo projeto ao portfólio

1. Criar a pasta `src/projects/<nome>/` com a página e seu CSS.
2. Registrar a rota em `ROUTES` dentro de `src/App.jsx`.
3. Criar a miniatura em `src/studio/components/previews/` e registrá-la em `previews/index.js`.
4. Adicionar o projeto à lista `PROJECTS` em `src/studio/data.js` e os seus textos
   (nos 3 idiomas) em `projects.items` de `src/studio/copy.js`
   (já existem exemplos comentados: restaurante, ginásio, hotel, oficina, clínica).

A numeração (01, 02, 03…) é gerada automaticamente pela ordem da lista.

## Publicação

O site usa rotas no navegador (`/proyectos/barberia`). No **Cloudflare Pages**, isso
funciona automaticamente enquanto não houver um `404.html` na raiz do build. Em outros
serviços, configure o fallback de SPA para `index.html`.
