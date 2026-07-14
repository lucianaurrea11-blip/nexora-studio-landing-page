'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const testimonials = [
  {
    name: 'Carolina Restrepo',
    role: 'Directora · Clínica Sonrisa, Medellín',
    photo: '/testimonials/carolina.png',
    quote:
      'Por fin tenemos un sitio que refleja la calidad de nuestra clínica. Las citas casi se triplicaron en tres meses. La inversión se pagó sola.',
  },
  {
    name: 'Andrés Gómez',
    role: 'Socio director · Gómez & Asociados, Bogotá',
    photo: '/testimonials/andres.png',
    quote:
      'Nexora entendió nuestra firma desde el primer día. El sitio transmite seriedad y profesionalismo. Ahora recibimos consultas calificadas cada semana sin depender solo de referidos.',
  },
  {
    name: 'Valentina Ríos',
    role: 'Fundadora · Studio Pilates, Cali',
    photo: '/testimonials/valentina.png',
    quote:
      'Rápido, elegante y fácil de manejar. Con la integración de WhatsApp cambió por completo la forma en que captamos clientes nuevos. La mejor inversión que hicimos este año.',
  },
]

export function Testimonials() {
  return (
    <section className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wider text-brand">
              Testimonios
            </span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Lo que dicen quienes ya dieron el paso.
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i}>
              <motion.figure
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 280, damping: 24 }}
                className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-[0_2px_14px_-8px_rgba(15,23,42,0.14)] transition-shadow hover:shadow-[0_30px_56px_-28px_rgba(15,23,42,0.3)] sm:p-7"
              >
                <Quote className="h-7 w-7 text-brand/25" />
                <div className="mt-3 flex items-center gap-0.5 text-success">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-pretty text-[15px] leading-relaxed text-foreground">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <span className="relative h-11 w-11 overflow-hidden rounded-full">
                    <Image
                      src={t.photo}
                      alt={t.name}
                      fill
                      className="object-cover"
                      sizes="44px"
                    />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-foreground">
                      {t.name}
                    </span>
                    <span className="block text-xs text-muted-foreground">
                      {t.role}
                    </span>
                  </span>
                </figcaption>
              </motion.figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
