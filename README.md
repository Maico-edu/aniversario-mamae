# Feliz Aniversário, Mãe ❤️

Site de aniversário feito com **Vue 3 + Vite + Vue Router (Composition API)**.

## Como rodar

```bash
npm install
npm run dev
```

Depois abra o endereço que aparecer no terminal (normalmente `http://localhost:5173`).

Para gerar a versão final para publicar (ex: Vercel, Netlify, hospedagem própria):

```bash
npm run build
```

Isso cria a pasta `dist/` pronta para subir em qualquer hospedagem de site estático.

## Como trocar fotos e textos

Você **não precisa mexer nos componentes** para trocar conteúdo — tudo fica
centralizado em `src/data/`:

| Arquivo | O que controla |
|---|---|
| `src/data/config.js` | Nome da mãe, data de nascimento, foto principal, mensagem de abertura |
| `src/data/historia.js` | Itens da linha do tempo em "Nossa História" |
| `src/data/fotos.js` | Fotos da Galeria (e frases sobrepostas opcionais) |
| `src/data/motivos.js` | Cartões de "Motivos pelos quais te amamos" |
| `src/data/mensagens.js` | Mensagens da família |
| `src/data/versiculos.js` | Versículos por tema |
| `src/data/memorias.js` | Fotos da linha do tempo horizontal |
| `src/data/musicas.js` | Playlist do player de música |
| `src/views/CartaView.vue` | Texto da carta (variável `textoCarta` no topo do arquivo) |

Coloque as fotos reais dentro de `src/assets/fotos/` e os áudios dentro de
`src/assets/musicas/` — os nomes sugeridos já estão nos arquivos de dados,
mas você pode usar outros nomes desde que ajuste os caminhos.

## Estrutura do projeto

```
src/
├── assets/         → CSS global e imagens/músicas
├── components/     → Navbar, rodapé, loader, partículas, lightbox etc.
├── views/          → Uma página para cada rota
├── router/         → Configuração de todas as rotas
├── composables/     → Lógica reutilizável (contador animado, máquina de escrever)
└── data/           → Conteúdo editável (fotos, textos, listas)
```

## Páginas

- `/` — Início
- `/historia` — Nossa História
- `/galeria` — Galeria de fotos
- `/carta` — Carta (envelope + digitação)
- `/motivos` — Motivos pelos quais te amamos
- `/mensagens` — Mensagens da família
- `/versiculos` — Versículos
- `/memorias` — Linha do tempo horizontal
- `/musica` — Player de música
- `/surpresa` — Página surpresa com confetes

Feito com carinho. 💛
