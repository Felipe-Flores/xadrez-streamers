# Xadrez Streamers

Página única que lista os streamers de xadrez do Chess.com, mostrando quem está ao vivo, com busca, filtros e ordenação.

## Funcionalidades

- **Listagem de streamers**: consume a API pública do Chess.com (`https://api.chess.com/pub/streamers`) exibindo avatar, username e link para a Twitch
- **Status online/offline**: bolinha no canto superior direito do card (vermelha = online, preta = offline), baseada no campo `is_live` da própria API
- **Busca**: filtra por username em tempo real, case-insensitive
- **Filtro por status**: Todos / Online / Offline
- **Ordenação**: alterna entre online primeiro (padrão) e offline primeiro
- **Estados da UI**: skeleton de carregamento, mensagem de erro com "Tentar novamente" e aviso de lista vazia
- **Atualização automática**: refetch a cada 20 minutos + botão de refresh manual
- **Tema claro/escuro**: alternador (sol/lua) no header com tema dark "Dracula" (`data-theme` + CSS variables), persistido no `localStorage`
- **Fallback de avatar**: placeholder circular com a inicial do username quando não há imagem

## Stack

- React 19 + TypeScript + Vite
- Lint: `oxlint`
- Sem bibliotecas de UI externas (estilo via CSS seguindo o design system de `docs/design-home/`)
- Design: fonte Inter, cards brancos `rounded-2xl` com soft shadow, fundo `#f4f4f5`, primária roxa `#9146ff`

## Estrutura

```
src/
├── api/            # fetch tipado da API do Chess.com
├── components/     # Header, SearchBar, StatusFilter, SortControl, StreamerCard/Grid, etc.
├── hooks/          # useTheme (claro/dracula + localStorage)
├── types/          # Streamer, StreamersResponse, StatusFilterOption, SortOrder
└── utils/          # filterStreamers (busca + filtro + ordenação)
docs/
├── brain-dump.md   # anotações iniciais
├── PRD.md          # requisitos e status de implementação
└── design-home/    # design system (DESIGN.md, code.html, screen.png)
```

## Como rodar

```bash
npm install    # instalar dependências
npm run dev    # servidor de desenvolvimento
npm run build  # build de produção (tsc -b && vite build)
npm run lint   # checagem com oxlint
npm run preview # pré-visualizar o build
```

## Decisões

- Status online/offline vem de `is_live` da própria API do Chess.com (sem Twitch API/client ID)
- `twitch_url` vazio/ausente é tratado como `null` (botão "Ver na Twitch" fica desabilitado/oculto)
- Link da Twitch abre em nova aba (`target="_blank"`)
- Atualização automática dos dados a cada 20 minutos

## Documentação

- [PRD](docs/PRD.md) — requisitos e checklist de implementação
- [Design](docs/design-home/DESIGN.md) — design system de referência
