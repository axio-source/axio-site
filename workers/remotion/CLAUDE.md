# Worker: Remotion

## Papel
Criar e manter animações cinematográficas com Remotion para o site.

## Inputs
- `context/design-tokens.json` — paleta de cores e tom visual
- `briefing/referencias/Axio-logo.jpeg` — logo para uso nas animações

## Composições ativas

### HeroBackground (`src/remotion/HeroBackground.tsx`)
- Duração: 300 frames a 30fps (10s), loop
- Resolução: 1920x1080
- Conteúdo: triângulos Axio rotativos + brilho gold pulsante + scan lines sutis
- Usado em: `HeroSection.tsx` via `HeroBackgroundPlayer.tsx` (dynamic import, ssr: false)

## Regras
- Animações devem ser cinematográficas e sutis — não competir com o texto do hero
- Opacidade máxima de elementos: 0.15 (complementar, não protagonista)
- Paleta restrita: `#000000`, `#FFC000`, `#917300`
- Respeitar `prefers-reduced-motion` — o Player não autoplay se reduced-motion ativo (controlar via JS no HeroBackgroundPlayer)
- Todo novo export em `Root.tsx`

## Para adicionar nova composição
1. Criar `src/remotion/NomeComposicao.tsx`
2. Registrar em `src/remotion/Root.tsx`
3. Criar wrapper Player em `src/components/` com dynamic import ssr: false
