import Image from 'next/image'

export function Footer() {
  return (
    <footer
      className="py-12 px-6 md:px-10 bg-black border-t border-surface"
      aria-label="Rodapé"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <Image
            src="/axio-logo.png"
            alt="Axio"
            width={40}
            height={40}
            className="object-contain"
          />
          <p className="font-display text-lg text-ash tracking-widest">
            RECEITA. PROCESSO. RESULTADO.
          </p>
        </div>

        <p className="font-body text-sm text-ash/60">
          © 2026 Axio. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
