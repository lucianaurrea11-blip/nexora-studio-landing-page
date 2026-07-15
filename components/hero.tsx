'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Play, Star, TrendingUp, Zap } from 'lucide-react'

const ease = [0.21, 0.47, 0.32, 0.98] as const

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 sm:pt-40 lg:pb-24">
      {/* background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid bg-grid-fade" />
        <div className="absolute left-1/2 top-0 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(37,99,235,0.16),transparent)] blur-2xl" />
        <div className="absolute right-[-10%] top-40 h-[360px] w-[360px] rounded-full bg-[radial-gradient(closest-side,rgba(34,197,94,0.14),transparent)] blur-2xl" />
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        {/* copy */}
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3.5 py-1.5 text-xs font-medium text-muted-foreground"
          >
            <span className="flex h-1.5 w-1.5 rounded-full bg-success" />
            Diseño web premium · Hecho en Colombia
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease }}
            className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Tu negocio merece un sitio que{' '}
            <span className="text-gradient">convierta visitas en ventas.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease }}
            className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0"
          >
            Diseñamos sitios web rápidos y elegantes para pymes colombianas que quieren
            proyectar confianza, posicionarse en Google y recibir más consultas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease }}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:items-start lg:justify-start"
          >
            <a
             href="https://tally.so/r/LZNOXJ"
             target="_blank"
             rel="noopener noreferrer"  
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_12px_30px_-10px_rgba(15,23,42,0.55)] transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-10px_rgba(15,23,42,0.6)] sm:w-auto"
            >
              Asesoría gratuita
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#projects"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:bg-secondary sm:w-auto"
            >
              <Play className="h-4 w-4 text-brand" />
              Conoce nuestro trabajo
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.28, ease }}
            className="mt-8 flex items-center justify-center gap-3 lg:justify-start"
          >
            <div className="flex -space-x-2">
              {['carolina', 'andres', 'valentina'].map((n) => (
                <span
                  key={n}
                  className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-background"
                >
                  <Image
                    src={`/testimonials/${n}.png`}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="32px"
                  />
                </span>
              ))}
            </div>
            <div className="text-left">
              <div className="flex items-center gap-0.5 text-success">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <p className="text-xs text-muted-foreground">Más de 40 pymes en Colombia</p>
            </div>
          </motion.div>
        </div>

        {/* mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotateX: 8 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease }}
          style={{ perspective: 1200 }}
          className="relative mx-auto w-full max-w-xl"
        >
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0_40px_80px_-30px_rgba(15,23,42,0.45)]">
            <div className="flex items-center gap-1.5 border-b border-border bg-secondary/70 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 hidden truncate rounded-md bg-background px-3 py-1 text-xs text-muted-foreground sm:block">
                clinicasonrisa.co
              </span>
            </div>
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/mockups/hero-site.png"
                alt="Vista previa de un sitio web premium creado por Nexora Studio"
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 560px"
              />
            </div>
          </div>

          {/* floating cards */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -left-4 top-16 hidden rounded-xl border border-border bg-card/95 p-3 shadow-xl backdrop-blur sm:flex sm:items-center sm:gap-2.5"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-success/12 text-success">
              <TrendingUp className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-foreground">Reserva en 1 clic</p>
              <p className="text-xs text-muted-foreground">WhatsApp integrado</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
            className="absolute -right-4 bottom-16 hidden rounded-xl border border-border bg-card/95 p-3 shadow-xl backdrop-blur sm:flex sm:items-center sm:gap-2.5"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand/12 text-brand">
              <Zap className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-foreground">Carga en 0,9 s</p>
              <p className="text-xs text-muted-foreground">Puntaje 99/100</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
