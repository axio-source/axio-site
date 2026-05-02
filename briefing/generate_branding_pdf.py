"""Gera o Axio Branding Design Brief em PDF."""

from fpdf import FPDF
from fpdf.enums import XPos, YPos
import os

FONTS_DIR = os.path.join(os.path.dirname(__file__), 'fonts')
OUTPUT    = os.path.join(os.path.dirname(__file__), 'Axio-Branding-Design-Brief.pdf')
LOGO_PATH = os.path.join(os.path.dirname(__file__), '..', 'public', 'axio-logo.png')

# ── CORES ────────────────────────────────────────────────────────────────────
BLACK    = (0,   0,   0)
SURFACE  = (20,  20,  20)
SURFACE2 = (32,  32,  32)
GOLD     = (255, 192,  0)
GOLD_DK  = (145, 115,  0)
GOLD_LT  = (255, 216,  77)
WHITE    = (255, 255, 255)
ASH      = (125, 125, 125)
OFF_WHT  = (230, 230, 230)


class AxioPDF(FPDF):
    def __init__(self):
        super().__init__('P', 'mm', 'A4')
        self.set_auto_page_break(False)
        self.add_font('Bebas', '', os.path.join(FONTS_DIR, 'BebasNeue-Regular.ttf'))
        self._page_num = 0

    # ── helpers ──────────────────────────────────────────────────────────────

    def fill_bg(self, r, g, b):
        self.set_fill_color(r, g, b)
        self.rect(0, 0, 210, 297, 'F')

    def hline(self, x, y, w, r, g, b, h=0.4):
        self.set_fill_color(r, g, b)
        self.rect(x, y, w, h, 'F')

    def color_swatch(self, x, y, w, h, color, label, hex_val, rgb_val):
        r, g, b = color
        self.set_fill_color(r, g, b)
        self.rect(x, y, w, h, 'F')
        # thin gold border
        self.set_draw_color(*GOLD)
        self.set_line_width(0.3)
        self.rect(x, y, w, h)
        # label below
        self.set_xy(x, y + h + 2)
        self.set_font('Bebas', '', 11)
        self.set_text_color(*WHITE)
        self.cell(w, 5, label, align='C')
        self.set_xy(x, y + h + 8)
        self.set_font('Helvetica', 'B', 7)
        self.set_text_color(*GOLD)
        self.cell(w, 4, hex_val, align='C')
        self.set_xy(x, y + h + 13)
        self.set_font('Helvetica', '', 7)
        self.set_text_color(*ASH)
        self.cell(w, 4, rgb_val, align='C')

    def section_label(self, x, y, text):
        """Small gold label with left line - mirrors site .section-label."""
        self.set_fill_color(*GOLD)
        self.rect(x, y + 1.5, 10, 0.5, 'F')
        self.set_font('Helvetica', 'B', 7)
        self.set_text_color(*GOLD)
        self.set_xy(x + 13, y)
        self.cell(80, 4, text.upper(), new_x=XPos.LMARGIN, new_y=YPos.NEXT)

    def page_footer(self, label=''):
        self._page_num += 1
        self.hline(15, 285, 180, *GOLD_DK)
        self.set_font('Helvetica', '', 7)
        self.set_text_color(*ASH)
        self.set_xy(15, 287)
        self.cell(90, 4, 'AXIO - Branding Design Brief')
        self.set_xy(105, 287)
        self.cell(90, 4, f'{label}  |  {self._page_num}', align='R')

    # ── PAGES ─────────────────────────────────────────────────────────────────

    def cover(self):
        self.add_page()
        self.fill_bg(*BLACK)

        # gold gradient bar top
        self.set_fill_color(*GOLD_DK)
        self.rect(0, 0, 210, 2, 'F')
        self.set_fill_color(*GOLD)
        self.rect(0, 0, 80, 2, 'F')

        # logo
        if os.path.exists(LOGO_PATH):
            self.image(LOGO_PATH, x=75, y=40, w=60)

        # main title
        self.set_font('Bebas', '', 52)
        self.set_text_color(*WHITE)
        self.set_xy(0, 115)
        self.cell(210, 18, 'AXIO', align='C')

        self.set_font('Bebas', '', 22)
        self.set_text_color(*GOLD)
        self.set_xy(0, 133)
        self.cell(210, 10, 'BRANDING DESIGN BRIEF', align='C')

        # divider
        self.hline(60, 150, 90, *GOLD, h=0.5)

        # subtitle
        self.set_font('Helvetica', '', 9)
        self.set_text_color(*ASH)
        self.set_xy(0, 155)
        self.cell(210, 6, 'Guia de identidade visual para manutenção de padrões', align='C')
        self.set_xy(0, 161)
        self.cell(210, 6, 'em todos os canais e ferramentas', align='C')

        # pillars
        pillars = ['RECEITA', 'TEMPO', 'MÉTODO']
        px = 35
        for p in pillars:
            self.set_fill_color(*SURFACE2)
            self.rect(px, 195, 45, 18, 'F')
            self.hline(px, 195, 45, *GOLD, h=1.5)
            self.set_font('Bebas', '', 13)
            self.set_text_color(*GOLD)
            self.set_xy(px, 199)
            self.cell(45, 6, p, align='C')
            px += 55

        # version + date
        self.set_font('Helvetica', '', 7)
        self.set_text_color(*ASH)
        self.set_xy(0, 280)
        self.cell(210, 5, 'v1.0  -  2026', align='C')

    def brand_identity(self):
        self.add_page()
        self.fill_bg(*BLACK)

        self.section_label(15, 18, 'Identidade da Marca')
        self.set_font('Bebas', '', 38)
        self.set_text_color(*WHITE)
        self.set_xy(15, 24)
        self.cell(180, 14, 'QUEM É A AXIO', new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        self.hline(15, 40, 60, *GOLD)

        # mission block
        self.set_fill_color(*SURFACE)
        self.rect(15, 46, 180, 38, 'F')
        self.hline(15, 46, 4, *GOLD, h=38)
        self.set_font('Bebas', '', 11)
        self.set_text_color(*GOLD)
        self.set_xy(23, 50)
        self.cell(160, 6, 'MISSÃO')
        self.set_font('Helvetica', '', 9)
        self.set_text_color(*OFF_WHT)
        self.set_xy(23, 57)
        self.multi_cell(170, 5.5,
            'Mapear onde a empresa perde receita e o que rouba o tempo da equipe - '
            'e resolver os dois com método, não com achismo.')

        # positioning block
        self.set_fill_color(*SURFACE)
        self.rect(15, 92, 180, 38, 'F')
        self.hline(15, 92, 4, *GOLD, h=38)
        self.set_font('Bebas', '', 11)
        self.set_text_color(*GOLD)
        self.set_xy(23, 96)
        self.cell(160, 6, 'POSICIONAMENTO')
        self.set_font('Helvetica', '', 9)
        self.set_text_color(*OFF_WHT)
        self.set_xy(23, 103)
        self.multi_cell(170, 5.5,
            'Consultoria de receita e automação para PMEs com ambição de crescer. '
            'Dark luxury. Direta. Sem relatório vazio, sem achismo.')

        # personality tags
        self.set_font('Bebas', '', 13)
        self.set_text_color(*WHITE)
        self.set_xy(15, 140)
        self.cell(100, 7, 'PERSONALIDADE DA MARCA')

        tags = [
            ('DIRETA',       'Fala o que precisa ser dito, sem rodeios.'),
            ('SOFISTICADA',  'Dark luxury: autoridade sem arrogância.'),
            ('METÓDICA',     'Tudo tem processo, diagnóstico e execução.'),
            ('AMBICIOSA',    'Orientada a resultado mensurável, não a esforço.'),
        ]
        ty = 152
        for tag, desc in tags:
            self.set_fill_color(*SURFACE2)
            self.rect(15, ty, 180, 16, 'F')
            self.hline(15, ty, 3, *GOLD, h=16)
            self.set_font('Bebas', '', 11)
            self.set_text_color(*GOLD)
            self.set_xy(22, ty + 2)
            self.cell(40, 6, tag)
            self.set_font('Helvetica', '', 8)
            self.set_text_color(*ASH)
            self.set_xy(65, ty + 4)
            self.cell(125, 5, desc)
            ty += 20

        self.page_footer('Identidade')

    def color_palette(self):
        self.add_page()
        self.fill_bg(*BLACK)

        self.section_label(15, 18, 'Sistema de Cores')
        self.set_font('Bebas', '', 38)
        self.set_text_color(*WHITE)
        self.set_xy(15, 24)
        self.cell(180, 14, 'PALETA DE CORES', new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        self.hline(15, 40, 60, *GOLD)

        # primary swatches row 1
        swatches_r1 = [
            (BLACK,   'BLACK',    '#000000', 'RGB 0, 0, 0'),
            (SURFACE, 'SURFACE',  '#202020', 'RGB 32, 32, 32'),
            (WHITE,   'WHITE',    '#FFFFFF', 'RGB 255, 255, 255'),
            (ASH,     'ASH',      '#7D7D7D', 'RGB 125, 125, 125'),
        ]
        x = 15
        for color, label, hex_val, rgb_val in swatches_r1:
            self.color_swatch(x, 47, 40, 28, color, label, hex_val, rgb_val)
            x += 45

        # gold swatches row 2
        swatches_r2 = [
            (GOLD_DK, 'GOLD DARK',  '#917300', 'RGB 145, 115, 0'),
            (GOLD,    'GOLD',       '#FFC000', 'RGB 255, 192, 0'),
            (GOLD_LT, 'GOLD LIGHT', '#FFD84D', 'RGB 255, 216, 77'),
        ]
        x = 15
        for color, label, hex_val, rgb_val in swatches_r2:
            self.color_swatch(x, 100, 55, 28, color, label, hex_val, rgb_val)
            x += 60

        # gradient bar gold
        self.set_xy(15, 144)
        self.set_font('Helvetica', 'B', 7)
        self.set_text_color(*GOLD)
        self.cell(180, 4, 'GRADIENTE GOLD (uso em scroll progress e CTAs)')
        steps = 30
        for i in range(steps):
            t = i / (steps - 1)
            r = int(GOLD_DK[0] + (GOLD_LT[0] - GOLD_DK[0]) * t)
            g = int(GOLD_DK[1] + (GOLD_LT[1] - GOLD_DK[1]) * t)
            b = int(GOLD_DK[2] + (GOLD_LT[2] - GOLD_DK[2]) * t)
            self.set_fill_color(r, g, b)
            self.rect(15 + i * 6, 150, 6, 10, 'F')

        # usage rules
        self.set_font('Bebas', '', 13)
        self.set_text_color(*WHITE)
        self.set_xy(15, 168)
        self.cell(180, 7, 'REGRAS DE USO DE CORES')

        rules = [
            (GOLD,  'GOLD #FFC000',    'CTAs primários, destaques de headline, ícones de ação. NUNCA decorativo.'),
            (WHITE, 'WHITE #FFFFFF',   'Texto principal, headlines em fundo preto.'),
            (ASH,   'ASH #7D7D7D',     'Texto secundário, legendas, metadados.'),
            (SURFACE,'SURFACE #202020','Backgrounds de cards e seções de conteúdo.'),
            (BLACK, 'BLACK #000000',   'Background principal do site e documentos.'),
        ]
        ry = 178
        for color, label, rule in rules:
            self.set_fill_color(*color)
            self.rect(15, ry, 6, 6, 'F')
            self.set_font('Helvetica', 'B', 8)
            self.set_text_color(*WHITE)
            self.set_xy(24, ry)
            self.cell(45, 6, label)
            self.set_font('Helvetica', '', 8)
            self.set_text_color(*ASH)
            self.set_xy(72, ry)
            self.cell(120, 6, rule)
            ry += 12

        self.page_footer('Cores')

    def typography(self):
        self.add_page()
        self.fill_bg(*BLACK)

        self.section_label(15, 18, 'Tipografia')
        self.set_font('Bebas', '', 38)
        self.set_text_color(*WHITE)
        self.set_xy(15, 24)
        self.cell(180, 14, 'SISTEMA TIPOGRÁFICO', new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        self.hline(15, 40, 60, *GOLD)

        # Bebas Neue block
        self.set_fill_color(*SURFACE)
        self.rect(15, 46, 180, 80, 'F')
        self.hline(15, 46, 180, *GOLD, h=1.5)

        self.set_font('Bebas', '', 9)
        self.set_text_color(*GOLD)
        self.set_xy(20, 52)
        self.cell(80, 5, 'FONTE DISPLAY - BEBAS NEUE')

        self.set_font('Bebas', '', 42)
        self.set_text_color(*WHITE)
        self.set_xy(20, 58)
        self.cell(170, 16, 'AXIO CONSULTORIA')

        self.set_font('Bebas', '', 22)
        self.set_text_color(*GOLD)
        self.set_xy(20, 76)
        self.cell(170, 10, 'RECEITA . TEMPO . MÉTODO')

        self.set_font('Bebas', '', 14)
        self.set_text_color(*ASH)
        self.set_xy(20, 88)
        self.cell(170, 7, 'COMO FUNCIONA  -  QUEM CONFIA NA AXIO  -  FAQ')

        # specs
        self.set_font('Helvetica', '', 7.5)
        self.set_text_color(*ASH)
        self.set_xy(20, 100)
        specs_bb = [
            'Uso: headlines, títulos de seção, labels, CTAs, números grandes.',
            'Case: sempre UPPERCASE.',
            'Letter-spacing: 0 a 5px dependendo do tamanho.',
            'Download: fonts.google.com/specimen/Bebas+Neue',
        ]
        for s in specs_bb:
            self.cell(170, 4.5, s, new_x=XPos.LMARGIN, new_y=YPos.NEXT)

        # Inter block
        self.set_fill_color(*SURFACE)
        self.rect(15, 135, 180, 80, 'F')
        self.hline(15, 135, 180, *GOLD, h=1.5)

        self.set_font('Bebas', '', 9)
        self.set_text_color(*GOLD)
        self.set_xy(20, 141)
        self.cell(80, 5, 'FONTE BODY - INTER')

        self.set_font('Helvetica', 'B', 16)
        self.set_text_color(*WHITE)
        self.set_xy(20, 148)
        self.cell(170, 8, 'Consultoria de receita e automação')

        self.set_font('Helvetica', '', 10)
        self.set_text_color(*OFF_WHT)
        self.set_xy(20, 158)
        self.multi_cell(170, 5.5,
            'A Axio mapeia onde sua empresa perde receita e o que rouba '
            'o tempo da equipe. Resolve os dois com método.')

        self.set_font('Helvetica', '', 8)
        self.set_text_color(*ASH)
        self.set_xy(20, 178)
        self.cell(170, 5, 'Prova social  .  Perguntas frequentes  .  Como funciona')

        self.set_font('Helvetica', '', 7.5)
        self.set_text_color(*ASH)
        self.set_xy(20, 188)
        specs_inter = [
            'Uso: body text, descrições, legendas, labels secundários.',
            'Pesos utilizados: 400 (Regular) e 600 (SemiBold).',
            'Letter-spacing: 0.5-3.5px para labels em uppercase.',
            'Download: fonts.google.com/specimen/Inter',
        ]
        for s in specs_inter:
            self.cell(170, 4.5, s, new_x=XPos.LMARGIN, new_y=YPos.NEXT)

        # hierarchy table
        self.set_font('Bebas', '', 13)
        self.set_text_color(*WHITE)
        self.set_xy(15, 225)
        self.cell(180, 7, 'HIERARQUIA TIPOGRÁFICA')

        hier = [
            ('H1 - Hero',         'Bebas Neue', '80-100px', 'UPPERCASE', '#FFFFFF / #FFC000'),
            ('H2 - Seção',        'Bebas Neue', '56-72px',  'UPPERCASE', '#FFFFFF'),
            ('H3 - Card',         'Bebas Neue', '40-48px',  'UPPERCASE', '#FFC000'),
            ('Body - Principal',  'Inter 400',  '16-18px',  'Normal',    '#7D7D7D'),
            ('Label - Seção',     'Inter 600',  '11px',     'UPPERCASE', '#FFC000'),
            ('Caption',           'Inter 400',  '11-12px',  'Normal',    '#7D7D7D'),
        ]
        self.set_fill_color(*SURFACE2)
        self.rect(15, 233, 180, 7, 'F')
        cols = ['ELEMENTO', 'FONTE', 'TAMANHO', 'CASE', 'COR']
        cws  = [40, 32, 28, 22, 58]
        self.set_font('Helvetica', 'B', 7)
        self.set_text_color(*GOLD)
        cx = 18
        for col, cw in zip(cols, cws):
            self.set_xy(cx, 235)
            self.cell(cw, 5, col)
            cx += cw

        hy = 242
        for row in hier:
            self.set_fill_color(*(SURFACE if hier.index(row) % 2 == 0 else BLACK))
            self.rect(15, hy, 180, 7, 'F')
            self.set_font('Helvetica', '', 7)
            self.set_text_color(*OFF_WHT)
            cx = 18
            for val, cw in zip(row, cws):
                self.set_xy(cx, hy + 1)
                self.cell(cw, 5, val)
                cx += cw
            hy += 7

        self.page_footer('Tipografia')

    def design_principles(self):
        self.add_page()
        self.fill_bg(*BLACK)

        self.section_label(15, 18, 'Princípios de Design')
        self.set_font('Bebas', '', 38)
        self.set_text_color(*WHITE)
        self.set_xy(15, 24)
        self.cell(180, 14, 'PRINCÍPIOS INEGOCIÁVEIS', new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        self.hline(15, 40, 60, *GOLD)

        principles = [
            ('01', 'ZERO BORDER-RADIUS',
             'Todos os elementos são retangulares. Nenhum arredondamento de bordas '
             'em cards, botões, inputs ou imagens. Isso comunica precisão e autoridade.'),
            ('02', 'GOLD É CTA, NÃO DECORAÇÃO',
             'A cor #FFC000 é reservada para elementos de ação primária (botões, CTAs) '
             'e destaques de headline. Nunca usar gold em fundos, bordas decorativas ou '
             'ilustrações sem propósito funcional.'),
            ('03', 'UPPERCASE NAS HEADLINES',
             'Todas as headlines em Bebas Neue devem estar em UPPERCASE. '
             'O lowercase só é permitido em body text (Inter) e legendas.'),
            ('04', 'FUNDO SEMPRE PRETO OU SURFACE',
             'Background principal: #000000. Backgrounds de cards e seções '
             'alternadas: #202020. Nunca usar branco como fundo. '
             'Profundidade é criada por camadas de preto, não por gradientes.'),
            ('05', 'SEM GRADIENTES EM SUPERFÍCIES',
             'Gradientes são permitidos apenas em elementos funcionais como '
             'a barra de scroll progress (#917300 -> #FFC000 -> #FFD84D) '
             'ou glows de fundo. Nunca usar gradiente como fill de card ou botão.'),
            ('06', 'ESPAÇO COMO ELEMENTO ATIVO',
             'O espaço em branco (branco = preto aqui) é parte do design. '
             'Padding generoso, seções com 128px+ de separação vertical. '
             'Não comprimir o layout para encaixar mais conteúdo.'),
        ]

        py = 46
        for num, title, body in principles:
            self.set_fill_color(*SURFACE)
            self.rect(15, py, 180, 34, 'F')
            self.hline(15, py, 3, *GOLD, h=34)

            self.set_font('Bebas', '', 22)
            self.set_text_color(*GOLD)
            self.set_xy(22, py + 3)
            self.cell(20, 8, num)

            self.set_font('Bebas', '', 14)
            self.set_text_color(*WHITE)
            self.set_xy(40, py + 4)
            self.cell(150, 7, title)

            self.set_font('Helvetica', '', 8)
            self.set_text_color(*ASH)
            self.set_xy(22, py + 14)
            self.multi_cell(168, 4.8, body)

            py += 38

        self.page_footer('Princípios')

    def usage_guidelines(self):
        self.add_page()
        self.fill_bg(*BLACK)

        self.section_label(15, 18, 'Aplicação Prática')
        self.set_font('Bebas', '', 38)
        self.set_text_color(*WHITE)
        self.set_xy(15, 24)
        self.cell(180, 14, 'DOS & DON\'TS', new_x=XPos.LMARGIN, new_y=YPos.NEXT)
        self.hline(15, 40, 60, *GOLD)

        dos = [
            'Usar Bebas Neue em UPPERCASE para todos os títulos.',
            'Usar Inter (400/600) para corpo de texto e legendas.',
            'Fundo preto #000000 ou surface #202020 como base.',
            'Gold #FFC000 exclusivo para botões primários e destaques.',
            'Border-radius zero em todos os elementos.',
            'Hierarquia clara: H1 branco + H2 branco + H3 gold.',
            'Espaçamento generoso entre seções (min. 64px).',
            'Ícones e SVGs monocromáticos em gold ou white.',
        ]

        donts = [
            'Nunca usar gold como cor de fundo ou decoração.',
            'Nunca arredondar bordas de botões, cards ou imagens.',
            'Nunca usar fontes diferentes de Bebas Neue + Inter.',
            'Nunca colocar texto claro sobre surface claro.',
            'Nunca usar gradientes em cards ou botões.',
            'Nunca misturar mais de 2 cores de texto por seção.',
            'Nunca usar lowercase em headlines de seção.',
            'Nunca usar fundo branco ou cinza claro.',
        ]

        # DO column
        self.set_fill_color(0, 40, 0)
        self.rect(15, 46, 85, 8, 'F')
        self.set_font('Bebas', '', 14)
        self.set_text_color(100, 220, 100)
        self.set_xy(15, 47)
        self.cell(85, 7, '  DO - FAÇA', align='L')

        dy = 57
        for item in dos:
            self.set_fill_color(*SURFACE)
            self.rect(15, dy, 85, 13, 'F')
            self.set_fill_color(80, 200, 80)
            self.rect(15, dy, 2, 13, 'F')
            self.set_font('Helvetica', '', 7.5)
            self.set_text_color(*OFF_WHT)
            self.set_xy(20, dy + 3)
            self.multi_cell(77, 4, item)
            dy += 16

        # DON'T column
        self.set_fill_color(50, 0, 0)
        self.rect(110, 46, 85, 8, 'F')
        self.set_font('Bebas', '', 14)
        self.set_text_color(220, 80, 80)
        self.set_xy(110, 47)
        self.cell(85, 7, "  DON'T - EVITE", align='L')

        ny = 57
        for item in donts:
            self.set_fill_color(*SURFACE)
            self.rect(110, ny, 85, 13, 'F')
            self.set_fill_color(200, 60, 60)
            self.rect(110, ny, 2, 13, 'F')
            self.set_font('Helvetica', '', 7.5)
            self.set_text_color(*OFF_WHT)
            self.set_xy(115, ny + 3)
            self.multi_cell(77, 4, item)
            ny += 16

        # tools section
        self.set_font('Bebas', '', 13)
        self.set_text_color(*WHITE)
        self.set_xy(15, 224)
        self.cell(180, 7, 'CONFIGURAÇÃO POR FERRAMENTA')

        tools = [
            ('Figma',      'Bebas Neue via Google Fonts plugin. Surface: #202020. Grid 8pt.'),
            ('Canva',      'Upload Bebas Neue TTF em "Sua marca". Inter disponível no catálogo.'),
            ('PowerPoint', 'Embed Bebas Neue. Fundo preto. Slides 16:9 sem template de cor.'),
            ('Notion',     'Callout gold (#FFC000). Títulos em bold + uppercase manual.'),
            ('LinkedIn',   'Bannner #000 + logo centralizado. Títulos Bebas em imagens.'),
            ('Email',      'Fundo #000 ou #202020. CTA button gold. Arial como fallback.'),
        ]
        ty = 233
        for tool, tip in tools:
            self.set_fill_color(*SURFACE2)
            self.rect(15, ty, 180, 10, 'F')
            self.hline(15, ty, 3, *GOLD, h=10)
            self.set_font('Helvetica', 'B', 8)
            self.set_text_color(*GOLD)
            self.set_xy(22, ty + 2)
            self.cell(30, 5, tool)
            self.set_font('Helvetica', '', 8)
            self.set_text_color(*ASH)
            self.set_xy(55, ty + 2)
            self.cell(138, 5, tip)
            ty += 12

        self.page_footer('Aplicação')

    def back_cover(self):
        self.add_page()
        self.fill_bg(*BLACK)
        self.set_fill_color(*GOLD)
        self.rect(0, 295, 210, 2, 'F')
        self.set_fill_color(*GOLD_DK)
        self.rect(0, 295, 210, 2, 'F')
        self.set_fill_color(*GOLD)
        self.rect(130, 295, 80, 2, 'F')

        if os.path.exists(LOGO_PATH):
            self.image(LOGO_PATH, x=80, y=95, w=50)

        self.set_font('Bebas', '', 32)
        self.set_text_color(*WHITE)
        self.set_xy(0, 158)
        self.cell(210, 12, 'CONSULTORIA DE RECEITA', align='C')
        self.set_font('Bebas', '', 32)
        self.set_text_color(*GOLD)
        self.set_xy(0, 170)
        self.cell(210, 12, 'E AUTOMAÇÃO', align='C')

        self.hline(70, 188, 70, *GOLD)

        self.set_font('Helvetica', '', 8)
        self.set_text_color(*ASH)
        self.set_xy(0, 194)
        self.cell(210, 5, 'axio.com.br', align='C')
        self.set_xy(0, 200)
        self.cell(210, 5, 'contato via WhatsApp: +55 12 98176-4882', align='C')


def main():
    pdf = AxioPDF()
    pdf.set_title('Axio Branding Design Brief')
    pdf.set_author('Axio Consultoria')
    pdf.set_subject('Identidade Visual e Padrões de Marca')

    pdf.cover()
    pdf.brand_identity()
    pdf.color_palette()
    pdf.typography()
    pdf.design_principles()
    pdf.usage_guidelines()
    pdf.back_cover()

    pdf.output(OUTPUT)
    print(f'PDF gerado: {OUTPUT}')


if __name__ == '__main__':
    main()
