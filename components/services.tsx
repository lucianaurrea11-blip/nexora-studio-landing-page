'use client'

import { motion } from 'framer-motion'
import {
  LayoutTemplate,
  Bot,
  Search,
  MapPin,
  MessageCircle,
  Rocket,
  ArrowUpRight,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'

const services = [
  {
    icon: LayoutTemplate,
    title: 'Diseño web a medida',
    desc: 'Sitios hechos desde cero, alineados con tu marca y diseñados para que cada visita se convierta en una oportunidad de negocio.',
  },
  {
    icon: Bot,
    title: 'Integraciones con IA',
    desc: 'Chatbots y automatizaciones que atienden consultas, califican prospectos y trabajan por ti las 24 horas del día.',
  },
  {
    icon: Search,
    title: 'Posicionamiento SEO',
    desc: 'SEO técnico y de contenido para que tu empresa aparezca cuando tus clientes buscan lo que ofreces en Google.',
  },
  {
    icon: MapPin,
    title: 'Perfil de Google Business',
    desc: 'Configuramos y optimizamos tu ficha en Google Maps para que te encuentren primero en búsquedas locales.',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp integrado',
    desc: 'Botones y flujos directos a WhatsApp para que te escriban al instante, sin formularios ni fricción.',
  },
  {
    icon: Rocket,
    title: 'Velocidad y rendimiento',
    desc: 'Páginas ultrarrápidas con puntajes de 95+ en Lighthouse, porque un sitio lento también pierde clientes.',
  },
]

export function Services() {
  return (
    <section id="services" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wider text-brand">
              Servicios
            </span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Todo lo que tu empresa necesita para crecer en internet.
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Un servicio integral y de alto nivel: diseño impecable, tecnología de punta
              e integraciones que transforman clics en clientes reales.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i % 3}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-[0_2px_12px_-6px_rgba(15,23,42,0.1)] transition-shadow hover:shadow-[0_28px_50px_-24px_rgba(15,23,42,0.3)]"
              >
                <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-brand transition-all duration-300 group-hover:scale-105 group-hover:bg-brand group-hover:text-brand-foreground">
                    <service.icon className="h-6 w-6" />
                  </span>
                  <ArrowUpRight className="h-5 w-5 -translate-y-1 translate-x-1 text-muted-foreground/40 opacity-0 transition-all group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-brand group-hover:opacity-100" />
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.desc}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
