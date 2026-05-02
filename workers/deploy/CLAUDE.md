# Worker: Deploy

## Papel
Preparar e verificar o site para publicação na Vercel.

## Checklist pré-deploy

### Obrigatório antes de publicar
- [ ] Substituir `XXXXXXXXXXX` pelo número WhatsApp real em todos os 4 arquivos
- [ ] Copiar `briefing/referencias/Axio-logo.jpeg` para `public/axio-logo.jpg`
- [ ] Atualizar domínio em `context/seo-config.json` (campo `url`)
- [ ] Atualizar URL do sitemap em `public/robots.txt`
- [ ] Verificar se depoimentos ainda são temporários — avisar Rodrigo
- [ ] Rodar `npm run build` sem erros
- [ ] Rodar `npm run lint` sem erros

### Recomendado
- [ ] Testar no mobile (375px, 430px)
- [ ] Testar no desktop (1280px, 1920px)
- [ ] Verificar se Remotion Player roda no Firefox e Safari
- [ ] Validar schema Organization e FAQPage em schema.org/SchemaApp
- [ ] Verificar contraste (21:1 branco/preto, 5.9:1 ash/preto) — WCAG AA ✓

## Deploy

```bash
npm install
npm run build
vercel deploy --prod
```

## Pós-deploy
- [ ] Verificar Google Search Console (submit sitemap)
- [ ] Testar link WhatsApp em produção
- [ ] Confirmar que Remotion Player carrega corretamente em produção
