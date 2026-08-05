# Brain Dump — Xadrez Streamers

Sistema web (front-end React + TypeScript + Vite) que lista streamers de xadrez do Chess.com, mostrando quem está ao vivo, com busca e filtros.

## Objetivo

Página única que consome a API pública do Chess.com e exibe uma listagem de streamers, seguindo o design de `docs/design-home/` (vibes "Creator Directory": Inter, cards brancos `rounded-2xl` com soft shadow, fundo `#f4f4f5`, roxo Twitch `#9146ff` como cor primária).

## Stack

- React 19 + TypeScript + Vite (projeto já existente na raiz)
- Lint: `oxlint` · Build: `npm run build` · Dev: `npm run dev`
- Sem bibliotecas de UI externas por enquanto (estilo via CSS seguindo o design system do DESIGN.md)

## Dados — API

- Endpoint: `https://api.chess.com/pub/streamers`
- Resposta: objeto com array `streamers[]`
- Campos usados por streamer:
  - `username` (ex.: `"Elaynah"`)
  - `avatar` (ex.: `"https://images.chesscomfiles.com/uploads/v1/user/41410726.35830b2b.50x50o.ea6da9eb7432.jpeg"`)
  - `twitch_url` (ex.: `"https://twitch.tv/elaynah"`)
- Campo auxiliar para status online/offline: `is_live` (boolean) — presente na resposta real; usar como fonte da bolinha de status
- `twitch_url` pode estar vazio/ausente em alguns streamers → tratar como null

## Layout da página

1. **Header** (sticky, como no design): logo/marca à esquerda, links de navegação, ações à direita
2. **Barra de busca**: campo de pesquisa por usuário, logo abaixo do header, na parte superior da página (como no design: input `rounded-full` em `#f4f4f5`, focus com anel roxo)
3. **Select de filtro**: ao lado da busca, com opções:
   - Todos
   - Online (ao vivo)
   - Offline
4. **Grade de cards** (grid responsivo `1/2/3/4` colunas, como no design):
   - Foto do avatar (circular, `rounded-full`)
   - Nome do usuário (`headline-md`)
   - Link/CTA "Ver na Twitch" (botão roxo) apontando para `twitch_url`
   - **Bolinha de status no canto superior direito do card**:
     - vermelha se online (`is_live === true`)
     - preta se offline

> Nota: o `code.html` do design mostra a bolinha no canto inferior direito do avatar (verde = online). O requisito do cliente manda colocar no **canto superior direito do card**, vermelho/preta. Decisão: seguir o requisito do cliente (superior direito).

## Funcionalidades

- **Ordenação**: botão/controle para alternar entre:
  - Online primeiro (padrão sugerido) e depois offline
  - Offline primeiro e depois online
- **Busca**: filtra a lista por `username` (case-insensitive), em tempo real enquanto digita
- **Filtro por status**: select com "Todos / Online / Offline"
- Combinação de busca + filtro + ordenação aplicados em conjunto

## Estados da UI

- Carregando: skeleton ou spinner enquanto busca na API
- Erro: mensagem amigável se a API falhar
- Lista vazia: mensagem "nenhum streamer encontrado" quando filtros não retornam resultados

## Pontos abertos / decisões futuras

- Usar `is_live` da resposta (campo real da API) vs. checar status via Twitch API (requer client ID)
- Formato do botão "Ver na Twitch": abrir em nova aba (`target="_blank"`)
- Se algum streamer não tiver avatar, usar placeholder circular com a inicial do nome
- Atualizar status a cada X minutos (refetch) ou manual (botão refresh)
