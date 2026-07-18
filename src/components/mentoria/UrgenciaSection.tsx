import { FadeInUp } from '../animations/FadeInUp'
import { MentoriaCTA } from './MentoriaCTA'

export function UrgenciaSection() {
  return (
    <section
      className="py-24 md:py-28 px-6 md:px-10 bg-[#0a0a0a] border-t border-white/[0.07]"
      aria-label="Vagas"
    >
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
        <FadeInUp>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl leading-none text-white mb-8">
            SÃO <span className="text-gold">12 VAGAS</span> SIMULTÂNEAS.
            <br />E PONTO.
          </h2>
          <p className="font-body text-lg md:text-xl text-white/85 leading-relaxed max-w-3xl mb-10">
            Eu entrego isso pessoalmente, então a conta é simples: 12 vagas somando turma e
            individual. Não é contador de mentira que zera à meia-noite e volta no dia seguinte.
            Quando a agenda enche, o botão passa a agendar pra fila do mês seguinte.
          </p>
          <MentoriaCTA size="lg" aria-label="Quero minha vaga na mentoria">
            QUERO MINHA VAGA
          </MentoriaCTA>
        </FadeInUp>
      </div>
    </section>
  )
}
