# CLAUDE.md — Axio Site Institucional

> Leia este arquivo no início de qualquer sessão de trabalho neste projeto.

## O projeto

Site institucional da **Axio** — consultoria de receita e automação para PMEs.
Stack: Next.js 14 (App Router) + Tailwind CSS + Framer Motion.

## Regras do design system (inegociáveis)

- `border-radius: 0px` em absolutamente tudo
- Gold `#FFC000` exclusivo para CTA primário — jamais decorativo
- Headlines sempre em UPPERCASE com `font-display` (Bebas Neue)
- Corpo em `font-body` (Inter)
- Fundo: `#000000` | Superfície: `#202020` | Texto secundário: `#7D7D7D`
- Sem gradientes em superfícies — profundidade por camadas de cor

## Animações

Todas as animações são CSS puro (zero bundle extra) ou Framer Motion:

- **Hero grid** — `@keyframes gridMove` em `globals.css`, grade dourada animada
- **Hero glow** — `@keyframes glowPulse`, radial gradient pulsante
- **Hero side lines** — `@keyframes lineRise`, linhas verticais douradas
- **Logo float** — `@keyframes logoFloat`, flutuação suave do logo
- **Scroll indicator** — `@keyframes scrollBounce`
- **FadeInUp** — `animations/FadeInUp.tsx`, wrapper Framer Motion com reduced-motion
- **CharReveal** — letra a letra em `HeroSection.tsx`, Framer Motion

## Estrutura de componentes

```
src/
├── app/
│   ├── layout.tsx        ← fontes, metadata, schema Organization
│   ├── page.tsx          ← monta todas as seções em ordem
│   └── globals.css       ← tokens CSS + animações + Tailwind base
├── components/
│   ├── Navbar.tsx               ← sticky, transparente, ghost button no canto
│   ├── HeroSection.tsx          ← full-viewport, CharReveal + CSS grid animado
│   ├── StatsSection.tsx         ← contadores animados com useInView
│   ├── ManifestoSection.tsx
│   ├── ComoFuncionaSection.tsx
│   ├── ClientesSection.tsx      ← depoimentos temporários (ver seção abaixo)
│   ├── FAQSection.tsx           ← accordion + schema FAQPage
│   ├── CTAFinalSection.tsx
│   ├── Footer.tsx
│   ├── Cursor.tsx               ← cursor customizado com anel magnético (RAF)
│   ├── ScrollProgress.tsx       ← barra de progresso dourada no topo
│   ├── BackToTop.tsx            ← botão voltar ao topo, visível após 600px
│   ├── ui/
│   │   ├── Button.tsx                   ← variantes: gold, ghost
│   │   └── WhatsAppFloatingButton.tsx
│   └── animations/
│       └── FadeInUp.tsx                 ← wrapper Framer Motion, respeita reduced-motion
└── lib/
    └── utils.ts  ← cn()
```

## Logo

- Arquivo: `public/axio-logo.png` (PNG com fundo transparente)
- Usado em `HeroSection.tsx` (160×160) e `Navbar.tsx` (52×52)
- O `drop-shadow` dourado no `.hero-logo-img` projeta o brilho gold em volta do símbolo

## WhatsApp

URL hardcoded diretamente nos arquivos (não usar variável concatenada):
```
https://wa.me/5512981764882?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Axio.
```
Arquivos que contêm a URL:
- `src/components/Navbar.tsx`
- `src/components/HeroSection.tsx`
- `src/components/CTAFinalSection.tsx`
- `src/components/ui/WhatsAppFloatingButton.tsx`

## Depoimentos

Os 3 cards em `ClientesSection.tsx` são temporários.
Substituir pelos depoimentos reais quando coletados de:
- Espaço Pet Atibaia
- Secmil Engenharia de Precisão Industrial
- Equity Capital

## Para rodar localmente

```bash
npm install
npm run dev
```

## Para publicar

```bash
vercel deploy --prod
```

## UI UX Pro Max

Este projeto foi gerado com o design system do **UI UX Pro Max** (dark luxury consulting).
Ao fazer qualquer mudança de UI, descreva a necessidade naturalmente no chat — a skill auto-ativa e valida as decisões contra os princípios do design system.

## Contexto MWP

- `context/validation-plan.md` — plano aprovado antes da geração
- `context/strategy.json` — decisões estratégicas
- `context/copy.json` — todos os textos do site
- `context/design-tokens.json` — tokens de design com guidelines UI UX Pro
- `context/seo-config.json` — configurações de SEO
- `briefing/referencias/Axio-design.md` — design system Axio (dark luxury, Lamborghini-inspired)
- `briefing/referencias/Axio-logo.jpeg` — logo original (JPEG com fundo preto)
