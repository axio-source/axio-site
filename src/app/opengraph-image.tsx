import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Axio — Consultoria de Receita e Automação'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: '#000000',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '80px',
        fontFamily: 'sans-serif',
        position: 'relative',
      }}
    >
      {/* Borda gold topo */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: '#FFC000', display: 'flex' }} />

      {/* Borda gold rodapé */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '4px', background: '#FFC000', display: 'flex' }} />

      {/* Label AXIO */}
      <div style={{ color: '#FFC000', fontSize: '20px', letterSpacing: '10px', marginBottom: '40px', fontWeight: 700, display: 'flex' }}>
        AXIO
      </div>

      {/* Headline principal */}
      <div style={{ color: '#FFFFFF', fontSize: '68px', fontWeight: 700, lineHeight: 1.05, marginBottom: '28px', maxWidth: '960px', textTransform: 'uppercase', display: 'flex', flexWrap: 'wrap' }}>
        VOCÊ DEIXA DINHEIRO NA MESA TODO MÊS.
      </div>

      {/* Linha gold */}
      <div style={{ width: '64px', height: '4px', background: '#FFC000', marginBottom: '28px', display: 'flex' }} />

      {/* Subtítulo */}
      <div style={{ color: '#7D7D7D', fontSize: '26px', letterSpacing: '3px', textTransform: 'uppercase', display: 'flex' }}>
        Consultoria de Receita e Automação
      </div>

      {/* URL */}
      <div style={{ position: 'absolute', bottom: '36px', right: '80px', color: '#FFC000', fontSize: '18px', letterSpacing: '2px', display: 'flex' }}>
        axio.gold
      </div>
    </div>,
    { ...size }
  )
}
