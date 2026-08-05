# PRD — Xadrez Streamers

**Fonte:** `docs/brain-dump.md` · **Design:** `docs/design-home/` (DESIGN.md + code.html)

Página única em React que lista streamers de xadrez do Chess.com com status online/offline, busca e filtros. Todas as tasks devem ser marcadas com `[x]` após implementadas e validadas.

## Visão geral

- **Stack:** React 19 + TypeScript + Vite (projeto existente na raiz)
- **API:** `https://api.chess.com/pub/streamers` (array `streamers[]`)
- **Campos usados:** `username`, `avatar`, `twitch_url`, `is_live`
- **Design system:** Inter, cards brancos `rounded-2xl` com soft shadow, fundo `#f4f4f5`, primária roxa `#9146ff`

---

## Fase 1 — Fundamentos e integração com a API

Objetivo: garantir que os dados cheguem tipados e a página tenha estrutura base.

- [x] 1.1 Tipar a resposta da API (interface `Streamer`: `username`, `avatar`, `twitch_url`, `is_live`; `StreamersResponse` com `streamers: Streamer[]`) em `src/types/`
- [x] 1.2 Criar função de fetch em `src/api/` consumindo `https://api.chess.com/pub/streamers` com `fetch`, tratando `twitch_url` vazio/ausente como `null`
- [x] 1.3 Limpar `App.tsx`/`App.css` do boilerplate padrão do Vite, mantendo o projeto compilando
- [x] 1.4 Configurar estilos base no CSS seguindo o design system (fundo `#f4f4f5`/`#fbf8ff`, fonte Inter, tokens de cor e raio do DESIGN.md)

## Fase 2 — Header e controles (busca + select)

Objetivo: montar a parte superior da página conforme o design "Creator Directory".

- [x] 2.1 Header sticky com marca à esquerda, links de navegação e ações à direita (conforme `code.html`)
- [x] 2.2 Campo de busca por usuário logo abaixo do header (input `rounded-full` em `#f4f4f5`, anel roxo no focus)
- [x] 2.3 Select de filtro de status ao lado da busca com opções: Todos / Online / Offline
- [x] 2.4 Controle de ordenação (alternar entre online primeiro e offline primeiro; online primeiro como padrão)
- [x] 2.5 Responsividade do header/controles no mobile (coluna única, `< 768px`)

## Fase 3 — Grade de cards

Objetivo: listagem de streamers com foto, nome e link para a Twitch.

- [x] 3.1 Grid responsivo (`1/2/3/4` colunas conforme `code.html`) renderizando um card por streamer
- [x] 3.2 Card com avatar circular (`rounded-full`, `w-24 h-24`), nome em `headline-md` e estilo `rounded-2xl` + soft shadow + hover lift (1.01x)
- [x] 3.3 Bolinha de status no canto superior direito do card: vermelha se online (`is_live`), preta se offline
- [x] 3.4 Botão/link "Ver na Twitch" (roxo primário, `rounded-lg`) apontando para `twitch_url`, abrindo em nova aba; desabilitado ou oculto quando `twitch_url` for null
- [x] 3.5 Fallback de avatar quando não houver imagem (placeholder circular com a inicial do `username`)

## Fase 4 — Lógica de busca, filtro e ordenação

Objetivo: interações combinadas em tempo real.

- [x] 4.1 Busca filtra por `username` em tempo real, case-insensitive
- [x] 4.2 Select filtra por status (todos/online/offline)
- [x] 4.3 Ordenação coloca online primeiro ou offline primeiro
- [x] 4.4 Busca + filtro + ordenação aplicados em conjunto (ordem de pipeline definida e testada)
- [x] 4.5 Lista vazia: mensagem "nenhum streamer encontrado" quando os filtros não retornam resultados

## Fase 5 — Estados da UI

Objetivo: feedback visual durante carregamento e erros.

- [x] 5.1 Estado de carregamento (skeleton ou spinner) enquanto a API responde
- [x] 5.2 Estado de erro: mensagem amigável se a API falhar, com opção de tentar novamente
- [x] 5.3 Refetch automático a cada 20 minutos para atualizar status online/offline (via `setInterval`/timer, limpo no unmount)
- [x] 5.4 Refetch manual (botão refresh) para atualizar status online/offline sob demanda

## Fase 6 — Qualidade e entrega

Objetivo: garantir conformidade com o design e o código limpo.

- [x] 6.1 Revisar visual contra `docs/design-home/screen.png` (cores, raios, sombras, tipografia)
- [x] 6.2 Testar responsividade (mobile, tablet, desktop) e comportamento dos controles
- [x] 6.3 Rodar `npm run lint` (oxlint) sem erros
- [x] 6.4 Rodar `npm run build` sem erros
- [x] 6.5 Testar manualmente: busca, filtro, ordenação, clique no link da Twitch e estados de erro/loading

## Fase 7 — Tema claro / escuro (Dark Dracula)

Objetivo: permitir que o usuário alterne entre o tema atual (claro) e o tema dark inspirado no Dracula, pelo ícone de settings no header.

- [x] 7.1 Criar tokens do tema dark "Dracula" em CSS espelhando os tokens atuais: fundo `#282a36`, superfícies `#21222c`/`#44475a`, texto `#f8f8f2`, texto secundário `#6272a4`, primária `#bd93f9`, erro/vermelho `#ff5555` (demais cores: `#ff79c6`, `#50fa7b`, `#8be9fd`, `#f1fa8c`, `#ffb86c`)
- [x] 7.2 Alternador de tema no header (switch com sol/lua): de um lado fica o tema claro e do outro o dark, com o tema ativo destacado
- [x] 7.3 Aplicar o tema via atributo `data-theme` na raiz do documento (`<html data-theme="dracula">`), alternando as variáveis CSS entre claro e dark
- [x] 7.4 Persistir a escolha do usuário no `localStorage` e restaurá-la no carregamento inicial (evitando flash do tema errado)
- [x] 7.5 Tema claro como padrão inicial; revisar contraste/legibilidade do dark em cards, inputs, botões, bolinhas de status e skeleton
- [x] 7.6 Testar: troca de tema, persistência (recarregar página), lint (`npm run lint`) e build (`npm run build`) sem erros

---

## Critérios de aceite (resumo)

- [ ] A página consome a API e lista `username` + `avatar` + link para `twitch_url`
- [ ] Todo card mostra bolinha de status no canto superior direito (vermelha = online, preta = offline)
- [ ] Ordenação alterna entre online primeiro e offline primeiro
- [ ] Busca por usuário e select de status funcionam combinados
- [ ] Design segue `docs/design-home/` (desvio conhecido: bolinha no canto do card por requisito do cliente)
- [ ] O alternador de tema no header (switch sol/lua) troca entre claro e dark Dracula e a escolha persiste após recarregar

## Decisões definidas

- [x] Status online/offline vem do campo `is_live` da própria API do Chess.com (sem Twitch API/client ID)
- [x] Atualização dos dados (refetch) acontece automaticamente a cada 20 minutos
