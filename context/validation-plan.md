# Plano de Validação — Axio Site Institucional
> Status: aguardando aprovação final

---

## 1. Estrutura do site

| # | Seção | Motivo |
|---|-------|--------|
| 1 | **Hero** | Impacto máximo, logo Axio, H1 agressivo, CTA WhatsApp + animação Remotion |
| 2 | **Manifesto** | Posicionamento antes de falar de serviço — quebrar a objeção de esforço vs. foco |
| 3 | **Como Funciona** | Os 2 eixos (Receita + Tempo) — método concreto, dois cards paralelos |
| 4 | **Clientes** | Prova social — 3 empresas de segmentos distintos, depoimentos |
| 5 | **FAQ** | Quebrar objeções antes do CTA final |
| 6 | **CTA Final** | Última chamada — confiança absoluta, WhatsApp |
| 7 | **Footer** | Logo + dados + copyright |

---

## 2. Decisões de design

### Paleta (extraída do design system Axio)
| Papel | Cor | Hex |
|-------|-----|-----|
| Fundo dominante | Preto absoluto | `#000000` |
| Superfície elevada | Charcoal | `#202020` |
| CTA primário (exclusivo) | Axio Gold | `#FFC000` |
| Hover do gold | Dark Gold | `#917300` |
| Texto principal | Branco puro | `#FFFFFF` |
| Texto secundário | Ash | `#7D7D7D` |
| Borda ghost button | Branco 50% | `rgba(255,255,255,0.5)` |

### Tipografia
| Papel | Fonte | Motivo |
|-------|-------|--------|
| Display / headlines | **Bebas Neue** | Substituta gratuita (Google Fonts) ao LamboType — uppercase nativa, condensada, agressiva |
| Corpo / UI | **Inter** | Clean, moderna, altamente legível |

### Tom visual
**Autoritário · Preciso · Premium**

### Regras inegociáveis (do design system Axio)
- `border-radius: 0px` em botões, cards e containers
- Gold exclusivo para CTA primário — jamais decorativo
- Headlines sempre em UPPERCASE
- Sem gradientes em superfícies — profundidade por camadas de cor

---

## 3. Decisões de stack

| Decisão | Escolha | Motivo |
|---------|---------|--------|
| Framework | Next.js 14 (App Router) | SSG para performance máxima |
| Estilo | Tailwind CSS + CSS variables | Tokens do design system como variáveis |
| Animações interativas | Framer Motion | Fade in scroll, stagger em cards, transições |
| Animação cinematográfica | **Remotion** | Hero: reveal do logo Axio + H1 emergindo do preto |
| Design system | **UI UX Pro Max** | Gera design system completo por indústria antes de codificar o UI |
| CMS | Não | Site estático, sem blog |
| Formulário | Não (fase 1) | WhatsApp agora, diagnóstico no futuro |
| Integrações | WhatsApp link direto | `https://wa.me/55[número]` no CTA |
| Analytics | Google Analytics 4 | Tracking padrão |

### Como UI UX Pro Max e Remotion entram no fluxo
- **UI UX Pro Max** roda no início do worker de UI: invoca a skill com o contexto da Axio (luxury consulting, dark mode, Next.js + Tailwind), gera o design system validado com padrões de acessibilidade, e esse output guia todos os componentes
- **Remotion** é um worker separado: gera a sequência de animação do hero (logo reveal + headline) como vídeo embutido — não substitui Framer Motion, coexiste com ele para momentos cinematográficos

---

## 4. Copy aprovado

### Hero
> **H1:** "VOCÊ DEIXA DINHEIRO NA MESA TODO MÊS. A AXIO ENCONTRA ONDE."
> **Subheadline:** "A Axio mapeia onde sua empresa está perdendo receita e o que está roubando o tempo da sua equipe — e resolve os dois com método, não com achismo."
> **CTA:** "FALAR COM A AXIO" → WhatsApp

### Manifesto
> **Título:** "ESFORÇO NÃO É O PROBLEMA."
> **Corpo:** "PMEs que chegam à Axio não têm problema de dedicação. Têm problema de foco — estão trabalhando duro no lugar errado. A Axio existe para apontar o lugar certo e estruturar o caminho mais curto até lá."

### Como Funciona — Eixo Receita
> **Título:** "RECEITA"
> **Corpo:** "Identificamos exatamente onde sua empresa está deixando dinheiro na mesa — e estruturamos o processo para capturar essa receita sem depender de volume ou de sorte."

### Como Funciona — Eixo Tempo
> **Título:** "TEMPO"
> **Corpo:** "Cada hora que sua equipe gasta em tarefa repetitiva é uma hora que não foi investida em crescimento. Mapeamos, automatizamos e devolvemos esse tempo."

