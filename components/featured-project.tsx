'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight, TrendingUp, Clock, Phone } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const results = [
  { icon: TrendingUp, value: '+182%', label: 'Más solicitudes de cita' },
  { icon: Clock, value: '0.8s', label: 'Tiempo de carga promedio' },
  { icon: Phone, value: '3.4×', label: 'Más clientes por WhatsApp' },
]

export function FeaturedProject() {
  return (
    <section id="projects" className="relative scroll-mt-24 overflow-hidden bg-primary py-20 text-primary-foreground sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute -left-20 top-0 h-[400px] w-[400px] rounded-full bg-[radial-gradient(closest-side,rgba(37,99,235,0.35),transparent)] blur-2xl" />
        <div className="absolute -right-10 bottom-0 h-[380px] w-[380px] rounded-full bg-[radial-gradient(closest-side,rgba(34,197,94,0.22),transparent)] blur-2xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/80">
                Proyecto destacado · Salud
              </span>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                Clínica Sonrisa — una clínica dental de lujo, reinventada.
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-4 text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
                La clínica dependía del voz a voz y de una página anticuada que
                escondía la opción de reservar. Reconstruimos toda la experiencia
                con un único objetivo: hacer que agendar fuera muy fácil. Un diseño
                refinado, tiempos de carga instantáneos y reservas por WhatsApp con
                un solo toque convirtieron visitantes casuales en pacientes
                agendados.
              </p>
            </Reveal>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {results.map((r, i) => (
                <Reveal key={r.label} delay={i}>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                    <r.icon className="h-5 w-5 text-success" />
                    <p className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                      {r.value}
                    </p>
                    <p className="mt-1 text-xs leading-snug text-white/60">
                      {r.label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={3}>
              <a
                href="#contact"
                className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5"
              >
                Empieza tu transformación
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Reveal>
          </div>

          <Reveal delay={2}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 200, damping: 22 }}
              className="relative mx-auto w-full max-w-lg"
            >
              {/* macbook */}
              <div className="overflow-hidden rounded-t-2xl border border-white/15 bg-[#0b1220] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)]">
                <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                </div>
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src="/mockups/clinic-desktop.png"
                    alt="Vista de escritorio del sitio web rediseñado de Clínica Sonrisa"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 512px"
                  />
                </div>
              </div>
              <div className="mx-auto h-3 w-[112%] -translate-x-[5%] rounded-b-xl bg-gradient-to-b from-white/20 to-white/5" />

              {/* phone */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-8 -right-2 w-28 overflow-hidden rounded-[1.5rem] border-4 border-[#0b1220] bg-[#0b1220] shadow-2xl sm:w-36"
              >
                <div className="relative aspect-[9/19] w-full overflow-hidden rounded-[1.1rem]">
                  <Image
                    src="/mockups/clinic-mobile.png"
                    alt="Vista móvil del sitio web rediseñado de Clínica Sonrisa"
                    fill
                    className="object-cover object-top"
                    sizes="144px"
                  />
                </div>
              </motion.div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
