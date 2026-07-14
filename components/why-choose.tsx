'use client'

import { motion } from 'framer-motion'
import { Check, X, ShieldCheck, Users, LineChart, Crown } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const benefits = [
  {
    icon: ShieldCheck,
    title: 'Más credibilidad',
    desc: 'Un sitio profesional genera confianza al instante. Tus clientes te perciben como la opción seria antes de contactarte.',
  },
  {
    icon: Users,
    title: 'Más consultas y ventas',
    desc: 'Llamados a la acción claros, formularios simples y WhatsApp a un clic: convertimos tráfico en conversaciones que cierran negocios.',
  },
  {
    icon: LineChart,
    title: 'Mejor posición en Google',
    desc: 'SEO y velocidad integrados desde el día uno para que tu empresa sea visible cuando tus clientes te buscan.',
  },
  {
    icon: Crown,
    title: 'Imagen premium',
    desc: 'Destácate frente a la competencia con una presencia digital que refleja la calidad de lo que ofreces.',
  },
]

const comparison = [
  { label: 'Diseño orientado a conversión', nexora: true, others: false },
  { label: 'Carga en menos de 1 segundo', nexora: true, others: false },
  { label: 'SEO incluido desde el inicio', nexora: true, others: false },
  { label: 'WhatsApp e IA integrados', nexora: true, others: false },
  { label: 'Plantillas genéricas y repetidas', nexora: false, others: true },
  { label: 'Sitios lentos que espantan visitas', nexora: false, others: true },
]

export function WhyChoose() {
  return (
    <section className="relative scroll-mt-24 bg-secondary/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-wider text-brand">
                Por qué Nexora
              </span>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                No vendemos páginas web. Vendemos resultados para tu negocio.
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                Cada decisión de diseño, cada línea de código y cada integración
                tiene un solo propósito: hacer crecer tu empresa.
              </p>
            </Reveal>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {benefits.map((benefit, i) => (
                <Reveal key={benefit.title} delay={i}>
                  <div className="group h-full rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:shadow-[0_24px_44px_-24px_rgba(15,23,42,0.28)]">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-success/12 text-success">
                      <benefit.icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 text-base font-semibold text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {benefit.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={2}>
            <motion.div
              whileHover={{ y: -4 }}
              className="sticky top-28 overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-[0_30px_60px_-30px_rgba(15,23,42,0.3)] sm:p-8"
            >
              <div className="grid grid-cols-[1fr_auto_auto] items-center gap-4 border-b border-border pb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <span>Comparativa</span>
                <span className="w-16 text-center text-primary">Nexora</span>
                <span className="w-16 text-center">Otros</span>
              </div>
              <ul className="divide-y divide-border">
                {comparison.map((row) => (
                  <li
                    key={row.label}
                    className="grid grid-cols-[1fr_auto_auto] items-center gap-4 py-4"
                  >
                    <span className="text-sm font-medium text-foreground">
                      {row.label}
                    </span>
                    <span className="flex w-16 justify-center">
                      {row.nexora ? (
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-success/15 text-success">
                          <Check className="h-4 w-4" strokeWidth={3} />
                        </span>
                      ) : (
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-secondary text-muted-foreground/50">
                          <X className="h-4 w-4" />
                        </span>
                      )}
                    </span>
                    <span className="flex w-16 justify-center">
                      {row.others ? (
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-secondary text-muted-foreground">
                          <Check className="h-4 w-4" strokeWidth={3} />
                        </span>
                      ) : (
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-secondary text-muted-foreground/50">
                          <X className="h-4 w-4" />
                        </span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