### CTA Final
> **Headline:** "SE VOCÊ CHEGOU ATÉ AQUI, SUA EMPRESA TEM MAIS A FATURAR."
> **Sub:** "Uma conversa com a Axio muda o que você está olhando."
> **Botão:** "FALAR COM A AXIO" → WhatsApp

### Footer
> **Tagline:** "Receita. Processo. Resultado."
> **Direitos:** "© 2026 Axio. Todos os direitos reservados."

---

## 5. Clientes — Prova Social

> ⚠️ **[TEMPORÁRIO — substituir pelos depoimentos reais]**

### Card 1 — Espaço Pet Atibaia
**Segmento:** Clínica Veterinária
> "A Axio mapeou onde estávamos perdendo receita e reestruturou nosso processo de atendimento. Conseguimos aumentar o ticket médio e eliminar os horários ociosos que drenavam a operação."
> — *Gestor, Espaço Pet Atibaia*

### Card 2 — Secmil Engenharia de Precisão Industrial
**Segmento:** Engenharia Industrial
> "O processo de orçamentação consumia horas da equipe técnica toda semana. Com a Axio, automatizamos a parte repetitiva e a equipe voltou o foco para onde gera margem de verdade."
> — *Diretor, Secmil Engenharia*

### Card 3 — Equity Capital
**Segmento:** Gestão Patrimonial
> "Precisávamos escalar sem aumentar o custo fixo. A Axio identificou o gargalo operacional e estruturou a automação certa. Crescemos em AUM sem precisar crescer no time."
> — *Sócio, Equity Capital*

---

## 6. FAQ (perguntas — worker de copy vai expandir as respostas)

1. A Axio atende qualquer segmento de empresa?
2. Como funciona o processo de trabalho com a Axio?
3. Em quanto tempo vejo resultados?
4. A Axio implementa as melhorias ou só aponta o caminho?
5. Como é feita a precificação?

---

## 7. SEO

| Item | Valor |
|------|-------|
| Keywords alvo | consultoria empresarial PME, como aumentar faturamento empresa, consultoria de processos, automação empresarial Brasil |
| Schema.org | Organization, FAQPage |
| Idioma/região | pt-BR |
| Meta title | Axio — Consultoria de Receita e Automação para PMEs |
| Meta description | A Axio identifica onde sua empresa está perdendo receita e o que pode ser automatizado hoje. Converse com a equipe. |

---

## 8. Componentes a gerar

| Componente | Tipo | Ferramenta |
|------------|------|------------|
| `Navbar` | Nav sticky transparente, logo + WhatsApp ghost button | UI worker + UI UX Pro |
| `HeroSection` | Full-viewport, animação Remotion embutida, CTA gold | Remotion worker + UI worker |
| `ManifestoSection` | Texto de posicionamento, tipografia display | UI worker |
| `ComoFuncionaSection` | 2 cards lado a lado (Receita + Tempo) | UI worker |
| `ClientesSection` | 3 cards de depoimento em charcoal | UI worker |
| `FAQSection` | Accordion com schema FAQPage | UI worker + SEO worker |
| `CTAFinalSection` | Headline + botão gold centralizado | UI worker |
| `Footer` | Logo + dados + copyright | UI worker |
| `Button` | Variantes: gold, ghost | UI worker |
| `TestimonialCard` | Card de depoimento | UI worker |
| `WhatsAppFloatingButton` | Botão flutuante (canto inferior direito) | UI worker |
| `FadeInUp` | Wrapper Framer Motion scroll reveal | Animations worker |
| `HeroAnimation` | Remotion: logo reveal + H1 emergindo do preto | Remotion worker |

**Total: 13 componentes**

---

## 9. Fluxo de execução

```
[briefing/ + referencias/]
        ↓
[Worker: strategy]     → context/strategy.json
        ↓
[Worker: copy]         → context/copy.json
        ↓
[UI UX Pro Max]        → design system validado (dark luxury consulting, Next.js)
        ↓
[PAUSA — aprovação humana] ← você está aqui
        ↓ (aprovado)
[Workers paralelos:]
   ├── [Worker: ui]         → componentes + design system + tokens
   ├── [Worker: seo]        → metadata + schema + sitemap
   ├── [Worker: animations] → Framer Motion (scroll reveal, stagger)
   └── [Worker: remotion]   → HeroAnimation (logo reveal + headline)
        ↓
[Worker: deploy]       → config Vercel + checklist
        ↓
[ENTREGA]
```

---

**Aguardando aprovação.**
Responda "aprovado" para iniciar a geração ou liste os ajustes necessários.
