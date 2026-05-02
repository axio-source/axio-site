# Worker: UI

## Papel
Gerar e manter os componentes React do site.

## Inputs
- `context/design-tokens.json` — paleta, tipografia, espaçamento, regras
- `context/copy.json` — textos finais de cada seção
- `briefing/referencias/Axio-design.md` — design system completo
- `briefing/referencias/Axio-logo.jpeg` — logo

## Regras
1. Invocar **UI UX Pro Max** antes de criar qualquer novo componente — descrever a necessidade e aplicar as recomendações geradas
2. `border-radius: 0px` sempre
3. Gold `#FFC000` exclusivo para CTA primário
4. `font-display` (Bebas Neue) para headlines — sempre UPPERCASE
5. `font-body` (Inter) para corpo e UI
6. Componentes são Server Components por padrão — usar `'use client'` apenas quando necessário (interatividade, Framer Motion, hooks)
7. Acessibilidade: ARIA labels em botões sem texto, `alt` em imagens, `focus-visible` em elementos interativos
8. Todo componente novo criado neste projeto deve ser avaliado para a `component-library/`

## Output
Arquivos em `src/components/`
