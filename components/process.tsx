'use client'

import { motion } from 'framer-motion'
import { Compass, PenTool, Code2, Rocket } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const steps = [
  {
    n: '01',
    icon: Compass,
    title: 'Descubrimiento',
    desc: 'Conocemos tu negocio, tu mercado y tus objetivos para definir una estrategia digital con resultados medibles.',
  },
  {
    n: '02',
    icon: PenTool,
    title: 'Diseño',
    desc: 'Creamos una interfaz elegante y fiel a tu marca, pensada para generar confianza y guiar al visitante hacia la acción.',
  },
  {
    n: '03',
    icon: Code2,
    title: 'Desarrollo',
    desc: 'Construimos un sitio rápido, seguro y optimizado para SEO, con las integraciones que tu operación necesita.',
  },
  {
    n: '04',
    icon: Rocket,
    title: 'Lanzamiento',
    desc: 'Publicamos, probamos y te entregamos un sitio listo para generar resultados, con acompañamiento post-lanzamiento.',
  },
]

export function Process() {
  return (
    <section id="process" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wider text-brand">
              Proceso
            </span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              De la idea al lanzamiento, con un proceso claro.
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Cuatro etapas definidas, comunicación constante y cero sorpresas.
              Siempre sabrás en qué va tu proyecto.
            </p>
          </Reveal>
        </div>

        <div className="relative mt-16">
          {/* connecting line */}
          <div className="absolute left-0 right-0 top-7 hidden h-px lg:block">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1.1, ease: 'easeInOut' }}
              style={{ originX: 0 }}
              className="h-full w-full bg-gradient-to-r from-brand via-brand/40 to-success/50"
            />
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map((step, i) => (
              <Reveal key={step.n} delay={i}>
                <div className="relative">
                  <div className="flex items-center gap-4 lg:flex-col lg:items-start">
                    <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-border bg-card text-brand shadow-[0_8px_20px_-10px_rgba(15,23,42,0.3)]">
                      <step.icon className="h-6 w-6" />
                    </span>
                    <span className="font-mono text-sm font-medium text-muted-foreground lg:mt-6">
                      {step.n}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold tracking-tight text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
