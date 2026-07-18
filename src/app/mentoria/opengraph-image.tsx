import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Mentoria IA Implantada — Axio'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const logoSrc = 'https://axio.gold/axio-logo.png'

export default function Image() {
  return new ImageResponse(
    (
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

        {/* Logo + label */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '40px' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={72} height={72} alt="Axio" />
          <div style={{ color: '#FFC000', fontSize: '22px', letterSpacing: '6px', fontWeight: 700, textTransform: 'uppercase', display: 'flex' }}>
            IA Implantada
          </div>
        </div>

        {/* Headline principal */}
        <div style={{ color: '#FFFFFF', fontSize: '62px', fontWeight: 700, lineHeight: 1.05, marginBottom: '28px', maxWidth: '980px', textTransform: 'uppercase', display: 'flex', flexWrap: 'wrap' }}>
          SUA EMPRESA RODANDO COM IA EM 4 ENCONTROS.
        </div>

        {/* Linha gold */}
        <div style={{ width: '64px', height: '4px', background: '#FFC000', marginBottom: '28px', display: 'flex' }} />

        {/* Subtítulo */}
        <div style={{ color: '#7D7D7D', fontSize: '26px', letterSpacing: '2px', display: 'flex' }}>
          Não é curso. Implantado, funcionando, seu.
        </div>

        {/* URL */}
        <div style={{ position: 'absolute', bottom: '36px', right: '80px', color: '#FFC000', fontSize: '18px', letterSpacing: '2px', display: 'flex' }}>
          axio.gold/mentoria
        </div>
      </div>
    ),
    { ...size }
  )
}
